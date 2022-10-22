import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const birthCollectionRef = collection(db, "birth");
class BirthDataService {
  addBirth = (newBirth) => {
    return addDoc(birthCollectionRef, newBirth);
  };

  updateBirth = (id, updatedBirth) => {
    const birthDoc = doc(db, "birth", id);
    return updateDoc(birthDoc, updatedBirth);
  };

  deleteBirth = (id) => {
    const birthDoc = doc(db, "birth", id);
    return deleteDoc(birthDoc);
  };

  getAllBirth = () => {
    return getDocs(birthCollectionRef);
  };

  getBirth = (id) => {
    const birthDoc = doc(db, "birth", id);
    return getDoc(birthDoc);
  };
}

export default new BirthDataService();
