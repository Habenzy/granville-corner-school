import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

function Gallery(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getDocs(collection(db, props.section)).then((querySnapshot) => {
      let imgData = [];
      querySnapshot.forEach((doc) => {
        imgData.push(doc.data());
      });
      console.log(imgData);
      setImages(imgData);
    });
  }, []);

  return (
    <div>
      <div id="photo-gallery">
        {images.map((image) => {
          return (
            <Image name={image.name} blurb={image.blurb} url={image.url} />
          );
        })}
      </div>
    </div>
  );
}

function Image(props) {
  const [modalOpen, setModal] = useState(false)

  return (
    <>
      <div class="image-thumb" onClick={() => {
        setModal(true)
      }}>
        <img class="thumb" src={props.url} alt={props.blurb} />
      </div>
      <div class="modal" display={modalOpen}>
        <span class="close" onClick={() => {
          setModal(false)
        }}>
          &times;
        </span>
        <img
          class="modal-content"
          src={props.url}
          alt={props.name}
        />
        <div class="description">
          <br />
          {props.blurb}
        </div>
      </div>
    </>
  );
}

export default Gallery;
