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
                <img src='#'/>
                <Carousel.Caption>
                    <a href="#">Portfolio1Live</a>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img/>
                <Carousel.Caption>
                    <a href="#">Portfolio1Live</a>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img/>
                <Carousel.Caption>
                    <a href="#">Portfolio1Live</a>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img/>
                <Carousel.Caption>
                    <a href="#">Portfolio1Live</a>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img/>
                <Carousel.Caption>
                    <a href="#">Portfolio1Live</a>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img/>
                <Carousel.Caption>
                    <a href="#">Portfolio1Live</a>
                    <a href='#'>Portfolio1Repo</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default CarouselControl;