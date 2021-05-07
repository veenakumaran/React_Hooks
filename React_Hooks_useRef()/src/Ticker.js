//ticker using useeffect and reset button using useref

import React,{ useEffect, useState,useRef } from "react";


// const Ticker = () => {

 

//     const [timer, settimer] = useState(0);
//     useEffect(() => {
//         const interval =  setInterval(() => {
//              settimer(timer => timer + 1)
             
//          }, 1000);
     
//          return () => {
//              clearInterval(interval)
//          };
//      }, []);
//     return (
//         <div>
//             <h3>Timer : {timer}</h3>
//             <button onClick ={() =>  clearInterval(interval)}> STOP </button>
//             {/* here we cannot acccess the interval var as it is a part of only effect hook */}
//         {/* so we will use useref to capture the value of interval */}
//         </div>
//     );
// }


const Ticker = () => {

 const intervalref = useRef();

    const [timer, settimer] = useState(0);
    useEffect(() => {
         intervalref.current =  setInterval(() => {
             settimer(timer => timer + 1)
             
         }, 1000);
     
         return () => {
             clearInterval( intervalref.current )
         };
     }, [timer]);
    return (
        <div>
            <h3>Timer : {timer}</h3>
            <button onClick ={() => clearInterval( intervalref.current )}> STOP </button>
            <button onClick ={() => settimer(0)}> RESET </button>
         
        </div>
    );
}


export default Ticker;
