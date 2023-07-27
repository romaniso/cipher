const {encryptText, decryptText} = require('./cipher');

const SALT = 'ThisIsRAndomSaltInCaseAUserPutTooSillyPassAndItAddsThisSaltToBeSafer1231321sdfsdf@322z';
const PASSWORD = "Our secret password"; //IT MUST BE HIDDEN IN THE CODE

(async () => {
    // Let's encrypt the message
    const encrypted = await encryptText("Hi from encrypted text!", PASSWORD, SALT)
    console.log(encrypted);

    // Let's decrypt the message
    const decrypted = await decryptText(encrypted.encrypted, PASSWORD, SALT, encrypted.iv)
    console.log(decrypted);
})();
