import React from "react";

function about(props) {
    const {about} = props
    return (
        <section style={{ padding: '48px 32px' }}>
            <h2>About Me</h2>
            <p>{about}</p>
        </section>
    )
}
export default about