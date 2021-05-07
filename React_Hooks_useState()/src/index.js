import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fullname from './ObjectasParameters';
import ArrayasParameters from './ArrayasParameters';
import reportWebVitals from './reportWebVitals';
import PreviousState from './FuncCompoPreviousState';

////*************************USESTATE*************************////

//***************using useState and understanding what it returns *********//
// function App()
// {
//     const result = useState();     //usestate returns an array of 2 elements
//     console.log(result)

//     return (
//       <div>
//       <h1>E-kart</h1>
//       <h4>Your Package is : </h4>
//       </div>
//     )
// }

//**************Accessing the 2 elements in the array using array index************//
//  1. value to be set initially
//  2. function to be called to change the state

// function App()
// {
//     const result  = useState("not delivered");   //initial value is set as arg for useState
//     console.log(result)

//     return (
//       <div>
//       <h1>E-kart</h1>
//       <h4>Your Package is : {result[0]} </h4>
//       <button onClick ={()=> result[1]("delivered")}>deliver</button> 
//       {/* function that acceepts a parameter  */}
//       {/* value to be changed need to need to be set as arg for function */}
//       </div>
//     )
// }

//**************Accessing the 2 elements in the array using array destructuring***********//
//  1. value to be set initially
//  2. function to be called to change the state
// function App()
// {
//     const [status, setStatus]  = useState("not delivered");   //initial value is set as arg for useState
// //usestate will return 2 thing 
// //1. state var 
// //2. function to mangage or modify the state var 

//     return (
//       <div>
//       <h1>E-kart</h1>
//       <h4>Your Package is : {status} </h4>
//       <button onClick ={()=> setStatus("delivered")}>Deliver</button>   
     
//       {/* value to be changed need to need to be set as arg for function */}
//       </div>
//     )
// }

//*********************UseState Example  : COUNTER ******************************/

// function App()
// {
//     const [count, setCount]  = useState(0);   //setting up initial value as 0

//     return (
//       <div className = 'row' style ={{textAlign : 'center'}}>
//        <button onClick = {()=>setCount(count - 1)}>decrease count </button>
//        <h3 >Count : {count} </h3>
//        <button onClick = {()=>setCount(count + 1)}>increase count </button>
   
//       </div>
//     )
// }



//*********************UseState Example  : CHECKBOX ******************************/
// function App()
// {
//     const [status, setStatus]  = useState(false);   //setting up initial value as false

//     return (
//       <div className = 'row'>
//         <h3>Working with checkbox element</h3>
//         <input type = 'checkbox' onChange = {()=> setStatus(!status)}></input>
//         <label>{status? 'checked' : 'not checked'}</label>
   
//       </div>
//     )
// }


//*********************UseState Example  : BUTTON CLICK ******************************/
// function App()
// {
//     const [status, setStatus]  = useState('Veena');   //setting up initial value as false

//     return (
//       <div className = 'row'>
//        <h3 style ={{textAlign : 'center'}}>Congratulations {status}</h3>
//        <button onClick = {()=>setStatus('Sneha')}> Change Winner </button>
   
//       </div>
//     )
// }




//********************************UseState Example : COLOR PICKER********************** */
function App()
{
 const [state, setState] = useState("")
 const [cstate, setcState] = useState("#000000")

  function submit(e)
  { 
       e.preventDefault()
       console.log("submitted")
       alert(`${cstate}  is the color ${state}`)
      // alert(cstate + 'is the color' + state)
       setState(" ")
       setcState(" ")
  }


  return(
    <div>
      <form onSubmit ={submit}>
      <input type = 'text'  onChange={(e)=>setState(e.target.value)} placeholder = "enter color...."></input>
      <input type = 'color' onChange={(e)=>setcState(e.target.value)}></input>
      <button>OK</button> 
      </form>
    </div>
  )

  }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <div>
    {/* <App/> */}
  <Fullname/>
  {/* <ArrayasParameters/> */}
  </div>,
  document.getElementById('root')
)


// ReactDOM.render(
//   <div>
//     <PreviousState/>
//   </div>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
