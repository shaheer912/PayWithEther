# PayWithEther
**Contributors:** shaheer912  
**Tags:** payment, crypto, ethereum, ether, jQuery
**Requires at least:** Metamask Browser Plugin, web3.js, jQuery  

A really simple jQuery plugin to add a "Pay With Ether" button to any page.

## Description

This Pay With Ether jQuery plugin enables you to easily add a simple "Pay With Ether" button to any HTML page. If the user has Metamask plugin installed. 

Features:

* Automatically detects if Metamask is installed, if not will prompt the user to install it.
* Highly configurable

## Installation

Include jQuery (make sure its latest version):

```js
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

Include Web3.js (make sure its latest version):
```js
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
```

Include PayWithEther.js
```js
<script src='PayWithEther.js'></script>
```

Create HTML button
```js
<a href='#' id="pay_with_ether">Pay With Ether</a>
```

Call payWithEther on the HTML button with correct options.
```js
var options = {
  toAccount: 'your account address here',
  amount: 1 // amount in ether
};
jQuery('#pay_with_ether').payWithEther(options);
```

Done.

## Configuration

Following options can be modified:

```js
var defaults = {
  amount : 1, // required, will throw error if not specified
  web3Object : web3Object, // you can pass your own web3 object if you want to override the plugin's functionality
  toAccount : null, // your account, required, will throw error if not specified
  // default error message if Metamask plugin is not installed.
  metaMaskNotFoundError: 'Metamask Plugin not installed, you need to have metamask plugin installed to Pay with Ether, install it from https://metamask.io',
  // Default success message, if payment was successfull
  transferSuccessMessage: 'Transfer successfull, here is your transaction hash: {transaction_hash}',
  
  // Default error message, if payment failed with an error
  transferErrorMessage: 'Transfer failed with following error: {error}',
  
  // Default error message, if user does not have enough balance to complete the payment
  insufficientBalanceMessage: 'You dont have enough balance to complete this payment, you need {needed_balance} ether, you have {current_balance} ether',
  
  // Generic error message if transaction fails with an error
  transactionErrorMessage: 'Transaction failed with following error: {error}',
  
  // Callback to process response from Etherium network against a transaction, it is recommended that you overwrite this, as at the moment it will just show alert/failure as a javascript alert.
  responseCallback: responseCallback
};
```js
