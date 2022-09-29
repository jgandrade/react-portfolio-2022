import React from 'react';
import '../styles/about.css';


function About() {

    return (
        <>
            <div id="about" className='about'>
                <div data-aos="zoom-in-right">
                    <h2>Hey I'm Glenn!</h2>
                    <p>I am a full stack developer who recently graduated from <a href='https://zuitt.co/' target="_blank">Zuitt</a> bootcamp. </p>
                </div>
                <div data-aos="zoom-in-left">
                    <h2>Short Story</h2>
                    <p>I'm just a guy who one day, randomly helped a friend on his assignment in Javascript. I had no knowledge in it, so I did use Java to answer his assignment. Few weeks after that day, I decided to study Javascript and was entirely astonished by the idea of web development and how it works. And here I am today, more than happy to study new frameworks/libraries everyday.</p>
                </div>
                <div data-aos="zoom-in-left">
                    <h2>What I Do //</h2>
                    <ul>
                        <li>Static Websites</li>
                        <li>Web Apps</li>
                        <li>Web Design</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About