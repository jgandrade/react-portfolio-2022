import React from 'react';
import '../styles/projects.css';

function Projects() {
    return (
        <div id="projects" className='projects'>
            <h2>Projects</h2>
            <div className='project'>
                <div className='image' data-aos="fade-up" data-aos-delay="300">
                    <a href='https://ecommerce-app-jgandrade.vercel.app/' target="_blank"><img srcSet='./ecommerce.PNG' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up">
                    <h3>E-Commerce</h3>
                    <p>A full stack ecommerce web app created using the MERN Stack</p>
                    <a href='https://ecommerce-app-jgandrade.vercel.app/' target="_blank"><button>View Live</button></a>
                    <button>View Code</button>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-up" data-aos-delay="300">
                    <a href='https://github.com/jgandrade/ecommerce-api-revised' target="_blank"><img srcSet='./backend.PNG' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up">
                    <h3>E-Commerce Backend</h3>
                    <p>A Backend for the E-Commerce App. Where NodeJS, ExpressJS and MongoDB was used</p>
                    <a href='https://github.com/jgandrade/ecommerce-api-revised' target="_blank"><button>View Code</button></a>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-up" data-aos-delay="300">
                    <a href="https://jgandrade.github.io/my-portfolio/" target="_blank"><img srcSet='./portfolio.PNG' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up">
                    <h3>Developer Portfolio</h3>
                    <p>A portfolio made as a capstone for the bootcamp I came from</p>
                    <a href="https://jgandrade.github.io/my-portfolio/" target="_blank"><button>View Live</button></a>
                    <a href="https://github.com/jgandrade/my-portfolio" target="_blank"><button>View Code</button></a>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-up" data-aos-delay="300">
                    <a href="https://todolist-app-omega.vercel.app/" target="_blank"><img srcSet='./todolist3.PNG' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up">
                    <h3>Todolist v3</h3>
                    <p>A todo list app I improved after getting in touch with React</p>
                    <a href="https://todolist-app-omega.vercel.app/" target="_blank"><button>View Live</button></a>
                    <a href="https://github.com/jgandrade/todolist-app-v3" target="_blank"><button>View Code</button></a>
                </div>
            </div>
            <div className='project'>
                <div className='image' data-aos="fade-up" data-aos-delay="300">
                    <a href="https://musikapp-8rzf.vercel.app/" target="_blank"><img srcSet='./musikapp.png' /></a>
                </div>
                <div className='proj-desc' data-aos="fade-up">
                    <h3>Musikapp</h3>
                    <p>A Music App built using Tailwind CSS and help using Redux Toolkit</p>
                    <a href="https://musikapp-8rzf.vercel.app/" target="_blank"><button>View Live</button></a>
                    <a href="https://github.com/jgandrade/Musikapp" target="_blank"><button>View Code</button></a>
                </div>
            </div>
        </div>
    )
}

export default Projects