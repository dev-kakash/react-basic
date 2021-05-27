import React,{Component} from 'react'

class StateExample extends Component{
    constructor(){
        super()
        this.state={
            message: 'Subscribe please !!',
            message2: 'Subscribe'
        }
    }
    change(){
        this.setState({
            message:'Thank you for subscribing',
            message2:'Subscribed'
        })
    }
    render(){
        return (
            <div>
                    <p>{this.state.message}</p>
                    <button onClick={() => this.change()}>{this.state.message2}</button>
            </div>
        
        )
    }
}
export default StateExample