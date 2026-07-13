import React from "react";

function skill(props) {
    const {skill} = props
    return (
        <section id="skills" style={{ padding: '48px 32px', borderTop: '1px solid var(--border)' }}>
            <h2>Skills</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {skill.map((s, i) => (
                    <li key={i} style={{ background: 'var(--accent-bg)', color: 'var(--accent)', padding: '6px 16px', borderRadius: '20px', fontSize: '16px' }}>{s}</li>
                ))}
            </ul>
        </section>
    )
}
export default skill