
const firebaseConfig = {
      apiKey: "AIzaSyD1aTwneA6ZjZYj0TsGMeJlncx1i9-2NJU",
      authDomain: "kwitter-311f8.firebaseapp.com",
      databaseURL: "https://kwitter-311f8-default-rtdb.firebaseio.com", 
      projectId: "kwitter-311f8",
      storageBucket: "kwitter-311f8.appspot.com",
      messagingSenderId: "390301343400",
      appId: "1:390301343400:web:09d014466abc9c7aa16c9d"
    };
    




function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";


}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}
getData(); 

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
      }
      
      

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }