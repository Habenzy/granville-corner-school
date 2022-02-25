import { setDoc, doc } from "firebase/firestore";
import {db} from "../config/firebase"
import {useState, useEffect} from "react"


let createEntry = async (entry) => {
  await setDoc(doc(db, "history", entry.name), entry);
}

export default function Admin(props) {
  return(
    <></>
  )
}