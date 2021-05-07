import React, { Component } from 'react'

class TickerClassComp extends Component {
    state ={
        count : 0
    }
    componentDidMount()
    {
        //set interval is a function that takes 2 args 
        // 1. the function that should be executed and 
        // 2. the time after which it should execute
       this.interval =  setInterval(this.tick,1000)
        
    }
   

    componentWillUnmount()
    {
     clearInterval(this.interval)
    }

    tick =()=>
    {
      this.setState({count : this.state.count + 1})
    }

    render() {
        return (
            <div style ={{textAlign : 'center'}}>
                <h3>Class Component Timer</h3>
                <h3>{this.state.count}</h3>
                <button onClick ={()=>this.setState({count : 0})}>RESET TIMER</button>
            </div>
        )
    }
}
export default  TickerClassComp;