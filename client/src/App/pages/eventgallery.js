import React from 'react';
import Footer from './footer';
import Header from './header';



class EventGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      {name: 'Corner-School-Float-photo', blurb:'\nThe Corner School Float in the Warren 4th of July Parade', ext: '.jpg'},
      {name: 'IMG_0590', blurb:'\nCupKate at the Corner School bake sale', ext:'.jpg' },
      {name: 'IMG_0829', blurb:'\nThe Grancille selesct board selling the Corner School building to the Corner School Resource Center group', ext:'.jpg'},
      {name: 'IMG_0830', blurb:'\n', ext:'.jpg'},
      {name: 'IMG_0837', blurb:'\n', ext:'.jpg'},
      {name: 'IMG_0810', blurb:'\nCarrie Turnbull', ext:'.jpg'},
      {name: 'image1', blurb:'\nChris Millard', ext:'.jpeg'},
      {name: 'image2', blurb:'\nMargaret & Bruce Hyde', ext:'.jpeg'},
      {name: 'image3', blurb:'\nChris Millard & Diane Eramo', ext:'.jpeg'},
      {name: 'image4', blurb:'\nBecky Burgee', ext:'.jpeg'},
      {name: 'image5', blurb:'\nValerie Becker', ext:'.jpeg'},
      {name: 'image6', blurb:'\nKate Stauss & ??', ext:'.jpeg'},
      {name: 'image7', blurb:'\nThe Big Blue Truck', ext:'.jpeg'},
      {name: 'image8', blurb:'\nSchool is open!', ext:'.jpeg'},
      {name: 'image9', blurb:'\nReady for classes at the Corner School', ext:'.jpeg'},
      {name: 'image10', blurb:'\nThe event signs', ext:'.jpeg'},
      {name: 'image11', blurb:'\nInstalling the last piece of sub-flooring\n-carpenter Jon Lambert', ext:'.jpeg'},
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