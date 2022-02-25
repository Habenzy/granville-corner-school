import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

function Gallery(props) {
  return (
    <div>
      <div id="photo-gallery"></div>
    </div>
  );
}

function ImageSet(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {

    getDocs(collection(db, props.section)).then(querySnapshot => {
      querySnapshot.forEach((doc) => {})
    })
    ;
  }, []);

  return (
    <>
      {images.map((image) => {
        return (
          <>
            <div class="image-thumb">
              <img
                class="thumb"
                id={image.name}
                src={image.url}
                alt={image.blurb}
              />
            </div>
            <div id={"modal-" + image.name} class="modal">
              <span class="close" id={"close-" + image.name}>
                &times;
              </span>
              <img
                class="modal-content"
                id={"img-" + image.name}
                src={image.url}
                alt={image.blurb}
              />
              <div class="description">
                <br />
                {image.blurb}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Gallery