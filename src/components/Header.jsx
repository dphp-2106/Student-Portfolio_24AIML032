import React from "react";
import { Link } from "react-router-dom";

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
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About</Link></li>
                    <li><Link to="/skills" style={linkStyle}>Skills</Link></li>
                    <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header