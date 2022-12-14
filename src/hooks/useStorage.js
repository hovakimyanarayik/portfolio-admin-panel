import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase.config";

function useStorage() {
    const [isUploading, setIsUploading] = useState(false)
    const [downloadURL, setDownloadURL] = useState(null)

    function uploadFile(options) {
        const storageRef = ref(storage, options.file.name)
        const uploadTask = uploadBytesResumable(storageRef, options.file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                options.onProgress(progress)
                setIsUploading(true)
            },
            (error) => {
                options.onError(error)
                setIsUploading(false)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                options.onSuccess('Ok')
                setIsUploading(false)
                setDownloadURL(downloadURL)
                });
            }
        )
    }

    function removeFileURL() {
        setDownloadURL(null)
    }


    return {isUploading, downloadURL, uploadFile, removeFileURL}
}

export default useStorage