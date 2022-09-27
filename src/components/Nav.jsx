import React from 'react';
import '../styles/nav.css';

function Nav() {
    return (
        <nav>
            <a href='#' style={{ textDecoration: "none" }}><h1>jg.</h1></a>
            <ul>
                <a href='#' style={{ textDecoration: "none" }}><li>About</li></a>
                <a href='#' style={{ textDecoration: "none" }}><li>Work</li></a>
                <a href='#' style={{ textDecoration: "none" }}><li>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Nav