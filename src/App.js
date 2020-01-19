import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Navigation from './components/NavComponent';
import Cards from './components/CardComponent';
import CarouselComponent from './components/CarouselComponent';
import MapComponent from './components/MapComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Cards />
        <CarouselComponent />
        <MapComponent />
      </div>
    );
  }
}

export default App;
