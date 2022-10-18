import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  Carousel1  from '../photos/beginner-luck.png';
import Carousel2 from '../photos/day-planner.png';
import Carousel3 from '../photos/note-taker.png';
import Carousel4 from '../photos/down-with-fitness.png';
import Carousel5 from '../photos/weather-dash.png';
import Carousel6 from '../photos/naf.png';

function CarouselControl(){
    const [index, setIndex] = useState (0);

    
    //sets index as whatever the selected index is
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={Carousel1}
                alt="Beginners Luck landing page"/>
                <Carousel.Caption>
                    
                    <p><a href="https://sensationnel-baguette-60188.herokuapp.com/login">Beginner's Luck</a></p>
                    <a href='#'>Code Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel4} alt="Down with the fitness landing page"/>
                <Carousel.Caption>
                    <p><a href="https://down-with-the-fitness.herokuapp.com">Down with the Fitness</a></p>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel2} alt="Work Scheduler landing page"/>
                <Carousel.Caption>
                    <p><a href="https://mamcc0.github.io/day-planner/">Day Planner</a></p>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel3} alt="Screenshot of notetaker app"/>
                <Carousel.Caption>
                    <p><a href="https://vast-tundra-99915.herokuapp.com/">Note Keeper</a></p>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel5} alt="screenshot of weather dashboard"/>
                <Carousel.Caption>
                    <p><a href="https://mamcc0.github.io/weather-dashboard/">Weather Application</a></p>
                    <a href='#'>Repository</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel6} alt="Screenshot of Not American Football site home"/>
                <Carousel.Caption>
                    <p><a href="#">Not American Football</a></p>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default CarouselControl;