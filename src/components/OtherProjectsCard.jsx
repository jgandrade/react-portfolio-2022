import React from 'react';
import '../styles/otherprojects.css';

export default function OtherProjectsCard(props) {
    return (
        <div className='other-proj'>
            <a href={props.link} target="_blank"><img srcSet={props.image} /></a>
            <div className='other-proj-info'>
                <h2>{props.name}</h2>
                <div>{props.description}</div>
                <a href={props.link} target="_blank"><button>View Project</button></a>
            </div>
        </div>
    )
}
