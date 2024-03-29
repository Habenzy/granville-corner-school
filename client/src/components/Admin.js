import {
  setDoc,
  doc,
  getDocs,
  query,
  collection,
  updateDoc,
} from "firebase/firestore";
import { db, storage, auth } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function EditEntry(props) {
  const [editName, setEditName] = useState("");
  const [editBlurb, setEditBlurb] = useState("");
  const [editDate, setEditDate] = useState("");
console.log("names", editName, props.name)
console.log('dates')
  function updateGalleryEntry() {
    const imageDoc = doc(db, props.gallery, props.name);
    updateDoc(imageDoc, {
      name: editName || props.name,
      blurb: editBlurb || props.blurb,
      date: editDate || props.date,
    }).then(res => {
      alert("update successful")
    }).catch(err => {
      alert(`update failed: ${err.message}`)
    });
  }

  return (
    <div>
      <img className="edit-thumb" src={props.url} alt={props.name} />
      <form
        className="edit-images"
        onSubmit={(evt) => {
          evt.preventDefault();
          updateGalleryEntry();
        }}
      >
        <label htmlFor="file-name">Image name: </label>
        <br></br>
        <input
          onChange={(evt) => {
            setEditName(evt.target.value);
          }}
          value={editName}
          name="file-name"
          type="text"
          placeholder={props.name}
        />
        <br></br>
        <label htmlFor="date-taken">Date taken: </label>
        <br></br>
        <input
          onChange={(evt) => {
            setEditDate(evt.target.value);
          }}
          value={editDate}
          name="date-taken"
          type="date"
        />
        <br></br>
        <label htmlFor="edit-blurb">
          Description that will appear under the image:
        </label>
        <br></br>
        <input
          onChange={(evt) => {
            setEditBlurb(evt.target.value);
          }}
          value={editBlurb}
          name="edit-blurb"
          type="text"
          placeholder={props.blurb}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

function ChooseEdits(props) {
  const [editGallery, setEditGallery] = useState("history");
  const [editImages, setEditImages] = useState([]);

  useEffect(() => {
    getDocs(query(collection(db, editGallery)))
      .then((querySnapshot) => {
        let imgData = [];
        querySnapshot.forEach((doc) => {
          imgData.push(doc.data());
        });
        setEditImages(imgData);
      })
      .catch((err) => console.log(err.message));
  }, [editGallery]);

  return (
    <div>
      <h3>Select a Gallery to edit</h3>
      <select
        onChange={(evt) => {
          setEditGallery(evt.target.value);
        }}
        value={editGallery}
        required={true}
        name="gallery-edit-choice"
      >
        <option value="history">Historical Gallery</option>
        <option value="restoration">Restoration Gallery</option>
        <option value="event">Event Gallery</option>
      </select>
      <ul id="edit-selection">
        {editImages.map((imageData, index) => {
          return (
            <li key={index}>
              <EditEntry
                name={imageData.name}
                url={imageData.url}
                blurb={imageData.blurb}
                date={imageData.date}
                gallery={editGallery}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Admin(props) {
  //add gallery entry
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [gallery, setGallery] = useState("history");
  const [imageFile, setImageFile] = useState("");
  //add quotes
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  //log in/out
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
            date: date,
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
    <div>
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
            value={date}
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
        <ChooseEdits />
      </div>
      <button
        onClick={(evt) => {
          signOut(auth).then((resp) => {
            setUser(null);
          });
        }}
      >
        Sign Out
      </button>
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
