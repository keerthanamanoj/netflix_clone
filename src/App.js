
import './App.css';
import axios from 'axios';
import {action, Originals} from './urls'
import { useState } from 'react'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Rowpost from './components/Rowpost/Rowpost';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={Originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
      {/* <Rowpost url={action} title='Action' isSmall/> */}

    </div>
  );
}

export default App;
