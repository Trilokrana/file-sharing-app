"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../../../firebaseConfig"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import RandomStringGenerator from "../../../_utils/RandomString";
import UploadSuccess from "./_components/CompleteCheck";

const Upload = () => {
  const [fileDocId, setFileDocId] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [uploadCompleted, setUploadCompleted] = useState(false);

  const uploadFile = (file, user) => {
    const metadata = {
      contentType: file?.type || "application/octet-stream",
    };
    const storageRef = ref(storage, "File-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file?.type);

    // Remove state change listener when it's no longer needed
    const removeStateChangeListener = uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        if (progress === 100) {
          setShowSuccess(true);
          uploadTask.then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              saveInfo(file, downloadURL);
            });
            removeStateChangeListener();
          });
        }
      }
    );
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = RandomStringGenerator().toString();

    try {
      await setDoc(doc(db, "uploadedFile", docId), {
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
        password: "",
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
      });
      setFileDocId(docId);

      console.log("Document successfully written!");
      console.log("fileDocId should be set here:", fileDocId);
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  useEffect(() => {
    const handleUploadCompletion = () => {
      setUploadCompleted(true);
    };

    if (progress === 100) {
      setTimeout(handleUploadCompletion, 2000);
    }

    return () => {
      window.clearTimeout(handleUploadCompletion);
    };
  }, [progress]);

  useEffect(() => {
    if (uploadCompleted && fileDocId) {
      const handleUploadReset = () => {
        setUploadCompleted(false);
      };

      setTimeout(handleUploadReset, 2000);
      router.push("/File-preview/" + fileDocId);

      return () => {
        window.clearTimeout(handleUploadReset);
      };
    }
  }, [uploadCompleted, fileDocId]);

  return (
    <>
      {showSuccess ? (
        <div className="p-5 px-8 md:px-32 m-4 text-center mt-32">
          <UploadSuccess />
        </div>
      ) : (
        <div className="p-5 px-8 md:px-32">
          <h1 className="text-2xl m-4 text-center mt-16">
            Start <strong className="text-primary">Uploading </strong>
            File and <strong className="text-primary">Share</strong> it
          </h1>
          <UploadForm
            uploadBtn={(file) => uploadFile(file)}
            progress={progress}
          />
        </div>
      )}
    </>
  );
};

export default Upload;
