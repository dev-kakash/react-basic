import React, { Component } from 'react'

class Conditions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    

    render() {
        //2
        // let message
        // if(this.state.isLoggedIn){
        //     message = <p>Hello Akash</p>
        // }
        // else{
        //     message = <p>Hello Geust</p>
        // }
        // return <div>{message}</div>
        //1
        //  if(this.state.isLoggedIn){
        //     return <p>Hello Akash</p>
        //  }
        //  else{
        //      return <p>Hello Geust</p>
        //  }
        //3
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Hello Akash</div> :
        //     <div>Hello Guest</div>
        // )
        return this.state.isLoggedIn && <div>Hello Akash</div>
    }
}

export default Conditions
//if else
//element variable approch
//tarnary operetor
//Short Cercuit operator(something or nothing)