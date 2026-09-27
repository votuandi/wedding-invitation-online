# wedding-invitation-online

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## RSVP and Firebase security

The RSVP form creates a document in the existing `thiepMoi` collection with the existing fields: `name` (string), `phone` (string, optional), and `join` (boolean). Browser validation improves the user experience but is not a security boundary.

No `firebase.json`, Firestore Rules file, Firebase CLI deployment configuration, or App Check configuration exists in this repository. Therefore, this repository does **not** verify the currently deployed Firestore Rules or establish that guest data is secure. No Firebase Console setting was changed by this project update.

Before deployment, the Firebase project owner must review the currently deployed rules in Firebase Console and apply an equivalent policy only after confirming it does not conflict with other application needs:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /thiepMoi/{rsvpId} {
      allow create: if request.resource.data.keys().hasOnly(['name', 'phone', 'join'])
        && request.resource.data.name is string
        && request.resource.data.name.size() > 0
        && request.resource.data.name.size() <= 100
        && request.resource.data.phone is string
        && request.resource.data.phone.size() <= 30
        && request.resource.data.join is bool;
      allow read, update, delete: if false;
    }
  }
}
```

The Firebase web configuration in `src/core/myFirebase.js` is intentionally visible to clients; it identifies the Firebase project and is not a password or service-account credential. Access control belongs in Firestore Security Rules. App Check is not enabled or claimed here because its provider/site-key setup cannot be verified from this repository. The project owner may configure and enforce App Check in Firebase Console after completing the provider-specific setup.

There is no automated test framework configured. Manual verification: submit whitespace-only name (must show an error); submit unsupported phone text (must show an error); submit a valid Vietnamese formatted number such as `090 123 4567` or `+84 90 123 4567`; double-click submit while throttling the network (only one request should be started); force a Firestore permission/network failure (entered values must remain); and confirm values clear only after a successful write.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
