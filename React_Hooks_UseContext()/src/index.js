import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// // *************single props****************

import ComponentC from './ComponentC';

 export const userContext= createContext ()

ReactDOM.render(
// only single prop can be passed at a time in provider as the value
  <userContext.Provider  value = 'veena'>   
  <ComponentC/>
  </userContext.Provider>,
  document.getElementById('root')
);



// *************multiple props****************
//createcontext should be create separately for each prop

import ComponentC from './ComponentC';
import ComponentG from './ComponentG';

 export const userContext= createContext ()
 export const ageContext = createContext ()


ReactDOM.render(
// only single prop can be passed at a time in provider as the value
  <userContext.Provider  value = 'veena'>   
  <ageContext.Provider value = {100}>
  <ComponentC/>
  <ComponentG/>
  </ageContext.Provider>
  </userContext.Provider>,
  document.getElementById('root')
);
