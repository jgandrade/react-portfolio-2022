import React from 'react';
import '../styles/projects.css';

function Projects() {
    return (
        <div id="projects" className='projects'>
            <h2>Projects</h2>
            <div className='project'>
                <div className='image' data-aos="fade-up-left" data-aos-delay="300">
                    <a href='https://ecommerce-app-jgandrade.vercel.app/' target="_blank"><img srcSet='./ecommerce.PNG' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up-right">
                    <h3>E-Commerce</h3>
                    <p>A full stack ecommerce web app created using the MERN Stack</p>
                    <button>View Live</button>
                    <button>View Code</button>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-up-right" data-aos-delay="300">
                    <a href='https://github.com/jgandrade/ecommerce-api-revised' target="_blank"><img srcSet='./backend.PNG' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up-left">
                    <h3>E-Commerce Backend</h3>
                    <p>A Backend for the E-Commerce App. Where NodeJS, ExpressJS and MongoDB was used</p>
                    <button>View Code</button>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-up-left" data-aos-delay="300">
                    <a href="https://jgandrade.github.io/my-portfolio/" target="_blank"><img srcSet='./portfolio.PNG' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up-right">
                    <h3>Developer Portfolio</h3>
                    <p>A portfolio made as a capstone for the bootcamp I came from</p>
                    <button>View Live</button>
                    <button>View Code</button>
                </div>
            </div>
        </div>
    )
}

export default Projects