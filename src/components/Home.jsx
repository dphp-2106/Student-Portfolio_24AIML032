import React from "react";

function Home({ name }) {
    return (
        <section style={{ padding: '80px 32px', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '32px' }}>Hi, I'm {name} </h1>
            <p style={{ fontSize: '18px', color: 'var(--text)' }}>AIML Student | B.Tech @ CSPIT</p>
        </section>
    )
}
export default Home
