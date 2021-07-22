import React from 'react';
import './css/tailwind.css';

import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Index from './components/Index.js';
import Home from './components/Home.js';
import Breath from './components/Breath.js';
import Bytes from './components/Bytes.js';
import Briefing from './components/Briefing.js';

const App = () => (
  
      <Router>
      <Header />
      <div className="main-container">
        <Index />
        <Home />
        <Breath />
        <Bytes />
        <Briefing />
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/breath">
          <Breath />
        </Route>

        <Route exact path="/bytes">
          <Bytes />
        </Route>

        <Route exact path="/briefing">
          <Briefing />
        </Route>
      </Switch> */}
    </div>
    <Footer />
  </Router>
);

export default App;
