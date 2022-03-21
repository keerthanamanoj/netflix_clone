
import './App.css';
import axios from 'axios';
import { useState } from 'react'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Rowpost from './components/Rowpost/Rowpost';

function Api() {

    const [state, setState] = useState([])
    return (
        <div className="App">
            {/* <NavBar /> */}
            {/* <Banner/> */}
            {/* <Rowpost/> */}
            <h1>Hello World</h1>
            <button onClick={() => {
                axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                    console.log(response.data)
                    setState(response.data)
                })
            }}>click me</button>
            {state.map((obj, index) => {
                return (
                    <div>
                        <h1>{index + 1}</h1>
                        <h1>{obj.body}</h1>
                        <h4>{obj.title}</h4>
                    </div>
                )
            })}
        </div>
    );
}

export default Api;
