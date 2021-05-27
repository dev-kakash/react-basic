import React, { Component } from 'react'

class DestructuringInClass extends Component {
    render() {
        const {name,place} = this.props
        return (
            <div>
                <p>Hello {name},welcome to {place} .[DestructuringInClass]</p>
            </div>
        )
    }
}

export default DestructuringInClass
