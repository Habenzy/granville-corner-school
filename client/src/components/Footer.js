import fbButton from "../media/Facebook-Button.png";

function Footer(props) {
  return (
    <div className="foot-bar">
      <button
        id="contact"
        className="nav-button"
        onClick={() => {
          alert(
            "Email: vtcornerschool@gmail.com\nMailing address: P.O. Box 1, Granville VT 05747\nPhone number: tbd"
          );
        }}
      >
        Contact Us
      </button>
      <div id="street-address">75 Post Office Hill Road, PO Box 1, Granville, VT 05747</div>
      <a href="https://www.facebook.com/CornerSchoolResourceCenterOfGranvilleVt/">
        <div id="facebook-button">
          <img src={fbButton} alt="facebook" id="fb-img" />
        </div>
      </a>
      <div>
        
        <a href="https://www.paypal.com/donate/?hosted_button_id=BC64TJ78HVM9Y" target="_blank" ><button className="nav-button" >Donate</button></a>
      </div>
    </div>
  );
}

export default Footer;
