import React, { Component } from 'react'


//will be using state variable
export default class PreviousState extends Component {
    state = {
        count: 0,
        oldcount : 0
    }
    handleclick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                oldcount : prevState.count
           }
         
        })
        // or
        // this.setState({ count : this.state.count + 1})

    }

    render() {
        return (
            <div>
                <p> Count :   {this.state.oldcount} &ensp; updated to : {this.state.count}</p>
                <button onClick={this.handleclick}>  +  </button>
            </div>
        )
    }
}

