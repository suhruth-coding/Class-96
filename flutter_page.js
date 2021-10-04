// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBO8JYckq4jijTBEmB6YKbaipRzH2WKjt4",
      authDomain: "flutter-48565.firebaseapp.com",
      databaseURL: "https://flutter-48565-default-rtdb.firebaseio.com",
      projectId: "flutter-48565",
      storageBucket: "flutter-48565.appspot.com",
      messagingSenderId: "217029196214",
      appId: "1:217029196214:web:b695d2dd44c12f714aa917"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";     
}