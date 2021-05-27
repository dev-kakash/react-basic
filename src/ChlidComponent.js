import React from 'react'

function ChlidComponent(props) {
    return (
        <div>
            <button onClick={ () => props.parentMethod('Child')}>CLICK</button>
        </div>
    )
}

export default ChlidComponent
