import CryptoJS from 'crypto-js';
export const MessEncryption = (data_actual, sckey) => {
    const encrypted = CryptoJS.AES.encrypt(data_actual, sckey).toString();
    return encrypted
}
