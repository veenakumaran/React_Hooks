
import React,{useState} from 'react';

const PreviousState = () => {

    const [count, setcount] = useState(0);
    const [oldcount, setoldcount] = useState(0);

    function handleclick()
    {
    
    setcount (prevstate => prevstate + 2)
      //here count will store the previous value as its not updated yet
    setoldcount (count)
    }
  

    return (
        <div>
               <p> Count : {oldcount} &ensp; updated to : {count}</p>
                <button onClick={handleclick}>  +  </button>
        </div>
    );
}

export default PreviousState;
