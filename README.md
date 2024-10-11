# Anti-Steal for Credentials

This package provides enhanced security for storing credentials on the client side. Using **Security LS**, it securely saves credentials into the website's local storage or session storage with encryption.

### Installation

To use this package, follow the steps below.

1. **Install via Terminal**:
   ```bash
   npm i antisteal-credentials
   ```

2. **Or Load from a CDN URL** (add this script to your HTML):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/antisteal-credentials"></script>
   ```

### Example Usage

Once installed, you can use the `securityCredentials` class to protect your credentials in localStorage.

```javascript
// Import the Anti-Steal Credentials package
import SecurityCredentials from "antisteal-credentials";

// Initialize the SecurityCredentials class
const credentialsManager = new SecurityCredentials();

// Save credentials securely
credentialsManager.saveCredentials('apiToken', 'your-secure-api-token');

// Retrieve credentials securely
const token = credentialsManager.getCredentials('apiToken');
console.log('Your API Token:', token);

// Clear a specific credential
credentialsManager.clearCredentials('apiToken');

// Clear all stored credentials
credentialsManager.clearAllCredentials();
```

### Features:
- **saveCredentials(key, value)**: Encrypts and saves the provided credentials.
- **getCredentials(key)**: Decrypts and retrieves the stored credentials by key.
- **clearCredentials(key)**: Removes a specific credential from storage.
- **clearAllCredentials()**: Clears all stored credentials.

This package helps protect sensitive credentials (e.g., API tokens, session tokens) from being easily exposed in the browser's localStorage. Always combine it with other security best practices such as HTTPS, XSS protection, and short-lived tokens.
