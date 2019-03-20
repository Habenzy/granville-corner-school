import React from 'react';
import Footer from './footer';
import Header from './header';


class RestorationGallery extends React.Component {


  componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      { name: 'Corner-School-looking-South', blurb: '' },
      { name: 'Eleanor-and-Kate', blurb: '' },
      { name: 'Eleanor', blurb: '' },
      { name: 'Granville_91207-039', blurb: '' },
      { name: 'Granville_91207-044', blurb: '' },
      { name: 'Granville_91207-014', blurb: '' },
      { name: 'IMG_1757', blurb: '' },
      { name: 'IMG_1758', blurb: '' },
      { name: 'IMG_1760', blurb: '' },
      { name: 'IMG_7376', blurb: '' },
      { name: 'image1', blurb: '' },
      { name: 'image2', blurb: '' },
      { name: 'image3', blurb: '' },
      { name: 'image4', blurb: '' },
      { name: 'IMG_9462', blurb: '' },
      { name: 'IMG_9463', blurb: '' },
      { name: 'IMG_9464', blurb: '' },
      { name: 'IMG_9465', blurb: '' },
      { name: 'IMG_9467', blurb: '' },
      { name: 'IMG_9461', blurb: '' }
    ];
    let thumbElements = [];

    for (let image of images) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${image.name} src=${"/images/events/" + image.name + ".jpg"} alt=${image.blurb} />
        </div>
        <div id=${"modal-" + image.name} class="modal">
          <span class="close" id=${"close-" + image.name}>&times;</span>
          <img class="modal-content" id=${"img-" + image.name} src=${"/images/events/" + image.name + ".jpg"}>
          <div class="description">${image.blurb}</div>
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