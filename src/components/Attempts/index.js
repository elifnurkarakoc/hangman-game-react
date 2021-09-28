import React, { useEffect } from 'react'

const Attempts = ({attemptsCount, setAttemptsCount}) => {
    useEffect(() => {
        console.log(attemptsCount)
    },[attemptsCount])
    return (
        <div>
            <span>Retries Left:{attemptsCount}</span>
        </div>
    )
}

export default Attempts
