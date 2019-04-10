import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/Home-page.js'
import ContactPage from './pages/Contact-page.js'
import StatisticPage from './pages/Statistic-page';
import ContactDetails from './pages/Contact-details-page';

class App extends Component {
  state = {
    currContactId: null
  }
  render() {
    return (
      <div className="App">
        <HomePage />
        <StatisticPage />
        <ContactPage />
        <ContactDetails />
      </div>
    );
  }
}

export default App;
