import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
// import { getFirestore, addDoc, collection, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAj3r0CHhSwibKXA3cDvEKZhDs4oHfaP8",
  authDomain: "login-app-50cb9.firebaseapp.com",
  projectId: "login-app-50cb9",
  storageBucket: "login-app-50cb9.appspot.com",
  messagingSenderId: "12838731409",
  appId: "1:12838731409:web:d39065137257156f024930",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sélectionner les éléments du formulaire par leur IDdocument
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-btn");

console.log("emailInput");

// Ajouter un écouteur d'événement au bouton pour déclencher l'action
submitButton.addEventListener("click", async () => {
  // Récupérer les valeurs des champs
  const email = emailInput.value;
  const password = passwordInput.value;

if(email && password){
  try {
    const docRef = await addDoc(collection(db, "users"), {
      id: email,
      password: password,
    });
    console.log("User added with ID: ", docRef.id);
    alert("User successfully registered!");
  } catch (error) {
    console.error("Error adding user: ", error);
    alert("Error during registration. Please try again.");
  }
}
});

// const querySnapshot = await getDocs(collection(db, "users"));

// try {
// const docRef = await addDoc(collection(db, "users"), {
// id: mail,
// password: password,
// });
// console.log("Document ID: ", docRef.id);
// } catch (e) {
// console.error("Error adding document: ", e);
// }
