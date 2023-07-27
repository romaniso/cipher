const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv, createDecipheriv } = require('crypto');

async function encryptText(text, password, salt) {
    //First we'll generate the key. The key length is dependent on the algorithm.
    //In this case for aes192, it is 24 bytes (192 bits).
    const algorithm = 'aes-192-cbc'; //AES-192
    const key = await scrypt(password, salt, 24);
    const iv = await randomBytes(16); //Initialisation vector, additional password, every time generates random chars

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex'); // from utf8 to hex
    encrypted += cipher.final('hex');

    return {
        encrypted,
        iv: iv.toString('hex')
    };
}

async function decryptText(text, password, salt, ivHex){
    //First we'll generate the key. The key length is dependent on the algorithm.
    //In this case for aes192, it is 24 bytes (192 bits).
    const algorithm = 'aes-192-cbc'; //AES-192
    const key = await scrypt(password, salt, 24);
    const iv = Buffer.from(ivHex, 'hex'); //Initialisation vector.

    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, 'hex', 'utf8'); // from hex to utf8
    decrypted += decipher.final('utf8');

    return decrypted;
}

module.exports = {
    encryptText,
    decryptText,
};
