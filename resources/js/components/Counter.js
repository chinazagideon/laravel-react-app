import axios from "axios";
import React, { useState } from "react";
import ReactDOM from 'react-dom';

// import Button from "./Button";

export default function Counter(){
    //set the initial count state to zero, 0
    const [count, setCount] = useState(0);

    //create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        notifyServer();
    };

    //create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
        notifyServer();

    }

    const notifyServer = () => {
        axios.post('/count', {message: 'Counter updated!'})
    }

    return (<>
    <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
    </div>
    </>
    );
}

if(document.getElementById('counter')){
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}

if(document.getElementById('counter')){
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}
