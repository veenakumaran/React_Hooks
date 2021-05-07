import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect, useReducer, useState } from 'react';

// **************useReducer()************************//
//useful to store and access previous state values
// function Compo() {

//   // const [state, dispatch] = useReducer(reducer, initialState);

//   const [num, setnum] = useReducer((num, newnum) => num + newnum, 5)

//   // const [num, setnum] = useReducer ((num) => num + 1 , 0) 


//   return (
//     <div>
//       {/* set initial value of the num to 5 using setnum function  */}
//       <label> {num} </label>

//       <button onClick={()=>setnum(10)}>increment</button>
//     </div>
//   )


// }


//*************useReducer example : checkbox (did earlier using useState()) **********/
// function Compo()
// {

//   const [status, setstatus] = useReducer((status) => !status , false) //initially status set to  false
//   return(
//     <div>
//       <input type = 'checkbox' checked = {status} onClick = {setstatus}></input>
//       <label> {status ? 'checked' : 'unchecked'} </label>
//     </div>


//   )
// }

//**************************Reducer with dispatch ********************** */
//useful to store previous state values
function Compo() {

  const initialstate = {
    message: 'something ? ',
    age: 0
  }

  const [state, dispatch] = useReducer(reducer, initialstate)
 
  function reducer(state, action) { 
    switch (action.type) {
      case "Tea":
        return {
          message: 'TEA?',
          //you can also use template string to access the all the recent states
          // message : `TEA ${state.message}`,
          age: state.age + 40
        }
      case "Coffee":
        return {
          message: 'COFFEE?',
          // message: `COFFEE ${state.message}`,
          age: 20
        }
    }

  }
  return (
    <div>
      <h2>Hey, Would you like to have {state.message} {state.age} </h2>
      <button  onClick={() => dispatch({ type: 'Tea' })}>TEA</button>
      <button onClick={() => dispatch({ type: 'Coffee' })}>COFFEE</button>
    </div>
  )

}



ReactDOM.render(
  <Compo />,
  document.getElementById('root')
)

