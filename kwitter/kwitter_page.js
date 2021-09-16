const firebaseConfig = {
      apiKey: "AIzaSyCI85oUTetsZ7t9066oznhQ0IcHFKUJgUw",
      authDomain: "test-9dc37.firebaseapp.com",
      databaseURL: "https://test-9dc37-default-rtdb.firebaseio.com",
      projectId: "test-9dc37",
      storageBucket: "test-9dc37.appspot.com",
      messagingSenderId: "144461755628",
      appId: "1:144461755628:web:00ac6a861ef658a032a1c9"
     
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
     



      } });  }); }
getData();
function logout(){
localStorage.removeitem("user_name");
localStorage.removeitem("room_name");
  window.location="kwitter.html";
}
function send() {
       msg = document.getElementById("msg").value; 
firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
 document.getElementById("msg").value = ""; }