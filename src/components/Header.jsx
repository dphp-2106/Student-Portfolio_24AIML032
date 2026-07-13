import React from "react";

const navStyle = {
    display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0
}
const linkStyle = {
    textDecoration: 'none', color: 'var(--text-h)', fontSize: '16px', fontWeight: 500
}

function Header({ name }) {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontWeight: 600, fontSize: '18px', color: 'var(--text-h)' }}>{name}</span>
            <nav>
                <ul style={navStyle}>
                    <li><a href="#home" style={linkStyle}>Home</a></li>
                    <li><a href="#about" style={linkStyle}>About</a></li>
                    <li><a href="#skills" style={linkStyle}>Skills</a></li>
                    <li><a href="#contact" style={linkStyle}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header