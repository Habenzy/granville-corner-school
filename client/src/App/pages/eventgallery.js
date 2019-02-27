import React from 'react';
import Footer from './footer';
import Header from './header';



class EventGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageNames = ['Corner-School-Float-photo',];
    let thumbElements = []

    
    for (let name of imageNames) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${name} src=${"/images/events/" + name + ".jpg"} alt="" />
        </div>
        <div id=${"modal-" + name} class="modal">
          <span class="close" id=${"close-" + name}>&times;</span>
          <img class="modal-content" id=${"img-" + name} src=${"/images/events/" + name + ".jpg"}>
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

export default EventGallery