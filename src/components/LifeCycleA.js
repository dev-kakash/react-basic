import React, { Component } from 'react'
import LifeCycleB from '../LifeCycleB'

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
    render() {
        console.log('LifeCycleA  render')
        return (
            <div>
               LifeCycleA <br/>
               <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
