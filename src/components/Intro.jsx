import React from 'react';
import '../styles/intro.css';


function Intro() {


    return (
        <>
            <div id="intro-container" className='intros'>
                <div id='intro' data-aos="fade-up">
                    <h2>Simplicity, Elegance, Creativity</h2>
                    <p>Three things that I want to accomplish to my future projects including this one.</p>
                </div>
                <div id='intro-2' data-aos="fade-up">
                    <h2>Make idea into reality</h2>
                    <p>I've been working on making my imagination come to life. A lot of struggles which I enjoyed a lot. Learned a lot, of lessons. Sacrificed a lot, of time.</p>
                </div>
                <div className='intro-3' data-aos="fade-up">
                    <h2>I love making side projects</h2>
                    <p>Bad thing is sometimes I get so hyped on another project that I nearly forgot to finish some of them.</p>
                </div>
            </div>
        </>
    )
}

export default Intro