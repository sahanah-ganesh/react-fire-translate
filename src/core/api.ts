import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";

const provider = new GoogleAuthProvider();

const db = getDatabase();

export const signInWithCredentials = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

export const signout = async () => await signOut(auth);

export const writeTestData = (path: string, token: string) => {
  set(ref(db, path), {
    button_label: token,
  });
};

export const readTestData = () => {
  const buttonLabelRef = ref(db);
  onValue(buttonLabelRef, (snapshot) => {
    const data = snapshot.val();
    console.log("HIII", Object.keys(data));
  });
};
