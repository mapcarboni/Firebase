const firebaseApp = firebase.initializeApp({

});

const auth = firebase.auth();

const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email, password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      document.write("You are signed up successfully");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email, password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      document.write("You are signed in successfully");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
