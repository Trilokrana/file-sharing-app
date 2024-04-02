"use client";
import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "../../../../../firebaseConfig";
import FilePreviewWithForm from "./_component/FileInfo";

const FilePreview = ({ params }) => {
  const [file, setFile] = useState();
  const db = getFirestore(app);
  useEffect(() => {
    console.log(params?.FileId);
    params?.FileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.FileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
    
      console.log("No such document!");
    }
  };

  const onPasswordSave = async (password) => {
    console.log(password)
    if (!password) {
      alert("Please enter a password to save.");
      return;
    }

    const docRef = doc(db, "uploadedFile", params?.FileId);
    await updateDoc(docRef, {
      password: password,
    });
  };

  return (
    <div>
      <FilePreviewWithForm file={file} onPasswordSave={onPasswordSave} />
    </div>
  );
};

export default FilePreview;
