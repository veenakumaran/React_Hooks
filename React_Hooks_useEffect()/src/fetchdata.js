import axios from 'axios';
import React, { useEffect,useState } from 'react';


// *********************using fetch*****************
// const Fetchdata = () => {

//     const [data, setdata] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//       .then(data => setdata(data))
//     }, []);
//     return (
//         <div>
//             <p> {data.map(item => <li> {item.id} </li>) }</p>
//         </div>
//     );
// }

// ********************using axios*******************
const Fetchdata = () => {

    const [data, setdata] = useState([]);
    const [id, setid] = useState(0);
    const [button, setbutton] = useState(0);

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => setdata(response.data))
    },[button]);

    function handleClick()
    {
      setbutton(id)
    }
    return (
        <div>
            <input type = "text" placeholder = 'enter id' onChange = {e => setid(e.target.value)}></input>
            <button onClick = {handleClick}>Fetch data </button>
            {console.log(id)}
            <p> { button ? data.filter(items => items.id == button).map(item => <li> {item.id} : {item.title} </li>) : <p> </p> }</p>
        </div>
    );
}


export default Fetchdata;
