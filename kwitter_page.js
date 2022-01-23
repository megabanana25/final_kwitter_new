// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBciO6HpW2PDYv_i1wt0mdESEjOyKJ4OS4",
  authDomain: "kwitter-new-c12b3.firebaseapp.com",
  projectId: "kwitter-new-c12b3",
  storageBucket: "kwitter-new-c12b3.appspot.com",
  messagingSenderId: "545708895071",
  appId: "1:545708895071:web:11a297364245ea1b0324ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name']
         message = message_data['message']
         like = message_data['like']
         name_with_tag = "<h4>" + name + "<img class='user_tick' src = 'tick.png'><h4>";
         like_button = "<button class = 'btn btn-warning' id=" + firebase_message_id + "value ="+like+"</span></button><hr>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span></button><hr>";

        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML+= row; 
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter.html";

}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like buutton -" + message_id);
      button_id + message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes + 1);
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({like : updated_likes})
}

