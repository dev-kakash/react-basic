import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'akash'
        }
        console.log('LifeCycleA Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    } 
    getSnapshotBeforeUpdate(prevProps,prevStare){
        console.log('LifeCycleA  getSnapshotBeforeUpdate')
        return null
    } 
    
    componentDidUpdate(){
        console.log('LifeCycleA  gcomponentDidUpdate')
    }
    changeState = () =>{
        this.setState({
            name:'batash'
        })
    }
    render() {
        console.log('LifeCycleA  render')
        return (
            <div>
               LifeCycleA <br/>
               <button onClick={this.changeState}>Change State</button>
               <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
