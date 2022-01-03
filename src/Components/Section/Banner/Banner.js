import React from 'react';
import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import silder1 from './../../../images/slider-1.jpg';
import silder2 from './../../../images/slider-2.jpg';
import silder3 from './../../../images/slider-3.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={silder1} alt='1' />
            </div>
            <div>
                <img src={silder2} alt='2' />
            </div>
            <div>
                <img src={silder3} alt='3' />
            </div>
        </Carousel>
    );
};

export default Banner;