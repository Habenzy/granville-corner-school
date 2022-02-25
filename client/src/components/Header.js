import { Link } from 'react-router-dom';

function Header(props) {
  return(
    <div id="head">
      <h1>The Corner School Resource Center of Granville, VT</h1>
      <div className="head-bar">
        <Link to={''}>
          <button className="nav-button">Home</button>
        </Link>
        <Link to={'./gallery-entry'}>
          <button className="nav-button">Gallery</button>
        </Link>
        <Link to={'./audio'}>
          <button className="nav-button">Oral History</button>
        </Link>
        <Link to={'./about'}>
          <button className="nav-button">About</button>
        </Link>
      </div>
    </div>
  )
}

export default Header