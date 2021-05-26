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
  room_name = localStorage.getItem("room_name");
  
    function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
  document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name =message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4 style='font-family:Calibri; font-size:23px;'>" + name + "<img style='border-radius:60px; width:18px; height:18px; margin-top:-5px;' src='Drawing-1.sketchpad (1).jpeg'></h4>";
message_with_tag = "<h4 style='font-family:cursive;'>" + message + "</h4>";
like_button = "<button class='btn btn-primary' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id);'>";
span_with_tag = "<span id='likes' class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id) {
  console.log("clicked on like button" + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
     like:updated_likes
  });
  document.getElementById("likes").innerHTML = "Likes:" + updated_likes;
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}