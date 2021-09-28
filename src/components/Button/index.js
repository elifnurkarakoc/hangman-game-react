import React from 'react'

const Button = ({click,text}) => {
    return (
        <div>
            <button onClick={click}>{text}</button>
        </div>
    )
}

export default Button
