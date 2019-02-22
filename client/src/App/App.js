import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import GalleryEntry from './pages/galleryentry';
import About from './pages/about';
import Audio from './pages/audio';
import HistoryGallery from './pages/historygallery';
import EventGallery from './pages/eventgallery';
import RestorationGallery from './pages/restorationgallery'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery-entry' component={GalleryEntry}/>
          <Route path='/about' component={About}/>
          <Route path='/audio' component={Audio}/>
          <Route path='/history-gallery' component={HistoryGallery}/> 
          <Route path='/restoration-gallery' component={RestorationGallery}/> 
          <Route path='/event-gallery' component={EventGallery}/> 
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
