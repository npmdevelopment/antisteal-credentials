import SecureLS from 'secure-ls';

// Export the SecurityCredentials class
class SecurityCredentials {
  constructor() {
    // Initialize secure-ls for encrypted storage
    this.ls = new SecureLS({ encodingType: 'aes' }); // AES encryption by default
  }

  // Method to save credentials securely
  saveCredentials(key, value) {
    try {
      this.ls.set(key, value); // Encrypt and store the value
      console.log(`Credentials for ${key} saved successfully.`);
    } catch (error) {
      console.error('Failed to save credentials:', error);
    }
  }

  // Method to retrieve credentials securely
  getCredentials(key) {
    try {
      const credentials = this.ls.get(key); // Decrypt and retrieve the value
      if (credentials) {
        console.log(`Credentials for ${key} retrieved successfully.`);
        return credentials;
      } else {
        console.warn(`No credentials found for ${key}.`);
        return null;
      }
    } catch (error) {
      console.error('Failed to retrieve credentials:', error);
      return null;
    }
  }

  // Method to clear credentials from storage
  clearCredentials(key) {
    try {
      this.ls.remove(key); // Remove the key from storage
      console.log(`Credentials for ${key} cleared.`);
    } catch (error) {
      console.error('Failed to clear credentials:', error);
    }
  }

  // Method to clear all stored credentials
  clearAllCredentials() {
    try {
      this.ls.clear(); // Clear all entries in secure-ls
      console.log('All credentials cleared.');
    } catch (error) {
      console.error('Failed to clear all credentials:', error);
    }
  }
}

// Export the class as default
export default SecurityCredentials;
