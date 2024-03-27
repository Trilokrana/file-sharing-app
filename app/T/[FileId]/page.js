'use client'
import { app } from "./../../../firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "next/navigation";
import Image from "next/image";
import FileItem from './_component/FileItem'

const FileView = ({ params }) => {
  const [file, setFile] = useState();
  const db = getFirestore(app);
  useEffect(() => {
    console.log(params?.FileId);
    params?.FileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.FileId);
    const docSnap = await getDoc(docRef);
    console.log("Fetched data:", docSnap.data());

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div className="bg-gray-100 items-center h-screen w-full flex justify-center flex-col gap-4">
      <Link href="/">
        <Image src="/logo.svg" width={150} height={100} />
      </Link>
      {file && <FileItem file={file} />}
    </div>
  );
};

export default FileView;