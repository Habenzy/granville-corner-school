import React from 'react';
import Footer from './footer';
import Header from './header';


class HistoryGallery extends React.Component {

  componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let imageNames = ['46', '49', '50', '61', '74', '76', '77', '79', '86', '97', '98', '100', '104', '114', '115', '117', '119', '121', '128', '131', '132', '133', '135', '136', '137', '139', '140', '145', '166', '182', '188', '193', '194', '196', '207', '235', '246', '296'];
    let thumbElements = [];

    for (let name of imageNames) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${name} src=${"/images/historic/" + name + ".jpeg"} alt="" />
        </div>
        <div id=${"modal-" + name} class="modal">
          <span class="close" id=${"close-" + name}>&times;</span>
          <img class="modal-content" id=${"img-" + name} src=${"/images/historic/" + name + ".jpeg"}>
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
    return (
      <div>
        <Header />
        <div id="photo-gallery"></div>
        <Footer />
      </div>
    )
  }
}

export default HistoryGallery