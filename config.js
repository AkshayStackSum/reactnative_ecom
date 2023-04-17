// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query,getDoc,doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDa9o0yHE9GSxAfrRTl4qQ6SPWJ_JoTiNM",
    authDomain: "task-758ca.firebaseapp.com",
    projectId: "task-758ca",
    storageBucket: "task-758ca.appspot.com",
    messagingSenderId: "696139957910",
    appId: "1:696139957910:web:2a1859e513c38602d024b7"
};


// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const fireStore = getFirestore(firebase);


export const AddCardData = async (item) => {
    try {
        const docRef = await addDoc(collection(fireStore, "CartItems"), item);
        console.warn("Item Added in card: ", docRef.id);
    } catch (e) {
        console.warn("Error adding document: ", e);
    }
}


export const getFireBaseData = async () => {
    try {
       // const querySnapshot = await getDocs(collection(fireStore, "CartItems"));
      //  const querySnapshot = await fireStore.collection('CartItems').get();
       // const querySnapshot = await fireStore.collection('0gS47FJ46iZYe9zk1b3E').get();


        const docRef = doc(fireStore, "CartItems", "3wS6gKhBjbdj7VUzoc0X");
        const docSnap = await getDoc(docRef);
        



        console.warn("Item Getted succesfully: ", docSnap);

    } catch (e) {
        console.warn("Error adding document: ", e);
    }
}


