import React from 'react';


class Footer extends React.Component {

  componentDidMount() {
    const contact = document.getElementById('contact');
    contact.addEventListener('click', displayContact);
    function displayContact() {
      alert('Email: vtcornerschool@gmail.com\nMailing address: P.O. Box 1, Granville VT 05747\nPhone number: tbd')
    }
  }

  render() {
    return (
      <div className='foot-bar'>
        <button id='contact' className="nav-button">Contact Us</button>
        <div id='street-address'>75 Post Office Rd. Granville, VT 05747</div>
        <a href="https://www.facebook.com/CornerSchoolResourceCenterOfGranvilleVt/"><div id="facebook-button"><img src="./images/Facebook-Button.png" alt="facebook" id="fb-img"/></div></a>
        <div><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="WMV8PDEYN8D4E" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" width="150" height="75"/>
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form></div>
      </div>
    )
  }
}

export default Footer