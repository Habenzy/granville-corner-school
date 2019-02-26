import React from 'react';
import Footer from './footer';
import Header from './header';


class RestorationGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageNames = ['Corner-School-Float-photo', 'Corner-School-looking-South', 'Eleanor-and-Kate', 'Eleanor', 'Granville_91207-039', 'Granville_91207-044', 'Granville_91207-014', 'IMG_1757', 'IMG_1758', 'IMG_1760', 'IMG_7376'];
    //a better way to do this would be to iterate over images dir and auto generate imgSrcs array

    for (let name of imageNames) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <a href=${"./images/restoration/" + name + ".jpg"}><img class="thumb" src=${"./images/restoration/" + name + ".jpg"} alt=""/></a>
        </div>`
      )
    }
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