1. Add Firebase configuration in `background.js`.
2. Create a user with email "user@example.com" and password "secret" in the Firebase console.
3. Restrict Firestore access to signed in users [1].
4. Go to `about:debugging` in Firefox, click on "This Firefox" and then on "Load Temporary Add-on…". Select the `manifest.json` file.
5. Click on "Inspect" and switch to the "Console" tab.
6. There should be no `FirebaseError` logged in the console.
7. Add the string `"<all_urls>"` to the empty `permissions` array in `manifest.json`.
8. Reload the extension on the `about:debugging` tab.
9. **`FirebaseError: "Missing or insufficient permissions."` is shown in the console.**

[1]

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```
