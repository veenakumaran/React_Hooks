import React from 'react';
import {Countcontext} from './App';
import {useContext} from 'react';

const ComponentA = () => {
    const countcontext = useContext(Countcontext);
    return (
        <div>
          <h3>Component A</h3>
            <button onClick = { () => countcontext.countdispatch('decrement')}>-</button>
           
            <button onClick ={() => countcontext.countdispatch('increment')}>+</button>
    
        </div>
    );
}

export default ComponentA;
