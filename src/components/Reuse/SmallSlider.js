import React from 'react';
import './css/VideoSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './css/SmallSlider.css'
import { Link } from 'react-router-dom';

export default function SmallSlider(props) {

    let settings = {
        // lazyLoad: 'ondemand',
        speed: 500,
        slidesToScroll: 5,
        slidesToShow: 6.4,
        infinite: false,
        responsive: [
            { breakpoint: 2000, settings: { slidesToShow: 7.4 , slidesToScroll: 6, } },
            { breakpoint: 1150, settings: { slidesToShow: 6.4 , slidesToScroll: 5, } },
            { breakpoint: 900, settings: { slidesToShow: 5.4 , slidesToScroll: 4, } },
            { breakpoint: 750, settings: { slidesToShow: 4.4 , slidesToScroll: 3, } },
            {breakpoint: 600, settings: { arrows: false, slidesToShow: 3.4 , slidesToScroll: 3,}},
            {breakpoint: 400, settings: { arrows: false, slidesToShow: 2.2, slidesToScroll: 2,}}
        ]
    }

    const videoThumbnail = props.data.map((video) => {
        return (
            <a className='smallcard'
                title={video.name}
                href={video.link} key={Math.random()}>
                <div className=''>
                    <img src={video.img} alt="" />
                </div>
            </a>
        )
    })

    return (
        <section className='smallslider-cont'>
            <div className='sslider-top'>
                {(props.isTitle.length>0) && <p className='sslidetitle'>{props.isTitle}</p>}
                {(props.wantBtn.length>0) && <Link to={props.wantBtn} className='allBtn'>ALL</Link>}
            </div>
            <Slider {...settings} className='smallslider'>
                {videoThumbnail}
            </Slider>
        </section>
    )
}
