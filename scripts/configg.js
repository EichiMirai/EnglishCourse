const firebaseConfig = {
    apiKey: "AIzaSyBIGLldNoUg9biIOgpfvfYAxrCXcdJ2sT4",
    authDomain: "last-c81cc.firebaseapp.com",
    projectId: "last-c81cc",
    storageBucket: "last-c81cc.appspot.com",
    messagingSenderId: "371272447209",
    appId: "1:371272447209:web:fb9dbefb6075265cd22c78"
  }
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });