import React from "react";
import Footer from "./footer";
import Header from "./header";

class RestorationGallery extends React.Component {
  componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      { name: "Corner-School-looking-South", blurb: "\n", ext: ".jpg" },
      { name: "Eleanor-and-Kate", blurb: "\n", ext: ".jpg" },
      { name: "Eleanor", blurb: "\n", ext: ".jpg" },
      { name: "Granville_91207-039", blurb: "\n", ext: ".jpg" },
      { name: "Granville_91207-044", blurb: "\n", ext: ".jpg" },
      { name: "Granville_91207-014", blurb: "\n", ext: ".jpg" },
      { name: "IMG_1757", blurb: "\n", ext: ".jpg" },
      { name: "IMG_1758", blurb: "\n", ext: ".jpg" },
      { name: "IMG_1760", blurb: "\n", ext: ".jpg" },
      { name: "IMG_7376", blurb: "\n", ext: ".jpg" },
      { name: "image2", blurb: "\n", ext: ".jpeg" },
      { name: "image1", blurb: "\n", ext: ".jpeg" },
      { name: "image3", blurb: "\n", ext: ".jpeg" },
      { name: "image4", blurb: "\n", ext: ".jpeg" },
      { name: "IMG_9462", blurb: "\n", ext: ".jpg" },
      { name: "IMG_9463", blurb: "\n", ext: ".jpg" },
      { name: "IMG_9464", blurb: "\n", ext: ".jpg" },
      { name: "IMG_9467", blurb: "\n", ext: ".jpg" },
      {
        name: "IMG_0048",
        blurb: "\nArtifacts found in the old school building",
        ext: ".jpeg",
      },
      {
        name: "IMG_0049",
        blurb: "\nRemoval of the floor, and evaluation of the foundation",
        ext: ".jpeg",
      },
      {
        name: "IMG_0051",
        blurb: "\nWork day at the Corner School building",
        ext: ".jpeg",
      },
      { name: "IMG_0288", blurb: "\n", ext: ".jpg" },
      { name: "IMG_0299", blurb: "\n", ext: ".jpg" },
      { name: "IMG_0434", blurb: "\n", ext: ".jpg" },
      { name: "IMG_0436", blurb: "\n", ext: ".jpg" },
      { name: "image0", blurb: "\nGearing up for the 2021 opening!", ext: ".jpeg" },
      { name: "image3_1", blurb: "\n", ext: ".jpeg" },
      { name: "image2_1", blurb: "\nBeautiful new windows.", ext: ".jpeg" },
      { name: "image8_1", blurb: "\n", ext: ".jpeg" },
    ];
    let thumbElements = [];

    for (let image of images) {
      gallery.innerHTML += `<div class="image-thumb">
          <img class="thumb" id=${image.name} src=${"/images/restoration/" +
        image.name +
        image.ext} alt=${image.blurb} />
        </div>
        <div id=${"modal-" + image.name} class="modal">
          <span class="close" id=${"close-" + image.name}>&times;</span>
          <img class="modal-content" id=${"img-" +
            image.name} src=${"/images/restoration/" + image.name + image.ext}>
          <div class="description"><br />${image.blurb}</div>
        </div>`;
      thumbElements.push(document.getElementById(image.name));
    }

    thumbElements.forEach(function(img) {
      let modal = document.getElementById("modal-" + img.id);
      console.log(modal);
      document.getElementById(img.id).onclick = function() {
        modal.style.display = "block";
      };
      document.getElementById("close-" + img.id).onclick = function() {
        modal.style.display = "none";
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="photo-gallery" />
        <Footer />
      </div>
    );
  }
}

export default RestorationGallery;
