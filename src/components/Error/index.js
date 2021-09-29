import React from 'react'

const Error = ({message}) => {
    return (
        <div className="text-center">
           <p className="text-red-500"> {message}</p>
        </div>
    )
}

export default Error
