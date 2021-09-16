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


user_name= localStorage.getitem(user_name);
document.getElementById("username").innerHtml = "Welcome" + user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class=room_name id= "+Room_names+" onclick='redirecToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name" 
  
      });
      localStorage.setitem("room_name",room_name);
      window.location="kwitter_page.html";
  }
 