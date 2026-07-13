import React from "react";

function header() {
    const {name} = props
    return (
        <div>
            <h1>{name}'s Portfolio</h1>
        </div>
    )
}
export default header