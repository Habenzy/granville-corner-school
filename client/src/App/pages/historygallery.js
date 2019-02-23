import React from 'react';
import Footer from './footer';
import Header from './header';


class HistoryGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageSrcs = ['46.jpeg','49.jpeg','50.jpeg','61.jpeg','74.jpeg','76.jpeg','77.jpeg','79.jpeg','86.jpeg','97.jpeg','98.jpeg','100.jpeg','104.jpeg','114.jpeg','115.jpeg','117.jpeg','119.jpeg','121.jpeg','128.jpeg','131.jpeg','132.jpeg','133.jpeg','135.jpeg','136.jpeg','137.jpeg','139.jpeg','140.jpeg','145.jpeg','166.jpeg','182.jpeg','188.jpeg','193.jpeg','194.jpeg','196.jpeg','207.jpeg','235.jpeg','246.jpeg','296.jpeg'];
    //a better way to do this would be to iterate over images dir and auto generate imgSrcs array

    for (let src of imageSrcs) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <a href=${"/images/historic/" + src}><img class="thumb" src=${"/images/historic/" + src} alt=""/></a>
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

export default HistoryGallery