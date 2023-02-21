import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide_1 from '../images/slide_1.jpg';
import slide_2 from '../images/slide_2.jpg';
import slide_3 from '../images/slide_3.jpg';
import '../styles/sliders.css';

const HomeComponent = () => {
    return (
        <Carousel className="slider">
        <Carousel.Item className="slider">
            <img
            className="img-fluid opacity-75"
            src={slide_1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Pierwszy slajd</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider">
            <img
            className="img-fluid opacity-75"
            src={slide_2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Drugi slajd</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider">
            <img
            className="img-fluid opacity-75"
            src={slide_3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Trzeci slajd</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
};

export default HomeComponent;