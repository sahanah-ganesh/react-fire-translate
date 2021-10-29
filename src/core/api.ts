import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const signInWithCredentials = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

export const signout = async () => await signOut(auth);
