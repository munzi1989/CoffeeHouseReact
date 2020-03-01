import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Navigation from './components/NavComponent';
import Cards from './components/CardComponent';
import Carousel from './components/CarouselComponent';
import MenuComponent from './components/MenuComponent';
import Footer from './components/FooterComponent';
import MapComponent from './components/MapComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Cards />
        <Carousel />
        <MapComponent/>
        <MenuComponent />
        
        <Footer/>
      </div>
    );
  }
}

export default App;
