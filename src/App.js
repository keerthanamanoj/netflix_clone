
import './App.css';
import axios from 'axios';
import { useState } from 'react'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Rowpost from './components/Rowpost/Rowpost';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost />
    </div>
  );
}

export default App;
