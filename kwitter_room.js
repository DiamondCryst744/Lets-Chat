var firebaseConfig = {
    apiKey: "AIzaSyDH0mkXPCHIFuNvsbRdYJ9onxPXq__Nj2A",
    authDomain: "lets-chat-6f3dc.firebaseapp.com",
    databaseURL: "https://lets-chat-6f3dc-default-rtdb.firebaseio.com",
    projectId: "lets-chat-6f3dc",
    storageBucket: "lets-chat-6f3dc.appspot.com",
    messagingSenderId: "840055381888",
    appId: "1:840055381888:web:03a302112c4f77d5e86b65",
    measurementId: "G-Z2S5X87WXB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name - " + Room_names);
    room = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}   
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}