import { setDoc, doc } from "firebase/firestore";
import { db, storage, auth } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Admin(props) {
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [gallery, setGallery] = useState("history");
  const [imageFile, setImageFile] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  });

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
        // gets the functions from storage references the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let entry = {
            name: name,
            blurb: blurb,
            url: downloadURL,
            date: date
          };
          console.log(db, gallery, entry.name);
          setDoc(doc(db, gallery, entry.name), entry);

          setName("");
          setBlurb("");
          setImageFile("");
        });
      }
    );
  }

  function createQuote() {
    let quoteEntry = {
      quote: quote,
      author: author,
    };

    setDoc(doc(db, "quotes"), quoteEntry);

    setAuthor("");
    setQuote("");
  }

  const handleSignIn = (evt) => {
    evt.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  return user ? (
    <div id="admin-body">
      <form
        id="gallery-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          createGalleryEntry();
        }}
      >
        <label htmlFor="file-name">Image name: </label>
        <br></br>
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
        <br></br>
        <label htmlFor="date-taken">Date taken: </label>
        <br></br>
        <input
          onChange={(evt) => {
            setDate(evt.target.value);
          }}
          value={name}
          required={true}
          name="date-taken"
          type="date"
          placeholder="Image name..."
        />
        <br></br>
        <label htmlFor="blurb">
          Description that will appear under the image:
        </label>
        <br></br>
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
        <br></br>
        <label htmlFor="gallery-choice">
          Choose the Gallery you want this image to appear in:
        </label>
        <br></br>
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
        <br></br>
        <label htmlFor="image">Choose an Image to upload:</label>
        <br></br>
        <input
          onChange={(evt) => {
            setImageFile(evt.target.files[0]);
          }}
          required={true}
          name="image"
          type="file"
          accept="image/png, image/jpeg"
        />
        <br></br>
        <input type="submit" value="Submit Photo" />
      </form>

      <button
        onClick={(evt) => {
          signOut(auth).then((resp) => {
            setUser(null);
          });
        }}
      >
        Sign Out
      </button>

      {/* <form
        id="quote-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          createQuote();
        }}
      >
        <input
          type="text"
          name="quote"
          placeholder="Enter a quote or announcement"
          value={quote}
          onChange={(evt) => {
            setQuote(evt.target.value);
          }}
        />
        <input
          type="text"
          name="quote"
          placeholder="Enter an author"
          value={author}
          onChange={(evt) => {
            setAuthor(evt.target.value);
          }}
        />
      </form> */}
    </div>
  ) : (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          name="email"
          placeholder="Email"
        />
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
          name="password"
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
