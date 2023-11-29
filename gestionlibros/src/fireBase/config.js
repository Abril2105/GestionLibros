// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCsrVurFzEf_nPm0ycr_jfK_VjD9V2R2xU",
//   authDomain: "gestion-libros.firebaseapp.com",
//   projectId: "gestion-libros",
//   storageBucket: "gestion-libros.appspot.com",
//   messagingSenderId: "484159363631",
//   appId: "1:484159363631:web:01f02e7e564df5f01344da"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc80JcKiYM9j2QBwNrgt_SChOjBHvxrRg",
  authDomain: "book-manager-ui.firebaseapp.com",
  projectId: "book-manager-ui",
  storageBucket: "book-manager-ui.appspot.com",
  messagingSenderId: "226207809073",
  appId: "1:226207809073:web:e1e7c9fe3907bd82cadf10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

