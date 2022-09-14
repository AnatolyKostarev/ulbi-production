import React, {useState} from 'react';
import s from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={s.btn}>
            <button onClick={()=> setCount(count +1)}>increment</button>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count - 1)}>decrement</button>
        </div>
    );
};


