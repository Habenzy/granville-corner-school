import React from 'react';
import Footer from './footer';
import Header from './header';
import { Link } from 'react-router-dom';

class GalleryEntry extends React.Component {
  render() {
    return(
      <div id="gallery-portal">
        <Header />
        <div id="gallery-nav">
          <Link to={'./history-gallery'}>
            <div className="photo-nav-button">Historical Photos</div>
          </Link>
          <Link to={'./event-gallery'}>
            <div className="photo-nav-button">Event Photos</div>
          </Link>
          <Link to={'./restoration-gallery'}>
            <div className="photo-nav-button">Restoration Photos</div>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default GalleryEntry