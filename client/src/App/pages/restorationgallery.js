import React from 'react';
import Footer from './footer';
import Header from './header';


class RestorationGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageNames = ['Corner-School-looking-South', 'Eleanor-and-Kate', 'Eleanor', 'Granville_91207-039', 'Granville_91207-044', 'Granville_91207-014', 'IMG_1757', 'IMG_1758', 'IMG_1760', 'IMG_7376', 'image1', 'image2', 'image3', 'image4', 'IMG_9462', 'IMG_9463', 'IMG_9464', 'IMG_9465', 'IMG_9467', 'IMG_9461'];
    let thumbElements =[];
    
    for (let name of imageNames) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${name} src=${"/images/restoration/" + name + ".jpg"} alt="" />
        </div>
        <div id=${"modal-" + name} class="modal">
          <span class="close" id=${"close-" + name}>&times;</span>
          <img class="modal-content" id=${"img-" + name} src=${"/images/restoration/" + name + ".jpg"}>
        </div>`
      );
      thumbElements.push(document.getElementById(name));
    };

    thumbElements.forEach( function(img){
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
    return(
      <div>
        <Header />
        <div id="photo-gallery"></div>
        <Footer />
      </div>
    )
  }
}

export default RestorationGallery