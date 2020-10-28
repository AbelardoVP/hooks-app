import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log("COMPONENT CALLED");
    return (
        <small>
            {value}
        </small>
    )
}
)