import * as admin from 'firebase-admin';
// Import the service account JSON file directly
import serviceAccount from './serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});
console.log("app initialized")

// Export the admin to use it in other files
export default admin;
