import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCpRwTusp22rGoGePNPW2P8BJzf5dFvuNk",
	authDomain: "crown-db-a4c8c.firebaseapp.com",
	databaseURL: "https://crown-db-a4c8c.firebaseio.com",
	projectId: "crown-db-a4c8c",
	storageBucket: "crown-db-a4c8c.appspot.com",
	messagingSenderId: "462164405331",
	appId: "1:462164405331:web:1bb4187e68be22e74d2aa6",
	measurementId: "G-4K6M5VJV98",
};
//here we are taking user details which we got from authentication in signin and then store inside a database
//so,for that
//here additional data is like signup details,

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	//snapshot simply refer to data
	const snapShot = await userRef.get();
	console.log(snapShot);
};

firebase.initializeApp(config);

//we are using this for google authentication whenever if we want some functioalities to other files
// in auth so we are using export (below)
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//now we are setting google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//it will give one prompt and select any google related accounts

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
