import React from 'react';


class Footer extends React.Component {
  
  componentDidMount() {
    const contact = document.getElementById('contact');
    contact.addEventListener('click', displayContact);
    function displayContact() {
      alert('Email: info@vermontcornerschool.org\nMailing address: 1250 Maston Hill Rd. Granville, VT 05747\nPhone number: tbd')
    }
  }

  render() {
      return(
        <div className='foot-bar'>
          <button id='contact'>Contact Us</button>
          <div>info at vermontcornerschool.org</div>
          <div><a href="https://www.facebook.com/CornerSchoolResourceCenterOfGranvilleVt/">FaceBook</a></div>
          <div>Donate</div>
        </div>
    )
  }
}

export default Footer