(function( $ ) {
	
	var web3Object = null;
	var userAccount = null;
	var amountToPay = null;
	var toAccount = null;
	
    $.fn.payWithEther = function( options ) {
		
		var opts = $.extend( {}, $.fn.payWithEther.defaults, options );
		amountToPay = opts.amount;
		if( !amountToPay ) {
			throw new Error('amount not specified, please specify an amount when calling payWithEther');
		}
		toAccount = opts.toAccount
		if( !toAccount ) {
			throw new Error('toAccount not specified, please specify a toAccount when calling payWithEther');
		}
		var responseCallback = opts.responseCallback;
		if( !responseCallback ) {
			throw new Error('responseCallback not specified, please specify a responseCallback when calling payWithEther');
		}
		
        this.each(function() {
            var $t = $(this);
			$t.click(function(e) {
				if( userAccount == null ) {
					web3Object.eth.getAccounts(function (err, accounts) {
						if( accounts.length > 0 ) {
							userAccount = accounts[0];
						}
						handleClick(amountToPay, toAccount, responseCallback);
					});					
				}
				else {
					handleClick(amountToPay, toAccount, responseCallback);
				}
				
			});
        });
 
        return this;
 
    };
	
	function handleClick(amount, toAccount, responseCallback) {
		if( !web3Object ) {
			alert($.fn.payWithEther.defaults.metaMaskNotFoundError);
		}
		web3.eth.getBalance(userAccount, balanceCallback)
		
		
	}
	
	function detectWeb3() {
		if (typeof(window.web3) != 'undefined') {
			web3Object = new Web3(web3.currentProvider);
			web3Object.setProvider(web3Object.currentProvider);
		}
		return web3Object;
	}
	
	function balanceCallback(error, balanceBigNumber) {
		if( !error ) {
			console.log(balanceBigNumber);
			console.log(amountToPay);
			console.log(balanceBigNumber.comparedTo(amountToPay));
			if( balanceBigNumber.comparedTo(amountToPay) < 0 ) {
				var currBalance = web3.fromWei(balanceBigNumber.toNumber(), "ether");
				alert($.fn.payWithEther.defaults.insufficientBalanceMessage.replace('{needed_balance}', amountToPay).replace('{current_balance}', currBalance));
			}
			else {
				var send = web3.eth.sendTransaction({from:userAccount,to:toAccount, value:web3.toWei(amountToPay, "ether")}, responseCallback);
				console.log(send);
			}
		}
		else {
			alert($.fn.payWithEther.defaults.transactionErrorMessage.replace('{transaction_hash}', transactionHash));
		}
	}
	
	function responseCallback(error, transactionHash) {
		if( !error ) {
			alert($.fn.payWithEther.defaults.transferSuccessMessage.replace('{transaction_hash}', transactionHash));
		}
		else {
			alert($.fn.payWithEther.defaults.transferErrorMessage.replace('{error}', error));
		}
	}
	
	web3Object = detectWeb3();
	
	var defaults = {
        amount : 1,
        web3Object : web3Object,
        toAccount : null,
		metaMaskNotFoundError: 'Metamask Plugin not installed, you need to have metamask plugin installed to Pay with Ether, install it from https://metamask.io',
		transferSuccessMessage: 'Transfer successfull, here is your transaction hash: {transaction_hash}',
		transferErrorMessage: 'Transfer failed with following error: {error}',
		insufficientBalanceMessage: 'You dont have enough balance to complete this payment, you need {needed_balance} ether, you have {current_balance} ether',
		transactionErrorMessage: 'Transaction failed with following error: {error}',
		responseCallback: responseCallback
    };
	
	$.fn.payWithEther.defaults = defaults;
 
}( jQuery ));