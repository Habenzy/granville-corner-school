import React from 'react';
import Footer from './footer';
import Header from './header';



class EventGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageSrcs = [];
    //a better way to do this would be to iterate over images dir and auto generate imgSrcs array

    for (let src of imageSrcs) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <a href=${src}><img class="thumb" src=${src} alt=""/></a>
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

export default EventGallery