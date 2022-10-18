import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselControl(){
    const [index, setIndex] = useState (0);

    
    //sets index as whatever the selected index is
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src="./photos/beginner-luck.png"
                alt="Beginners Luck landing page"/>
                <Carousel.Caption>
                    
                    <a href="https://sensationnel-baguette-60188.herokuapp.com/login">Beginner's Luck</a>
                    <a href='#'>Code Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="photos/down-with-fitness.png" alt="Down with the fitness landing page"/>
                <Carousel.Caption>
                    <a href="https://down-with-the-fitness.herokuapp.com">Down with the Fitness</a>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../photos/day-planner.png" alt="Work Scheduler landing page"/>
                <Carousel.Caption>
                    <a href="https://mamcc0.github.io/day-planner/">Day Planner</a>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='../../photos/note-taker.png' alt="Screenshot of notetaker app"/>
                <Carousel.Caption>
                    <a href="https://vast-tundra-99915.herokuapp.com/">Note Keeper</a>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="weather-dash.png" alt="screenshot of weather dashboard"/>
                <Carousel.Caption>
                    <a href="https://mamcc0.github.io/weather-dashboard/">Weather Application</a>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img/>
                <Carousel.Caption>
                    <a href="#">Bug Tracker</a>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default CarouselControl;