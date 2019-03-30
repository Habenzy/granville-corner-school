import React from 'react';


class Footer extends React.Component {

  componentDidMount() {
    const contact = document.getElementById('contact');
    contact.addEventListener('click', displayContact);
    function displayContact() {
      alert('Email: vtcornerschool@gmail.org\nMailing address: 1250 Maston Hill Rd. Granville, VT 05747\nPhone number: tbd')
    }
  }

  render() {
    return (
      <div className='foot-bar'>
        <button id='contact'>Contact Us</button>
        <div>75 Post Office Rd. Granville, VT 05747</div>
        <div><a href="https://www.facebook.com/CornerSchoolResourceCenterOfGranvilleVt/">FaceBook</a></div>
        <div><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="WMV8PDEYN8D4E" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="2" height="2" />
        </form></div>
      </div>
    )
  }
}

export default Footer