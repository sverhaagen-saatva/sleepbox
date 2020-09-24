import React, { useEffect, useState } from 'react'
import './ErrorDisplay.css'

const ErrorDisplay = ({error}) => {
    const [active, setActive] = useState(false)
    useEffect(() => {
        if(error) {
            setActive(true)
            console.trace(error)
            setTimeout(() => {
                setActive(false)
            }, 10000)
        }
    }, [error])


    return (
        <div className={`error-display ${active && 'active'}`}>
            <div className="error-inner">
                <p>
                    {
                        error
                        // typeof error === 'string' ? (
                        //     error
                        // ) : (
                        //         typeof error.message === 'string' || error.message instanceof String ? (
                        //             error.message
                        //         ) : (
                        //                 error.message === undefined ? 'Something went wrong.' : error.value.toString()
                        //             )
                        //     )
                    }
                </p>
            </div>
        </div>
    )
}

export default ErrorDisplay
