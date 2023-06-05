
  const firebaseConfig = {
    apiKey: "AIzaSyB40kFtNVIbuyW_vukfMG12ZRWDv9YSnW0",
    authDomain: "muisc-player-3e84b.firebaseapp.com",
    databaseURL: "https://muisc-player-3e84b-default-rtdb.firebaseio.com",
    projectId: "muisc-player-3e84b",
    storageBucket: "muisc-player-3e84b.appspot.com",
    messagingSenderId: "125650819619",
    appId: "1:125650819619:web:055154588db5f4dd12af96"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  const app = firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const auth = firebase.auth();
  
  function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  alert(email.value);
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.then(u =>{
  // alert("Signed Up");})
  window.location.href="index.html";})
  promise.catch(e => alert(e.message));}
  
  function signIn()
      {  
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.then(u =>{
          window.location.href="index.html";})
        promise.catch(e => alert(e.message)); 
      }



//  function logout() {
//       firebase.auth().signOut()
//   }
  
  
      auth.onAuthStateChanged(function(user){
        console.log("Hellooooooo")
        if(user){
          
          var email = user.email;
          console.log("Active User " + email)
          }
          else
        {
          console.log("No Active User");
        }
            
      });


      // Logout function
function logout() {
    firebase.auth().signOut()
      .then(function() {
        window.location.href = 'signup.html'; // Redirect to signin.html
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }


  // Check if the user is authenticated
// firebase.auth().onAuthStateChanged(function(user) {
//     if (!user) {
//       // User is signed in, allow access to index.html
//       window.location.href = 'signup.html';
//     } 
//   });