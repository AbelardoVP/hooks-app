import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })


    useEffect(() => {
        console.log("COMPONENT MOUNT")

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y }
            console.log(coords)
            setCoords(coords)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log("COMPONENT UNMOUNT")
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    const { x, y } = coords



    return (
        <div>
            <h3>MESSAGE</h3>
            <p>x:{x} y:{y}</p>
        </div>
    )
}
