import React, { useState } from 'react'
import '../02-useEffect/useEffect.css'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'

export const RealRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real Ref Use</h1>
            <hr />
            {show && <MultipleCustomHooks />}
            <button className="btn btn-primary mt-5"
                onClick={() => setShow(!show)}
            >Show/Hide</button>
        </div>
    )
}
