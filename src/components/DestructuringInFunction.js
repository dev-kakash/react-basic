import React from 'react'

//function DestructuringInFunction({name,age}) {
function DestructuringInFunction(props) {
    const {name,age} = props
    return (
        <div>
            <p>I am {name} and I am {age} years old. [DestructuringInFunction]</p>
        </div>
    )
}

export default DestructuringInFunction
