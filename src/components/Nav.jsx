import React, { useState } from 'react';
import '../styles/nav.css';
import '../assets/burgerBtn.css';

function Nav() {
    const [isNavOpen, setNavOpen] = useState(false);
    function openNav() {
        const menuBtn = document.querySelector('.menu-btn');
        const navMenu = document.querySelector('.nav-btn-container');

        if (!isNavOpen) {
            menuBtn.classList.add('open');
            navMenu.classList.add('nav-btn-container-open');
            navMenu.classList.remove('nav-btn-container-close');
            setNavOpen(true);
        } else {
            navMenu.classList.add('nav-btn-container-close');
            menuBtn.classList.remove('open');
            navMenu.classList.remove('nav-btn-container-open');
            setNavOpen(false);
        }
    }

    function closeNav() {
        const menuBtn = document.querySelector('.menu-btn');
        const navMenu = document.querySelector('.nav-btn-container');
        if (isNavOpen) {
            menuBtn.classList.remove('open');
            navMenu.classList.remove('nav-btn-container-open');
            setNavOpen(false);
        }
    }

    return (
        <nav>
            <a href='#' style={{ textDecoration: "none" }} onClick={closeNav}><h1 style={{ color: "#eeeeee" }}>jg.</h1></a>
            <ul className='nav-btn-container'>
                <a href='#about' style={{ textDecoration: "none" }} onClick={closeNav}><li style={{ color: "#eeeeee" }}>About</li></a>
                <a href='#projects' style={{ textDecoration: "none", color: "#222222" }} onClick={closeNav}><li style={{ color: "#eeeeee" }}>Portfolio</li></a>
                <a href="#contact" style={{ textDecoration: "none" }} onClick={closeNav}><li style={{ color: "#eeeeee" }}>Contact</li></a>
            </ul>
            <div className="menu-btn" onClick={openNav}>
                <div className="menu-btn__burger"></div>
            </div>
        </nav>
    )
}

export default Nav