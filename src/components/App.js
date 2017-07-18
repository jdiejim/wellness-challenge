import React, { Component } from 'react';
import './styles/App.css';

//componets
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <main className="App">
        <SideBar />
      </main>
    );
  }
}

export default App;
