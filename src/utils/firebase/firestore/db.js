import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import app from "..";

const db = getFirestore(app);

const saveDoc = async (uid, data) => {
  const docRef = doc(db, "user", uid);
  return await setDoc(docRef, data).catch((error) => {
    return error;
  });
};

const getTimeStamp = () => {
  return serverTimestamp();
};

const firebaseDb = { saveDoc, getTimeStamp };

export default firebaseDb;
