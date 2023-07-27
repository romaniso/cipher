# Cipher - encrypt and decrypt your message
***
a tool for encrypting any strings which are supposed to be used as passwords, secret messages, etc. This package offers a module with two function for encrypting and decrypting that can be used inside JS code.

## Used Node.js modules:
- **Util** for promisifying imported modules,
- **Crypto** for managing all scypt-related steps

## Used algorithm:
- AES-192
## How to use it:
1. Import chiper module into your code by CommonJs syntax:
```
const {encryptText, decryptText} = require('./cipher');
```
2. Create salt and password variables. Remember that password must be hidden in your code:
```
const SALT = 'ThisIsRAndomSaltInCaseAUserPutTooSillyPassAndItAddsThisSaltToBeSafer1231321sdfsdf@322z';
const PASSWORD = "Our secret password"; //IT MUST BE HIDDEN IN THE CODE
```
3. Use imported methods from the module inside asynchronous function:
```
(async () => {
    // Let's encrypt the message
    const encrypted = await encryptText("Hi from encrypted text!", PASSWORD, SALT)
    console.log(encrypted);

    // Let's decrypt the message
    const decrypted = await decryptText(encrypted.encrypted, PASSWORD, SALT, encrypted.iv)
    console.log(decrypted);
})();
```
4. Run node environment inside your local folder by the command:
```
    node index
```
5. In your console you will get the following info:
```
{
  encrypted: 'f0148cebe94baa14975840d82ebf2d939698ace3c07dc0a2e2d1e209c672e0b4',
  iv: 'f86da17cdc07f2a163cf6e5045cea5b9'
}
Hi from encrypted text!
```
