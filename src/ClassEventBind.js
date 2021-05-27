import React, { Component } from 'react'

class ClassEventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Follow"
        }
        //this.clickHandler = this.clickHandler.bind(this) //3
    }
    // clickHandler(){
    //     this.setState({
    //        message : "Follwed"
    //     })
    // }

    clickHandler = () =>{
        this.setState({
            message : "Follwed"
        })
    }
    
    render() {
        return (
            <div>
                {/* <button onClick={this.clickHandler.bind(this)}>{this.state.message}</button> */}
                {/* <button onClick={() =>this.clickHandler()}>{this.state.message}</button> */}
                <button onClick={this.clickHandler}>{this.state.message}</button> 
            </div>
        )
    }
}

export default ClassEventBind


//1.Binding in render
//2.Arrow function in render
//3.bind in classConstractor
//4.Arrow finction