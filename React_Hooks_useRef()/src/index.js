import React,{useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ticker from './Ticker';

//used to capture the input feild values


function Compo ()
{
  const color = useRef();
  const colorname = useRef();

   function submit()
  {  
    // e.preventDefault();
     const colorval = color.current.value;
     const colornameval = colorname.current.value;
    alert(`${colorval} is the color ${colornameval}`)

  }
  return (
    <form onSubmit={submit}>
      <input ref= {colorname} type = 'text'></input>
      <input  ref= {color} type = 'color'></input>
      <button>OK</button>
    </form>
  )


}

ReactDOM.render(
  <Ticker/>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
