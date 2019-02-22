import React from 'react';
import Footer from './footer';
import Header from './header';


class HistoryGallery extends React.Component {


   componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageSrcs = ['./images/historic/46.jpeg','./images/historic/49.jpeg','./images/historic/50.jpeg','./images/historic/61.jpeg','./images/historic/74.jpeg','./images/historic/76.jpeg','./images/historic/77.jpeg','./images/historic/79.jpeg','./images/historic/86.jpeg','./images/historic/97.jpeg','./images/historic/98.jpeg','./images/historic/100.jpeg','./images/historic/104.jpeg','./images/historic/114.jpeg','./images/historic/115.jpeg','./images/historic/117.jpeg','./images/historic/119.jpeg','./images/historic/121.jpeg','./images/historic/128.jpeg','./images/historic/131.jpeg','./images/historic/132.jpeg','./images/historic/133.jpeg','./images/historic/135.jpeg','./images/historic/136.jpeg','./images/historic/137.jpeg','./images/historic/139.jpeg','./images/historic/140.jpeg','./images/historic/145.jpeg','./images/historic/166.jpeg','./images/historic/182.jpeg','./images/historic/188.jpeg','./images/historic/193.jpeg','./images/historic/194.jpeg','./images/historic/196.jpg','./images/historic/207.jpeg','./images/historic/235.jpeg','./images/historic/246.jpeg','./images/historic/296.jpeg'];
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

export default HistoryGallery