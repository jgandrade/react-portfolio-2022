import React from 'react';
import '../styles/otherprojects.css';
import OtherProjectsCard from './OtherProjectsCard';

function OtherProjects() {
    return (
        <div className='other-projects'>
            <h2 className='h2-other-proj'>Projects from the past</h2>
            <div className='other-projects-cont'>
                <OtherProjectsCard key={"simonsgame"} name="Simons Game" image="./simonsgame.png" description="In this app, I managed to understand more about manipulating the DOM as I have
                            a lot of issues with eventListeners. This simple app game gave me a leap to my understanding
                            how DOM works. I used recursion for the computer's turn and store game data in an object." link="https://jgandrade.github.io/simonsgame/" />
                <OtherProjectsCard key={"todolist"} name="Todo List" image="./todolist.png" description="I learned alot about CRUD Applications because of this project. This enabled me
                            to understand deeply how database works. Also I learned how I'll access all the information
                            in the local database and the cloud database, which is actually MongoDB Atlas. I then
                            published it in heroku. Hope no one mess the list up." link="https://todolist-v2-spyrie.herokuapp.com/" />
                <OtherProjectsCard key={"votingapp"} name="Voting App" image="./votingapp.png" description="In this app, I experimented on how Local Storage works and how to use
                            javascript to manipulate the DOM. The app basically just have buttons to choose from that
                            when pressed, voting results will update/render." link="https://jgandrade.github.io/samplevotingapp/" />
                <OtherProjectsCard key={"weatherapp"} name="Weather App" image="./weatherapp.png" description="Now this app helped me understand API more. Although compared to API's from big
                            companies. This one is an easy one. I just need a token that I will be able to get if I
                            create an account on the website. After having the token, I simply just read the
                            documentation and made it work." link="https://weather-app-spyrie.herokuapp.com/" />
            </div>
        </div>
    )
}

export default OtherProjects