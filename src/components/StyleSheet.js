import React from 'react'
import './style.css'

const StyleSheet = (props) => {
    let className = props.wrapper ? 'wrapper' : ''
    return (
        <div className={`${className} font`}>
            Hello World
        </div>
    )
}

export default StyleSheet
