import React, { Component } from 'react'

class RegulerComp extends Component {
    render() {
        console.log('reguler component render ')
        return (
            <div>
            Reguler Component {this.props.name}
            </div>
        )
    }
}

export default RegulerComp
