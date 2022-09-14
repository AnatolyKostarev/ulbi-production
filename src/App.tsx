import React from 'react';
import {Counter} from "./components/Counter";
import './index.scss';

const App = () => {
    return (
        <div className="app">
         <h2>Application</h2>
            <Counter/>
        </div>
    );
};

export default App;
