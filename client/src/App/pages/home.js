import React from 'react';
import Footer from './footer';
import Header from './header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae viverra nibh. Phasellus vel elementum magna. Vivamus sit amet arcu sed nulla maximus faucibus at a neque. Aliquam erat volutpat.', ' Donec porta viverra purus, non efficitur urna faucibus vitae. Mauris ac quam metus. Nulla quis leo vel massa interdum tempus. Donec dictum orci sit amet egestas consequat. Donec pellentesque commodo tortor, eget euismod libero pretium vel.', 'In aliquam dapibus tellus vitae interdum. Pellentesque eget auctor ex. Nam euismod mi eget eros aliquam, non laoreet arcu vulputate. Proin ut metus a nunc venenatis rutrum. Quisque et lectus pulvinar, hendrerit enim ut, ultrices lorem.', 'Ut tincidunt sem eget tempus gravida. Sed molestie varius ipsum, eu fermentum erat dapibus sit amet. Duis orci massa, faucibus sed neque at, semper placerat nunc. Proin facilisis blandit magna vel varius. Vestibulum blandit vel justo porttitor dignissim. Donec cursus tortor at libero aliquam, ac tincidunt ligula ullamcorper.']
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