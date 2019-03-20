import React from 'react';
import Footer from './footer';
import Header from './header';


class HistoryGallery extends React.Component {

  componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      { name: '46', blurb: '\n' },
      { name: '49', blurb: '\n' },
      { name: '50', blurb: '\n' },
      { name: '61', blurb: '\n' },
      { name: '74', blurb: '\n' },
      { name: '76', blurb: '\n' },
      { name: '77', blurb: '\n' },
      { name: '79', blurb: '\n' },
      { name: '86', blurb: '\n' },
      { name: '97', blurb: '\n' },
      { name: '98', blurb: '\n' },
      { name: '100', blurb: '\n' },
      { name: '104', blurb: '\n' },
      { name: '114', blurb: '\n' },
      { name: '115', blurb: '\n' },
      { name: '117', blurb: '\n' },
      { name: '119', blurb: '\n' },
      { name: '121', blurb: '\n' },
      { name: '128', blurb: '\n' },
      { name: '131', blurb: '\n' },
      { name: '132', blurb: '\n' },
      { name: '133', blurb: '\n' },
      { name: '135', blurb: '\n' },
      { name: '136', blurb: '\n' },
      { name: '137', blurb: '\n' },
      { name: '139', blurb: '\n' },
      { name: '140', blurb: '\n' },
      { name: '145', blurb: '\n' },
      { name: '166', blurb: '\n' },
      { name: '182', blurb: '\n' },
      { name: '188', blurb: '\n' },
      { name: '193', blurb: '\n' },
      { name: '194', blurb: '\n' },
      { name: '196', blurb: '\n' },
      { name: '207', blurb: '\n' },
      { name: '235', blurb: '\n' },
      { name: '246', blurb: '\n' },
      { name: '296', blurb: '\n' }
    ];
    let thumbElements = [];

    for (let image of images) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${image.name} src=${"/images/historic/" + image.name + ".jpeg"} alt=${image.blurb} />
        </div>
        <div id=${"modal-" + image.name} class="modal">
          <span class="close" id=${"close-" + image.name}>&times;</span>
          <img class="modal-content" id=${"img-" + image.name} src=${"/images/historic/" + image.name + ".jpeg"}>
          <div class="description"><br />${image.blurb}</div>
        </div>`
      );
      thumbElements.push(document.getElementById(image.name));
    };

    thumbElements.forEach(function (img) {
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