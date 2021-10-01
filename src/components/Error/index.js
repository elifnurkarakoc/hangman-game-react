import React from 'react'
import PropTypes from 'prop-types';
const Error = ({message}) => {
    return (
        <div className="text-center">
           <p className="text-red-500"> {message}</p>
        </div>
    )
}
Error.propTypes = {
    message:PropTypes.string.isRequired
}
export default Error
