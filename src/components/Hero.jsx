import React, { useEffect } from 'react';
import '../styles/hero.css';
import { motion } from 'framer-motion';


function Hero() {
    const headlineContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const mainHeadline = ['john', 'glenn'].map((e, i) => <motion.h2 key={i}
        initial={
            {
                opacity: 0,
                y: i === 2 ? 100 : -100,
                transition: {
                    damping: 10,
                    stiffness: 300,
                    type: "spring",
                    delay: 0.1 * (i + 1)
                }
            }
        }
        animate={
            {
                opacity: 1,
                y: 0,
                color: i == 1 ? "rgb(250, 99, 99)" : "#EEEEEE",
                transition: {
                    damping: 10,
                    stiffness: 50,
                    type: "spring",
                    duration: 0.1,
                    delay: 0.3 * (i + 1),
                }
            }
        }
        style={{ display: 'inline-block' }}> {e}</motion.h2>)

    const mainHeadline2 = ['Building Web Apps', 'and expanding', 'creativity'].map((e, i) => <motion.h2 key={i}
        initial={
            {
                opacity: 0,
                x: -100,
                transition: {
                    damping: 10,
                    stiffness: 300,
                    type: "spring",
                }
            }
        }
        animate={
            {
                opacity: 1,
                x: 0,
                transition: {
                    damping: 10,
                    stiffness: 50,
                    type: "spring",
                    duration: 0.1,
                    delay: 2 + (i / 3)
                }
            }
        }
        style={{ display: 'inline-block' }}>{e}</motion.h2>)

    return (
        <div className='hero'>
            <motion.div variants={headlineContainer} initial='hidden' animate='show' className='hero-name' style={{ overflow: "hidden" }}>
                <div>
                    {mainHeadline}
                    <motion.p
                        initial={
                            {
                                opacity: 0,
                                y: 100,
                                transition: {
                                    type: "spring",
                                    stiffness: 120,
                                }
                            }
                        }
                        animate={
                            {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 50,
                                    delay: 1.5,
                                }
                            }
                        }
                    >A Full Stack Web Developer based from the Philippines</motion.p>
                </div>
                <a className='go-down' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#EEEEEE" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                </svg>
                </a>
            </motion.div>

            <div className='side-hero'>
                {mainHeadline2}
            </div>
        </div>
    )
}

export default Hero