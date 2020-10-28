import React from 'react'

export const ShowIncrement = ({ increment }) => {

    console.log("component called");

    return (
        <button className="btn btn-primary"
            onClick={() => {
                increment()
            }}>
            Incrementar
        </button>
    )
}
