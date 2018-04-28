import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation'
import conf from './config/conf'
import MainContent from './pages/main/Main'

class Main extends Component {
  render() {
    return (
        <div>
            <MainContent/>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>
    );
  }
}

export default App;
