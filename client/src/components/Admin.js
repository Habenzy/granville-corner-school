import { setDoc, doc } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { setUserProperties } from "firebase/analytics";

async function createEventEntry(entry) {
  await setDoc(doc(db, "events", entry.name), entry);
}

export default function Admin(props) {
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [gallery, setGallery] = useState("history");
  const [imageFile, setImageFile] = useState("");

  async function createGalleryEntry() {
    let galleryRef = ref(storage, gallery);
    console.log(galleryRef);
    let imgRef = ref(galleryRef, imageFile.name);
    console.log(imgRef);
    const uploadTask = uploadBytesResumable(imgRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let entry = {
            name: name,
            blurb: blurb,
            url: downloadURL,
          };
          console.log(db, gallery, entry.name)
          setDoc(doc(db, gallery, entry.name), entry);
        });
      }
    );
  }

  return (
    <div id="admin-body">
      <form
        id="gallery-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          createGalleryEntry();
        }}
      >
        <label htmlFor="file-name">Image name</label>
        <input
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          value={name}
          required={true}
          name="file-name"
          type="text"
          placeholder="Image name..."
        />
        <label htmlFor="blurb">
          Description that will appear under the image
        </label>
        <input
          onChange={(evt) => {
            setBlurb(evt.target.value);
          }}
          value={blurb}
          required={true}
          name="blurb"
          type="text"
          placeholder="Image blurb..."
        />
        <label htmlFor="gallery-choice">
          Choose the Gallery you want this image to appear in
        </label>
        <select
          onChange={(evt) => {
            setGallery(evt.target.value);
          }}
          value={gallery}
          required={true}
          name="gallery-choice"
        >
          <option value="history">Historical Gallery</option>
          <option value="restoration">Restoration Gallery</option>
          <option value="event">Event Gallery</option>
        </select>
        <label htmlFor="image">Choose an Image to upload</label>
        <input
          onChange={(evt) => {
            setImageFile(evt.target.files[0]);
          }}
          required={true}
          name="image"
          type="file"
          accept="image/png, image/jpeg"
        />
        <input type="submit" value="Submit Photo" />
      </form>
    </div>
  );
}
