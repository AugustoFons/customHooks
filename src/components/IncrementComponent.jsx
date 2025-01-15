import React from "react"

export const IncrementComponent = React.memo(({increment}) => {

    console.log('renderizado hijo')

    return (
        <button type="buttons" className="btn btn-success" onClick={() =>  increment(1)}>+1</button>
    )
})