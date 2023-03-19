import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";

function Gallery(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getDocs(query(collection(db, props.section), orderBy('url'))).then((querySnapshot) => {
      let imgData = [];
      querySnapshot.forEach((doc) => {
        imgData.push(doc.data());
      });
      setImages(imgData);
    })
    .catch(err => console.log(err.message));
  }, []);

  return (
    <div>
      <div id="photo-gallery">
        {images.length
          ? images.map((image) => {
              return (
                <Image name={image.name} blurb={image.blurb} url={image.url} />
              );
            })
          : "loading..."}
      </div>
    </div>
  );
}

function Image(props) {
  const [modalOpen, setModal] = useState(false);
  return (
    <>
      <div
        class="image-thumb"
        onClick={() => {
          console.log("opening modal");
          setModal(true);
        }}
      >
        <img class="thumb" src={props.url} alt={props.blurb} />
      </div>
      {modalOpen && (
        <div class="modal" display={modalOpen}>
          <span
            class="close"
            onClick={() => {
              console.log("closing modal");
              setModal(false);
            }}
          >
            &times;
          </span>
          <img class="modal-content" src={props.url} alt={props.name} />
          <div class="description">
            <br />
            {props.blurb}
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
