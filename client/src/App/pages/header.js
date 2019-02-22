import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return(
      <div className="head-bar">
        <Link to={''}>
          <button className="nav-button">Home</button>
        </Link>
        <Link to={'./gallery-entry'}>
          <button className="nav-button">Gallery</button>
        </Link>
        <h1>The Corner School Resource Center of Granville, VT</h1>
        <Link to={'./audio'}>
          <button className="nav-button">Oral History</button>
        </Link>
        <Link to={'./about'}>
          <button className="nav-button">About</button>
        </Link>
      </div>
    )
  }
}

export default Header