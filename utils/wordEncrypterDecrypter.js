import CryptoJS from 'crypto-js';

// Encryption function
export function encryptSentence(sentence, key = "3Tcq_dBhIrQ") {
  // Encrypt the sentence using AES
  const encrypted = CryptoJS.AES.encrypt(sentence, key).toString();

  // Convert encrypted string to URL-safe base64
  return encodeBase64ToUrlSafe(encrypted);
}

// Decryption function
export function decryptSentence(encryptedSentence, key = "3Tcq_dBhIrQ") {
  // Convert from URL-safe base64 to base64
  const base64Encoded = decodeUrlSafeToBase64(encryptedSentence);

  // Decrypt the base64 encoded string
  const bytes = CryptoJS.AES.decrypt(base64Encoded, key);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  return decrypted;
}

// Utility function to encode base64 to URL-safe base64
export function encodeBase64ToUrlSafe(base64String) {
  return base64String
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Utility function to decode URL-safe base64 to base64
export function decodeUrlSafeToBase64(urlSafeString) {
  return urlSafeString
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .padEnd(urlSafeString.length + (4 - urlSafeString.length % 4) % 4, '=');
}
