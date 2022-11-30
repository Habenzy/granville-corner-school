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
      <div id="street-address">75 Post Office Rd. Granville, VT 05747</div>
      <a href="https://www.facebook.com/CornerSchoolResourceCenterOfGranvilleVt/">
        <div id="facebook-button">
          <img src={fbButton} alt="facebook" id="fb-img" />
        </div>
      </a>
      <div>
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="hosted_button_id" value="HDFJNE3K38H2Y" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </div>
  );
}

export default Footer;
