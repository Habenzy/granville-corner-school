import React from 'react';
import Footer from './footer';
import Header from './header';


class RestorationGallery extends React.Component {


  componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      { name: 'Corner-School-looking-South', blurb: '\n' },
      { name: 'Eleanor-and-Kate', blurb: '\n' },
      { name: 'Eleanor', blurb: '\n' },
      { name: 'Granville_91207-039', blurb: '\n' },
      { name: 'Granville_91207-044', blurb: '\n' },
      { name: 'Granville_91207-014', blurb: '\n' },
      { name: 'IMG_1757', blurb: '\n' },
      { name: 'IMG_1758', blurb: '\n' },
      { name: 'IMG_1760', blurb: '\n' },
      { name: 'IMG_7376', blurb: '\n' },
      { name: 'image1', blurb: '\n' },
      { name: 'image2', blurb: '\n' },
      { name: 'image3', blurb: '\n' },
      { name: 'image4', blurb: '\n' },
      { name: 'IMG_9462', blurb: '\n' },
      { name: 'IMG_9463', blurb: '\n' },
      { name: 'IMG_9464', blurb: '\n' },
      { name: 'IMG_9465', blurb: '\n' },
      { name: 'IMG_9467', blurb: '\n' },
      { name: 'IMG_9461', blurb: '\n' }
    ];
    let thumbElements = [];

    for (let image of images) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${image.name} src=${"/images/restoration/" + image.name + ".jpeg"} alt=${image.blurb} />
        </div>
        <div id=${"modal-" + image.name} class="modal">
          <span class="close" id=${"close-" + image.name}>&times;</span>
          <img class="modal-content" id=${"img-" + image.name} src=${"/images/restoration/" + image.name + ".jpeg"}>
          <div class="description"><br />${image.blurb}</div>
        </div>`
      );
      thumbElements.push(document.getElementById(image.name));
    };

    thumbElements.forEach(function (img) {
      let modal = document.getElementById("modal-" + img.id);
      console.log(modal);
      document.getElementById(img.id).onclick = function () {
        modal.style.display = "block";
      };
      document.getElementById("close-" + img.id).onclick = function () {
        modal.style.display = "none"
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div id="photo-gallery"></div>
        <Footer />
      </div>
    )
  }
}

export default RestorationGallery