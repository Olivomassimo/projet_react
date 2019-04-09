import React, { Component } from 'react';
import Mytravels from "./My-travels";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My travels</h1>
        </header>
        <Mytravels
          destination="Etats units "
          country="hawai"
          photo="https://zupimages.net/up/19/15/7242.jpg"
          distance="1m"
        />
        <Mytravels
          destination="Italie"
          country="Rome"
          photo="https://zupimages.net/up/19/15/aolu.jpg"
          distance= "1m"
        />
      </div>
    );
  }
}

export default App;