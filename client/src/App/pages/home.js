import React from 'react';
import Footer from './footer';
import Header from './header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [`There was no Route 100 until 1912 up through the Gulf. The main route was Puddledock.  -Norm Arsenault`, `We were kin of free spirits, so we decided to move here and see how it was, have a garden. And here we are 43 years later.  -Nancy Demers`, `There was a tree that was snowing, but there wasn't snow anywhere else. It felt like a blessing.  -Michael Egan`, `No traffic lights, no stop signs, no cops, no buses, no trains. I just kind of fell in love with it. Living up in the hollows, up on the hills is an adventure.  -Jamie Service`, `Larry sold me a parcel. Started building in 1966. Every nail, every wire, I put in.  -Fritz Branchofsky`]
    }
  }

  getEvents() {
    /*
    make directory to hold json files for events (in public dir?)
    iterate over files,
    if eventDate is =< Date.now + 2 weeks && eventDate > Date.now
    then display event
    else display random quote from quotes array;
     */
  }

  componentDidMount() {
    this.getEvents()
  }


  render() {
    return (
      <div>
        <Header />
        <div id="home-body">
          <div id="cover">
            <img id="home-img" src="./images/50.jpeg" alt="The Granville Corner School"/>
            <div id="mission-statement">
              <p>The Corner School Resource Center of Granville is dedicated to<br /> the preservation of the region's unique natural and cultural history, and the creation of a learning center that connects Granville to the wider world in the historic Corner School building.</p>
            </div>
          </div>
          <div id="event-quote">{this.state.quotes[Math.floor(Math.random() * (this.state.quotes.length))]}</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home