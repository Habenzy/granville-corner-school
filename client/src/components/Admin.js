import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { setUserProperties } from "firebase/analytics";

async function createGalleryEntry(entry, gallery) {
  await setDoc(doc(db, gallery, entry.name), entry);
}

async function createEventEntry(entry) {
  await setDoc(doc(db, "events", entry.name), entry);
}

export default function Admin(props) {
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [gallery, setGallery] = useState("");
  const [imagePath, setImagePath] = useState("");

  return (
    <div id="admin-body">
      <form id="gallery-form" onSubmit={(evt) => {
        evt.preventDefault()
        let dbEntry = {
          name: name,
          blurb: blurb,
          url: imagePath,
          gallery: gallery
        }

        console.log(dbEntry)
      }}>
        <label for="file-name">Image name</label>
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
        <label for="blurb">Description that will appear under the image</label>
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
        <label for="gallery-choice">
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
        <label for="image">Choose an Image to upload</label>
        <input
          onChange={(evt) => {
            setImagePath(evt.target.files[0]);
          }}
          required={true}
          name="image"
          type="file"
          accept="image/png, image/jpeg"
        />

        <input type="submit" value="Submit Photo"/>
      </form>
    </div>
  );
}
