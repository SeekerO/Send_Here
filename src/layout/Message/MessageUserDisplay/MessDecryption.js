import CryptoJS from 'crypto-js';
export const MessDecryption = (data_encrypt, sckey) => {
    const bytes = CryptoJS.AES.decrypt(data_encrypt, sckey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
}
