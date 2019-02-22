import React from 'react';
import Footer from './footer';
import Header from './header';

class Audio extends React.Component {

  componentDidMount() {
    //this is just some placeholder code, got to figure out sizing issues
    document.getElementById('audio-lib').innerHTML = '<iframe width="100%" height="700" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/582696801&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
  }

  render() {
    return(
      <div>
        <Header />
        <div id="audio-lib">Audio Files will be served here...</div>
        <Footer />
      </div>
    )
  }
}

export default Audio