import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "..";

const auth = getAuth(app);

async function signUpWithEmailPassword(userData) {
  return await createUserWithEmailAndPassword(
    auth,
    userData.email,
    userData.password
  ).catch((error) => {
    return error;
  });
}

async function signInWithEmailPassword(userData) {
  return await signInWithEmailAndPassword(
    auth,
    userData.email,
    userData.password
  ).catch((error) => {
    return error;
  });
}

const authApi = { signUpWithEmailPassword, signInWithEmailPassword };

export default authApi;
