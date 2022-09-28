import React from 'react';
import '../styles/nav.css';


function Nav() {
    return (
        <nav>
            <a href='#' style={{ textDecoration: "none" }}><h1 style={{ color: "#eeeeee" }}>jg.</h1></a>
            <ul>
                <a href='#about' style={{ textDecoration: "none" }}><li style={{ color: "#eeeeee" }}>About</li></a>
                <a href='#projects' style={{ textDecoration: "none", color: "#222222" }}><li style={{ color: "#eeeeee" }}>Portfolio</li></a>
                <a href="#contact" style={{ textDecoration: "none" }}><li style={{ color: "#eeeeee" }}>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Nav