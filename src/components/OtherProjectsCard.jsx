import React from 'react';
import '../styles/otherprojects.css';

export default function OtherProjectsCard(props) {
    return (
        <div className='other-proj'>
            <a href={props.link} target="_blank" data-aos="flip-up" data-aos-delay="500"><img srcSet={props.image} /></a>
            <div className='other-proj-info' data-aos="flip-down">
                <h2>{props.name}</h2>
                <div>{props.description}</div>
                <a href={props.link} target="_blank"><button>View Project</button></a>
            </div>
        </div>
    )
}
