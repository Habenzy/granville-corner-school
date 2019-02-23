import React from 'react';
import Footer from './footer';
import Header from './header';


class RestorationGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageSrcs = ['Corner-School-Float-photo.jpg', 'Corner-School-looking-South.jpg', 'Eleanor-and-Kate.jpg', 'Eleanor.jpg', 'Granville_91207-039.jpg', 'Granville_91207-044.jpg', 'Granville_91207-014.jpg', 'IMG_1757.jpg', 'IMG_1758.jpg', 'IMG_1760.jpg', 'IMG_7376.jpg'];
    //a better way to do this would be to iterate over images dir and auto generate imgSrcs array

    for (let src of imageSrcs) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <a href=${"./images/restoration/" + src}><img class="thumb" src=${"./images/restoration/" + src} alt=""/></a>
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