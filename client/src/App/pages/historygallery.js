import React from 'react';
import Footer from './footer';
import Header from './header';


class HistoryGallery extends React.Component {

  componentDidMount() {
    const gallery = document.getElementById("photo-gallery");
    let images = [
      { name: '46', blurb: '\n1941, Route 100 looking south, Granville, VT' },
      { name: '49', blurb: '\n' },
      { name: '50', blurb: '\n' },
      { name: '61', blurb: "\nKing Bridge by Bowl Mill, built 1903. Which Diana Maxham's father Frank Wilbur helped build" },
      { name: '74', blurb: '\nBill Tinkham stage coach driver AKA Medicine Man and his team Molly and Curley' },
      { name: '76', blurb: '\nLoggers in Rice Meadow' },
      { name: '77', blurb: '\nStage Coach and Bill Tinkham' },
      { name: '79', blurb: '\nLillian Boyce' },
      { name: '86', blurb: '\nThe beginning of Route 100 (the Gulf Rd) through the Granville Gulf' },
      { name: '97', blurb: '\nRoute 100, Granville Lower Village' },
      { name: '98', blurb: '\nThe White River flowing through downtown Granville' },
      { name: '100', blurb: '\nGranville Upper Village 1921, Row Houses' },
      { name: '104', blurb: '\nLogging' },
      { name: '114', blurb: '\nRoute 100 looking south of Hubbard Bridge, hangar and airport in background' },
      { name: '115', blurb: "\nGranville Corners, late 1930's" },
      { name: '117', blurb: '\nBridge north of the Fire Station, Granville, VT' },
      { name: '119', blurb: '\nCorner School in 1904. Back Row L to R: Harvey Hook, Diana Maxham, Raymond Briggs, Glen Wilson, Martha Abel, Nellie Hays, Cora Bonyer Ladue, Agnes Wilbury, Mary Hook (pigtails), Harry Blair, Florida Wilbur. Seated: Napoleon Wilbury, Twins Elwin and Elmer Shirley, Merle Farr' },
      { name: '121', blurb: "\nLogging camp, or camp's cook shack" },
      { name: '128', blurb: '\nUpper Villiage School #10' },
      { name: '131', blurb: '\n' },
      { name: '132', blurb: '\n' },
      { name: '133', blurb: '\nVeiw from Old 60. 1940' },
      { name: '135', blurb: '\nDiana the steam engine' },
      { name: '136', blurb: '\nDiana the steam engine' },
      { name: '137', blurb: '\nLog skid' },
      { name: '139', blurb: '\nOld postcard: Aerial view of "The Corners" Granville, VT' },
      { name: '140', blurb: '\nLease Lot Hill, Granville, VT 1917' },
      { name: '145', blurb: '\nOld Central House Hotel' },
      { name: '166', blurb: "\nGranville Town Hall. Crosby Sargent's store on left of road. House on right owned by Sargents, burned in 1979"},
      { name: '182', blurb: '\nHenry Freeman' },
      { name: '188', blurb: '\nGranville Town Hall and (Lower) Village School' },
      { name: '193', blurb: '\nNorth Hollow, Granville, VT' },
      { name: '194', blurb: "\nHubbard's Store, Hancock, VT" },
      { name: '196', blurb: '\nThe Old Central House Hotel, Granville' },
      { name: '207', blurb: '\nGranville Upper Village, 1942' },
      { name: '235', blurb: '\nOld Bowl Mill' },
      { name: '246', blurb: '\nView of Granville Corners taken from hill behind Bowl Mill' },
      { name: '296', blurb: '\nOxen team "Chub and Buster", owned by Crosby Sargent, with Bert Shatluck' },
      { name: '209', blurb: "\nIn front of Stub Freeman's house 1947. Miles Johnson and Dude Johnson"}
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