import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'akash'
        }
        console.log('LifeCycleB Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    } 
    getSnapshotBeforeUpdate(prevProps,prevStare){
        console.log('LifeCycleB  getSnapshotBeforeUpdate')
        return null
    } 
    
    componentDidUpdate(){
        console.log('LifeCycleB  gcomponentDidUpdate')
    }

    render() {
        console.log('LifeCycleB  render')
        return (
            <div>
               LifeCycleB 
            </div>
        )
    }
}

export default LifeCycleB
