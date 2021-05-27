import React, { Component } from 'react'
import ChlidComponent from './ChlidComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Parent'
        }
        this.parentMethod = this.parentMethod.bind(this)
    }
    parentMethod(childName){
        alert(`Hello ${this.state.message} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChlidComponent parentMethod={this.parentMethod} />
            </div>
        )
    }
}

export default ParentComponent
