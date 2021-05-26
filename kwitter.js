function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    password = document.getElementById("password").value;
    password.length =  0;
    user_name.length = 0;
    
    if(password.length <= 5  ||  user_name.length == 0) {
        window.alert("Please Enter the Username and a 6 Digit Password Before Moving On");
    } 
    
    if (password.length >= 6  &&  user_name.length >= 1) {
        window.location = "kwitter_room.html";
    }

}