import React,{useState} from 'react';

const ArrayasParameters = () => {

    const [items, setitems] = useState([]);

    const handleClick=()=>
    {
    setitems([...items, // apends content to item array // we can also setitems without spread operator
        {id : 1 ,value : 10},
        {id : 2 ,value : 20},
        {id : 3 ,value : 30},
        {id : 4 ,value : 40},
        {id : 5 ,value : 50},
    ])
}
    return (
        <div>
            <h3>Items list</h3>
            <button onClick ={handleClick}>Show Items</button>
            <p>{items.map(item => <li>{item.value}</li>) }</p>
        </div>
    );
}

export default ArrayasParameters;
