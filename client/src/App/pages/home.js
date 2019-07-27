import React from 'react';
import Footer from './footer';
import Header from './header';

class Home extends React.Component {

  displayQuotes() {
    const displayArea = document.getElementById('event-quote');
    const quotes = [
      `There was no Route 100 until 1912 up through the Gulf. The main route was Puddledock.  -Norm A.`,
      `We were kind of free spirits, so we decided to move here and see how it was, have a garden. And here we are 43 years later.  -Nancy D.`,
      `There was a tree that was snowing, but there wasn't snow anywhere else. It felt like a blessing.  -Michael E.`,
      `No traffic lights, no stop signs, no cops, no buses, no trains. I just kind of fell in love with it. Living up in the hollows, up on the hills is an adventure.  -Jamie S.`,
      `Larry sold me a parcel. Started building in 1966. Every nail, every wire, I put in.  -Fritz B.`,
      '<b>Granville Charter Day Celebration</b>\nPreserving History, Preserving Pickles!\nValley Wide Yard Sale, Preserves Competition, and Bake Sale <b>August 31, 2019</b>  9am - 2pm\nGranville’s Town Hall Green\n$10 per spot, $15 per table Call 767-9703 to reserve a table',
      '<b>Granville Charter Day Celebration</b>\nPreserving History, Preserving Pickles!\nValley Wide Yard Sale, Preserves Competition, and Bake Sale <b>August 31, 2019</b>  9am - 2pm\nGranville’s Town Hall Green\n$10 per spot, $15 per table Call 767-9703 to reserve a table',
      '<b>Granville Charter Day Celebration</b>\nPreserving History, Preserving Pickles!\nValley Wide Yard Sale, Preserves Competition, and Bake Sale <b>August 31, 2019</b>  9am - 2pm\nGranville’s Town Hall Green\n$10 per spot, $15 per table Call 767-9703 to reserve a table'
    ]

    displayArea.innerHTML = quotes[Math.floor(Math.random() * (quotes.length))]
    window.setInterval(function () {
      displayArea.textContent = quotes[Math.floor(Math.random() * (quotes.length))];
    }, 10000)
  }

  componentDidMount() {
    this.displayQuotes()
  }


  render() {
    return (
      <div>
        <Header />
        <div id="home-body">
          <div id="cover">
            <img id="home-img" src="./images/50.jpeg" alt="The Granville Corner School" />
            <div id="mission-statement">
              <p>The Corner School Resource Center of Granville is dedicated to<br /> the preservation of the region's unique natural and cultural history, and the creation of a learning center that connects Granville to the wider world in the historic Corner School building.</p>
            </div>
          </div>
          <div id="event-quote"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home