import React from 'react';
import Footer from './footer';
import Header from './header';



class EventGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      {name: 'Corner-School-Float-photo', blurb:'1 2 1 2 this is just a test', ext: '.jpg'},
    ];

    let thumbElements = []

    
    for (let image of images) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${image.name} src=${"/images/events/" + image.name + image.ext} alt=${image.blurb} />
        </div>
        <div id=${"modal-" + image.name} class="modal">
          <span class="close" id=${"close-" + image.name}>&times;</span>
          <img class="modal-content" id=${"img-" + image.name} src=${"/images/events/" + image.name + image.ext}>
          <div class="description"><br />${image.blurb}</div>
        </div>`
      );
      thumbElements.push(document.getElementById(image.name));
    };

    thumbElements.forEach( function(img){
      let modal = document.getElementById("modal-" + img.id);
      console.log(modal);
      document.getElementById(img.id).onclick = function() {
        modal.style.display = "block";
      };
      document.getElementById("close-" + img.id).onclick = function() {
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

export default EventGallery