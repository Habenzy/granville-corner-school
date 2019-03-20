import React from 'react';
import Footer from './footer';
import Header from './header';


class HistoryGallery extends React.Component {

  componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      { name: '46', blurb: '' },
      { name: '49', blurb: '' },
      { name: '50', blurb: '' },
      { name: '61', blurb: '' },
      { name: '74', blurb: '' },
      { name: '76', blurb: '' },
      { name: '77', blurb: '' },
      { name: '79', blurb: '' },
      { name: '86', blurb: '' },
      { name: '97', blurb: '' },
      { name: '98', blurb: '' },
      { name: '100', blurb: '' },
      { name: '104', blurb: '' },
      { name: '114', blurb: '' },
      { name: '115', blurb: '' },
      { name: '117', blurb: '' },
      { name: '119', blurb: '' },
      { name: '121', blurb: '' },
      { name: '128', blurb: '' },
      { name: '131', blurb: '' },
      { name: '132', blurb: '' },
      { name: '133', blurb: '' },
      { name: '135', blurb: '' },
      { name: '136', blurb: '' },
      { name: '137', blurb: '' },
      { name: '139', blurb: '' },
      { name: '140', blurb: '' },
      { name: '145', blurb: '' },
      { name: '166', blurb: '' },
      { name: '182', blurb: '' },
      { name: '188', blurb: '' },
      { name: '193', blurb: '' },
      { name: '194', blurb: '' },
      { name: '196', blurb: '' },
      { name: '207', blurb: '' },
      { name: '235', blurb: '' },
      { name: '246', blurb: '' },
      { name: '296', blurb: '' }
    ];
    let thumbElements = [];

    for (let image of images) {
      gallery.innerHTML += (
        `<div class="image-thumb">
          <img class="thumb" id=${image.name} src=${"/images/events/" + image.name + ".jpg"} alt=${image.blurb} />
        </div>
        <div id=${"modal-" + image.name} class="modal">
          <span class="close" id=${"close-" + image.name}>&times;</span>
          <img class="modal-content" id=${"img-" + image.name} src=${"/images/events/" + image.name + ".jpg"}>
          <div class="description">${image.blurb}</div>
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