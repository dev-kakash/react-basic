import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        //this.setState({
         //   count:this.state.count+1
        //},()=>{console.log('Callback:',this.state.count)})
        this.setState((prevState)=>({
            count:prevState.count+1
        }),()=>{console.log('Callback:',this.state.count)})
        console.log(this.state.count)
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        },()=>{console.log('Callback:',this.state.count)})
        console.log(this.state.count)
    }
    incFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
               <div>count - {this.state.count}</div> 
               <button onClick={()=>this.increment()}>Increment</button>
               <button onClick={()=>this.decrement()}>Decrement</button>
               <button onClick={()=>this.incFive()}>Increment 5</button>
            </div>
        )
    }
}

export default Counter
