# Flow App Frontend

## Firebase Configuration

> This codebase is written in aim to ready to configure for all blockchain ecosystems. Therefore, you can follow the steps below to set up the project for your own ecosystem. Just know that through the documentation, we will use the arbitrary variable `<ecosystem_name>` to refer to the blockchain ecosystem you are working on. For example, if you are working on Polkadot, you can use 'polka' as the ecosystem name. Just know that, this variable needs to be consistent throughout the documentation (also in the backend documentation).

1. Create a new project in Firebase ('Add project' in <https://firebase.google.com/>)
2. Create 'Cloud Firestore' database.
3. Update database rules as below,

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write: if request.auth != null;
      allow read: if true;
    }
  }
}
```

> Note: This is not a secure way to set up the database. This is just for testing purposes. Please refer to the [Firebase documentation](https://firebase.google.com/docs/firestore/security/get-started) for more information.

4. Create collection named '<ecosystem_name>-repositories-data' in the database. Under that collection, create '_names' document. Under that document, create 'repository_names' list. Add all the repositories you want to track as list item in '{owner: GITHUB_PROJECT_OWNER, repo: GITHUB_PROJECT_NAME}' format.
5. Create collection named '<ecosystem_name>-repositories-info'.
6. Create collection named '<ecosystem_name>-repositories-overall'. Under that collection, create '_overall' document.

```
- <ecosystem_name>-repositories-data
  |- _names
     |- repository_names
        |- {owner: GITHUB_PROJECT_OWNER, repo: GITHUB_PROJECT_NAME}

- <ecosystem_name>-repositories-info

- <ecosystem_name>-repositories-overall
  |- _overall

```

> Collection names will be used in .env file.

## Algolia Configuration

1. Create a new project in Algolia ('Create applications' in <https://www.algolia.com/account/applications>).

## Firebase-Algoila Integration

This integration is used to sync the data in Firestore to Algolia. This is done by using a Firebase extension. Whenever new data is added to Firestore, it will be automatically synced to Algolia and will be indexed. This also applies for the updates and deletions.

1. Go to project extensions in Firebase (In <https://console.firebase.google.com/project/[FIREBASE_PROJECT_NAME>]/extensions).
2. Install `Search Firestore with Algolia` extension.
3. Review billing and usage plan. This extension reqires pay as you go plan.
4. Review APIs enabled and resources created. You need to enable Cloud Functions, Artifact Registry, and Secret Manager.
5. Review access granted to this extension.
6. Configure the extension as,

```
Collection path: <ecosystem_name>-repositories-info
Indexable Fields (Optional): <leave empty>
Force Data Sync (Optional): No
Algolia Index Name: <index-name> # for example: firebase-polka-indexed
Algolia Application Id: <Algolia Application Id> # This is the Algolia application you want to index your data to. You can find your credentials including application ID on your Algolia dashboard, under the API keys tab.
Algolia Admin API Key: <Algolia Admin API Key> # We recommend creating a new API key with “addObject”, “deleteObject”, “listIndexes”, “deleteIndex”, “editSettings”, and “settings” permissions. Do not use the Admin API key.
Transform Function Name (Experimental) (Optional) : <leave empty>
Full Index existing documents?: Yes
Cloud Functions location: <choose a location>

```

6. Click 'Install Extension' button.
7. After waiting for a while, you will see the extension is installed. Click 'Get Started' button.

> If you search for any project after the configuration, and you don't see any results (and no error in console), just know that, you needed to set 'Full Index existing documents?' to 'Yes' in the configuration.

Detailed integration document can be found here: <https://github.com/algolia/firestore-algolia-search/tree/main>

## Typeform Configuration

1. Create a new form in Typeform ('Create a new typeform' in <https://admin.typeform.com/>).
2. Get the form ID of the form. This will be used in .env file.
3. `Publish` the form. This will make the form available to the public.

> If you get an error about the form not found, just know that, you forgot to publish the form.

## Get Firebase Admin SDK

1. Open project settings of the Firebase project (In <https://console.firebase.google.com/project/[FIREBASE_PROJECT_NAME>]/settings/general).
2. Create new app (In 'Your apps' section). These variables will be used in .env file.
3. Go to 'Service accounts' tab.
4. Click 'Generate new private key' button. This will download a json file. This file will be used in [backend](https://github.com/justmert/eco-flow-backend).

Create .env file in the root directory and add the following variables:

```
REACT_APP_PROJECT_NAME # Name of the project. For example: PolkaFlow
REACT_APP_ECOSYSTEM # Name of the ecosystem. This will be used in the title of the page etc. For example: Polkadot

# Variables below can be obtained from step 'Algolia Configuration' and 'Firebase-Algoila Integration'
REACT_APP_ALGOLIA_APPLICATION_ID  # Algolia Application ID
REACT_APP_ALGOLIA_ADMIN_API_KEY # Algolia Admin API Key
REACT_APP_ALGOLIA_INDEX_NAME # Algolia Index Name

# Variables below can be obtained from step 'Get Firebase Admin SDK'
REACT_APP_FIREBASE_CONFIG_API_KEY # Firebase API Key
REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN # Firebase Auth Domain
REACT_APP_FIREBASE_CONFIG_DATABASE_URL # Firebase Database URL
REACT_APP_FIREBASE_CONFIG_PROJECT_ID # Firebase Project ID
REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET # Firebase Storage Bucket
REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID # Firebase Messaging Sender ID
REACT_APP_FIREBASE_CONFIG_APP_ID # Firebase App ID 
REACT_APP_FIREBASE_CONFIG_API_MEASUREMENT_ID # Firebase API Measurement ID # Leavy empty if you don't have one
 
REACT_APP_FIREBASE_INFO_COLLECTION # Firebase Info Collection. For example: polka-repositories-info
REACT_APP_FIREBASE_DATA_COLLECTION # Firebase Data Collection name. For example: polka-repositories-data
REACT_APP_FIREBASE_OVERALL_COLLECTION # Firebase Overall Collection name. For example: polka-repositories-overall

REACT_APP_TYPEFORM_ID # Typeform ID
REACT_APP_LOGO # Logo name in icons folder. A icon named `<ecosystem_name>.png` should be in icons directory (src/assets/icons).
```

## Example .env file

The information below is an example of .env file. Ids and keys are not real. You need to replace them with your own. It is provided just to give an idea about the variables.

```

REACT_APP_PROJECT_NAME = "PolkaFlow"
REACT_APP_ECOSYSTEM = "Polkadot"

REACT_APP_ALGOLIA_APPLICATION_ID = "7BVPNT3R24"
REACT_APP_ALGOLIA_ADMIN_API_KEY = "140b1a252bz678vaa2rb92w4b939e012"
REACT_APP_ALGOLIA_INDEX_NAME = "firebase-polka-indexed"

REACT_APP_FIREBASE_CONFIG_API_KEY = "AIzlSyjKnEgcJlvv0LQsBaCuU6M_y5bb233lfQ"
REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN = "polkapulse-c9c35.firebaseapp.com"
REACT_APP_FIREBASE_CONFIG_DATABASE_URL = "https://polkapulse-c9c35-default-rtdb.firebaseio.com"
REACT_APP_FIREBASE_CONFIG_PROJECT_ID = "polkapulse-c9c35"
REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET = "polkapulse-c9c35.appspot.com"
REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID= "758214764453"
REACT_APP_FIREBASE_CONFIG_APP_ID = "1:758414761481:web:e1322913d853d1d4aca2b8"
REACT_APP_FIREBASE_CONFIG_API_MEASUREMENT_ID = "G-FNVWVA5WPM" 

REACT_APP_FIREBASE_INFO_COLLECTION="polka-repositories-info"
REACT_APP_FIREBASE_DATA_COLLECTION="polka-repositories-data"
REACT_APP_FIREBASE_OVERALL_COLLECTION="polka-repositories-overall"

REACT_APP_TYPEFORM_ID="q56c3dPt"
REACT_APP_LOGO="polka"
```

> For testing, create a .env file in the root directory, and copy the above information. Then run the following command in the terminal.
> `npm run start`. This will start the app in the development mode. Just know that if you don't set up the backend, you won't be able to see the data.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
