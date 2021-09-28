import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="w-full bg-white font-mono flex flex-col justify-between min-h-screen mx-auto max-w-3xl">
            {children}
        </div>
    )
}

export default Container
