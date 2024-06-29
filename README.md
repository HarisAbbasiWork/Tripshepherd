# tripsheperd-test

## Project Setup

This guide will help you set up and run the `tripsheperd-test` project locally on your machine.

### Prerequisites

- Node.js (v16 as specified in `package.json`)
- Firebase CLI (To manage and deploy Firebase projects)

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine using your preferred method.

2. **Install Dependencies**

   Navigate to the `functions` directory inside the cloned repository and install the necessary dependencies:

   ```bash
   cd functions
   npm install
   ```

3. **Setup serviceAccount.json**

   To securely authenticate Firebase services in your local environment, you'll need a service account key file, which provides the necessary credentials.
   Generating the Service Account Key
   Go to the Firebase Console: Open Firebase Console.
   Select Your Project: Choose the project associated with this application from the list of Firebase projects.
   Navigate to Project Settings:
   Click on the gear icon (⚙️) next to the project name in the sidebar to open the settings menu.
   Select 'Project settings'.
   Service Accounts Tab:
   Click on the 'Service Accounts' tab located along the top of the project settings page.
   Generate New Private Key:
   Scroll to the bottom of the 'Service Accounts' page.
   Click the 'Generate new private key' button. This will prompt a JSON file to download which contains your service account credentials.
   Adding the Service Account Key to Your Project
   Secure the JSON File:
   Rename the downloaded file to serviceAccount.json for consistency and easier reference in your application code.
   Move the File to the Correct Location:
   Place the serviceAccount.json file in the src directory inside your functions folder. The path relative to the project root should be: functions/src/serviceAccount.json.

4. **Run Functions**
   Development
   Start tsc compiler with watch option:
   npm run build:dev
   Start the emulator firebase emulators:start --only functions
   npm run serve:dev
   For the other supported emulators, please refer to the official documentation: Run Functions Locally
