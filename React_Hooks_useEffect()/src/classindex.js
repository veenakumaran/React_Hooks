 import React, { Component } from 'react'
 
//IMPLIMENTING USEEFFECT FUNCTIONALITY USING CLASS COMPOENTS 
 export default class Application extends Component {
     state ={
         count : 0,
         change : 10
     }
     componentDidMount()
     {
        console.log('first render')
        document.title = "welcome"
        this.state.change = 100;
        console.log(this.state.change)
     }
     componentDidUpdate()
     {
        console.log('updated render')
        document.title = " button clicked " + this.state.count + " times"
        // this.state.change = this.state.change + 10;
        // console.log( this.state.change)
     }
     handleclick =()=>
     {
        this.setState({ count : this.state.count + 1})
        
     }
     render() {
         return (
             <div>
                 <p>the count is {this.state.count} </p>
                 <button onClick = {this.handleclick}>HIT ME</button>
             </div>
         )
     }
 }
 