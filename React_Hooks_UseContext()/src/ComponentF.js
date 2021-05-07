import React, { Component } from 'react'
import {ageContext, userContext} from'./index';


// // *************single props****************
// export default class ComponentF extends Component {
//     render() {
//         return (
//             <div>
//                 <userContext.Consumer>
//                     {
//                         username => {
//                             return ( <h3>hi there, welcome {username} </h3>)
//                         }
                               
//                     }

//                 </userContext.Consumer>
//             </div>
//         )
//     }
// }

// *************multiple props****************

export default class ComponentF extends Component {
    render() {
        return (
            <div>
                <userContext.Consumer>
                    {
                        username => {
                            return (
                                <ageContext.Consumer>
                                    {
                                        age => {
                                            return (<h3>Hi there, we are in F Component  name : {username}  age : {age} </h3>)
                                        }
                                    }
                                </ageContext.Consumer>
                            )
                        }

                    }

                </userContext.Consumer>
            </div>
        )
    }
}
