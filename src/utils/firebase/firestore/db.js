import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from "..";

const db = getFirestore(app);

const saveDoc = async (uid, data) => {
  const docRef = doc(db, "user", uid);
  return await setDoc(docRef, { ...data, rBDOM: "Dtd" }).catch((error) => {
    return error;
  });
};

const firebaseDb = { saveDoc };

export default firebaseDb;
