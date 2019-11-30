firebase.initializeApp(/* Paste Firebase configuration here. */);

firebase
  .auth()
  .signInWithEmailAndPassword("user@example.com", "secret")
  .then(() => {
    firebase
      .firestore()
      .collection("example")
      .onSnapshot(() => {});
  });
