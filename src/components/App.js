import React, { Component } from 'react';
import './styles/App.css';

import WelcomePage from './WelcomePage';
import SideBar from './SideBar';
import { Main } from '../elements';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {

    if (true) {
      return <WelcomePage />
    }
    return (
      <main className="App">
        <SideBar />
        <Main>

        </Main>
      </main>
    );
  }
}

export default App;
