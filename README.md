# PayWithEther
**Contributors:** leewillis77  
**Tags:** payment, crypto, ethereum, ether, jQuery
**Requires at least:** Metamask Browser Plugin, web3.js, jQuery  

A really simple jQuery plugin to add a "Pay With Ether" button to any page.

## Description

This Pay With Ether jQuery plugin enables you to easily add a simple "Pay With Ether" button to any HTML page. If the user has Metamask plugin installed. 

Features:

* Automatically detects if Metamask is installed, if not will prompt the user to install it.
* Highly configurable

## Installation

* Include jQuery (make sure its latest version):

```js
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

* Include Web3.js (make sure its latest version):
```js
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
```

Include PayWithEther.js
```js
<script src='PayWithEther.js'></script>
```

```js
<a href='#' id="pay_with_ether">Pay With Ether</a>
```

Call it with correct options.
```js
var options = {
  toAccount: 'your account address here',
  amount: 1 // amount in ether
};
jQuery('#pay_with_ether').payWithEther(options);
```

Done.
