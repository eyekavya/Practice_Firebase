import { useEffect, useState } from "react";
import "./App.css";
import authApi from "./utils/firebase/auth/authApi";
import firebaseDb from "./utils/firebase/firestore/db";

function App() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  function handleEmail(event) {
    setUserData({ ...userData, email: event.target.value });
  }

  function handlePassword(event) {
    setUserData({ ...userData, password: event.target.value });
  }

  function onChangeSignin(e) {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  }

  async function onClickSignUp() {
    const data = await authApi.signUpWithEmailPassword(userData);
    await firebaseDb.saveDoc(data?.user?.uid, {
      ...userData,
      displayName: data?.user?.displayName,
      signedUp: firebaseDb.getTimeStamp(),
    });
    console.log(data);
  }

  async function onClickSignIn() {
    const data = await authApi.signInWithEmailPassword(userData);
    console.log(data);
  }

  useEffect(() => {
    authApi.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);

  return (
    <>
      <div>
        <div style={{ marginBottom: "5rem" }}>
          <input
            type="email"
            name="email"
            onChange={handleEmail}
            value={userData.email}
          />
          <input
            type="password"
            name="password"
            onChange={handlePassword}
            value={userData.password}
          />
          <button onClick={onClickSignUp}>Sign Up</button>
        </div>

        <input
          type="email"
          name="email"
          onChange={onChangeSignin}
          value={signInData.email}
        />
        <input
          type="password"
          name="password"
          onChange={onChangeSignin}
          value={signInData.password}
        />
        <button onClick={onClickSignIn}>Sign In</button>

        <br />

        {authApi.auth.currentUser && (
          <button onClick={authApi.logout}>Logout</button>
        )}
      </div>
    </>
  );
}

export default App;
