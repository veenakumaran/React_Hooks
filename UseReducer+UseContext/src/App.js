import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import React,{useReducer} from 'react';


export const Countcontext = React.createContext()
 
const initialstate = 0;

export const reducer = (state , action) => {
  switch (action) {
    case 'increment':
      return state + 1
      case 'decrement':
      return state - 1
      case 'reset':
      return initialstate
    default:
      return state
  }
}

function App() {


const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <Countcontext.Provider value ={{countval : count , countdispatch : dispatch}}> 
    <div>
    <label> {count} </label>
    <button onClick ={() => dispatch('reset')}>RESET</button>
    <ComponentA/>
    <ComponentB/>
    <ComponentC/>
    </div>
    </Countcontext.Provider>
  )
 
}


//we can also use initialstate object instead of initialstate var
// export const Countcontext = React.createContext()
 
// const initialstate = 
// {
//   startvalue : 100,
//   endvalue : 500
// }

// export const reducer = (state , action) => {
//   switch (action) {
//     case 'increment':
//       return {...state,startvalue : state.startvalue + 1}
//       case 'decrement':
//       return {...state,endvalue : state.endvalue - 1}
//       case 'reset':
//       return initialstate
//     default:
//       return state
//   }
// }

// function App() {


// const [count, dispatch] = useReducer(reducer, initialstate);

//   return (
//     <Countcontext.Provider value ={{countval : count , countdispatch : dispatch}}> 
//     <div>
//     <label> {count.startvalue} : {count.endvalue} </label>
//     <button onClick ={() => dispatch('reset')}>RESET</button>
//     <ComponentA/>
//     <ComponentB/>
//     <ComponentC/>
//     </div>
//     </Countcontext.Provider>
//   )
 
// }

export default App;
