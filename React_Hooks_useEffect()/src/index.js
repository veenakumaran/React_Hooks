import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Application from './classindex';
import TickerClassComp from './tickerClassComp';
import TickerFunctionalComp from './tickerFunctionalComp';
import Fetchdata from './fetchdata';

//***********************using useEffect() for a single state varialble*******************//
function App()
{
    const [status, setStatus]  = useState('Veena');  


    //using useEffect to change the title accourding to the state variable status
    useEffect(()=> {
      document.title = `Winner is ${status}`
     });

     
    return (
      <div className = 'row'>
       <h3 style ={{textAlign : 'center'}}>Congratulations {status}</h3>
       <button onClick = {()=>setStatus('Sneha')}> Change Winner </button>
   
      </div>
    )
}

//***********************using useEffect() for a multiple state varialble*******************/
//problem : all useEffect() are refreshed or rerendered on every state update
//we need to restrict the useEffect specific to its own state variable change
//to refresh or rerender only the useeffect respective to the component or statevariable we are changing 
//we need to pass the state varialbe in dependency array

// function App()
// {
//     const [status, setStatus]  = useState('Veena'); 
//     const [admin,setAdmin] = useState(false) 


//     //using useEffect to change the title according to the state variable status
//     useEffect(()=> {
//       document.title = `Winner is ${status}`
//       console.log(`winner is ${status}`)
//      });

//      useEffect(()=>{
//       console.log(admin ? 'logged in as admin ' :'not logged in as admin' )
//      });

//     return (
//       <div className = 'row'>
//        <h3 style ={{textAlign : 'center'}}>Congratulations {status}</h3>
//        <button onClick = {()=>setStatus('Sneha')}> Change Winner </button>
//        <p>you are <b>{admin ? "logged in " : "not logged in "} </b></p>
//        {admin ? <p></p> :<button onClick ={() => setAdmin(true)}>Log in</button>}
   
//       </div>
//     )
// }

//solution 
// function App()
// {
//     const [status, setStatus]  = useState('Veena'); 
//     const [admin,setAdmin] = useState(false) 


//     //using useEffect to change the title according to the state variable status
//     useEffect(()=> {
//       document.title = `Winner is ${status}`
//       // "Winner is" + status
//       console.log(`winner is ${status}`)
//      },[status]);              //adding the respective state variable here

//      useEffect(()=>{
//       console.log(admin ? 'logged in as admin ' :'not logged in as admin' )
//      },[admin]);

//     return (
//       <div className = 'row'>
//        <h3 style ={{textAlign : 'center'}}>Congratulations {status}</h3>
//        <button onClick = {()=>setStatus('Sneha')}> Change Winner </button>
//        <p>you are <b>{admin ? "logged in " : "not logged in "} </b></p>
//        {admin ? <p></p> :<button onClick ={() => setAdmin(true)}>Log in</button>}
   
//       </div>
//     )
// }

ReactDOM.render(
  <div>
    {/* <App/> */}
    {/* <Application/> */}
  <TickerClassComp/>
  <TickerFunctionalComp/>
  {/* <Fetchdata/> */}
  </div>,
  document.getElementById ('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
