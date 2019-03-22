import React from 'react';
import Footer from './footer';
import Header from './header';

class Audio extends React.Component {

  componentDidMount() {
    document.getElementById('audio-lib').innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/68319233&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
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