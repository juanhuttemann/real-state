import React from 'react';
import './sass/App.scss';
import Header from './components/Header';
import Filter from './components/Filter'
import Listings from './components/Listings'

function App() {
  return (
    <div className="App">
      <Header /> 
      <section id="content-area">
        <Filter />
        <Listings />
      </section>  
    </div>
  );
}

export default App;
