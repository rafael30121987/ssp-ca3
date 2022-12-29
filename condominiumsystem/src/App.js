import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import Rotas from './components/Rotas';

const App = () => (
  <div className="App">
    <Header/>
    <Rotas/>
    <Footer/>
  </div>
);

export default App;