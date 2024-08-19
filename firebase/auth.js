"use client"

import { auth, googleProvider } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";


async function handleAuthOperation(operation, email, password) {
  try {
    const result = await operation(auth, email, password);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}

export function signUpWithEmail(email, password) {
  return handleAuthOperation(createUserWithEmailAndPassword, email, password);
}

export function signInWithEmail(email, password) {
  return handleAuthOperation(signInWithEmailAndPassword, email, password);
}

export async function signInWithGoogle() {
  let result = null,
    error = null;
  try {
    result = await signInWithPopup(auth, googleProvider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}