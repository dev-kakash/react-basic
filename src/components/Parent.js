import React, { Component } from 'react'
import PureComp from './PureComp'
import RegulerComp from './RegulerComp'


class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Akash'   
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'akash'
            })
        },2000)
    }
    render() {
        console.log('**************parent component render *******************')
        return (
            <div>
               Parent Component 
               <RegulerComp name={this.state.name} />
               <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default Parent
