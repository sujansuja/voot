import one from '../../images/Bigslider/one.jpg';
import two from '../../images/Bigslider/two.jpg';
import three from '../../images/Bigslider/three.jpg';
import four from '../../images/Bigslider/four.jpg';
import five from '../../images/Bigslider/five.jpg';
import six from '../../images/Bigslider/six.jpg';
import seven from '../../images/Bigslider/seven.jpg';
import eight from '../../images/Bigslider/eight.jpg';
import nine from '../../images/Bigslider/nine.jpg';

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BigCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 3,
        // centerMode: true,
        centerPadding: '250px',
        arrows: true
    };

    return (
        <div className='sliders-div'>
            <Slider
                {...settings}
            >
                <div className='slider-div'>
                    <img src={one} alt="" />
                    <h3>1</h3>
                </div>
                <div className='slider-div'>
                    <img src={two} alt="" />
                    <h3>2</h3>
                </div>
                <div className='slider-div'>
                    <img src={three} alt="" />
                    <h3>3</h3>
                </div>
                <div className='slider-div'>
                    <img src={four} alt="" />
                    <h3>4</h3>
                </div>
                <div className='slider-div'>
                    <img src={five} alt="" />
                    <h3>5</h3>
                </div>
                <div className='slider-div'>
                    <img src={six} alt="" />
                    <h3>6</h3>
                </div>
                <div className='slider-div'>
                    <img src={seven} alt="" />
                    <h3>7</h3>
                </div>
                <div className='slider-div'>
                    <img src={eight} alt="" />
                    <h3>8</h3>
                </div>
                <div className='slider-div'>
                    <img src={nine} alt="" />
                    <h3>9</h3>
                </div>
            </Slider>
        </div>
    )
}
