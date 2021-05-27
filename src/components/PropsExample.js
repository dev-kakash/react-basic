import React from 'react'

const PropsExample = (props) => {
    return(
        <div>
            <p>Hello {props.name}.I am {props.age} years old.</p>
            {props.children}
        </div>
    )
}

export default PropsExample