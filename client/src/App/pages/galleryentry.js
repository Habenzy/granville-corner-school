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
          <div className="photo-nav-button">
            <Link to={'./history-gallery'}><p>Historical Photos</p><img src="./images/100.jpeg" alt="historical Main Street Granville"/></Link>
          </div>        
          <div className="photo-nav-button">
            <Link to={'./event-gallery'}><p>Event Photos</p><img src="./images/events/Corner-School-Float-photo.jpg" alt="float from the Warren 4th of July parade" /></Link>
          </div>
          <div className="photo-nav-button">
            <Link to={'./restoration-gallery'}><p>Restoration Photos</p><img src="./images/img-7376.jpg" alt="work day at the csrc" /></Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default GalleryEntry