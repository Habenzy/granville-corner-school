import { Link } from "react-router-dom";

function GalleryEntry(props) {
  return (
    <div id="gallery-portal">
      <div id="gallery-nav">
        <div className="photo-nav-button">
          <Link to={"/history-gallery"}>
            <p>Historical Photos</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/granville-corner-school.appspot.com/o/history%2F100.jpeg?alt=media&token=f11a0d99-8142-42d9-bec3-88d67f2f4e69"
              alt="historical Main Street Granville"
            />
          </Link>
        </div>
        <div className="photo-nav-button">
          <Link to={"/event-gallery"}>
            <p>Event Photos</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/granville-corner-school.appspot.com/o/event%2FCorner-School-Float-photo.jpg?alt=media&token=ebd032ff-a1d7-4fdc-998d-defd4d5bd23b"
              alt="float from the Warren 4th of July parade"
            />
          </Link>
        </div>
        <div className="photo-nav-button">
          <Link to={"/restoration-gallery"}>
            <p>Restoration Photos</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/granville-corner-school.appspot.com/o/restoration%2FIMG_7376.jpg?alt=media&token=e59ae80f-05a8-4922-a745-1fd24cd69c51" alt="work day at the csrc" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GalleryEntry;
