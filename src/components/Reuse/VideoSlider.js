import './css/VideoSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import data from './video-thumbnail-data.json';

function VideoSlider() {
    let settings = {
        lazyLoad: 'ondemand',
        dots: true,
        inifinte: true,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        centerPadding: '20px',
        responsive: [
            { breakpoint: 2500, settings: { centerPadding: '500px', } },
            { breakpoint: 2000, settings: { centerPadding: '325px', } },
            { breakpoint: 1500, settings: { centerPadding: '250px', } },
            { breakpoint: 1150, settings: { centerPadding: '150px', } },
            { breakpoint: 900, settings: { centerPadding: '70px', } },
            { breakpoint: 750, settings: { centerPadding: '95px', } },
            {
                breakpoint: 600, settings: { arrows: false, centerPadding: '20px', }
            }
        ]
    };


    const videoThumbnail = data.map((video) => {
        return (
            <Link className='slide'
                title={video.name}
                to={video.link} key={Math.random()}>
                <div className='slide-div'
                // style={{ backgroundImage: `url(${video.img})` }} 
                >
                    <img src={video.img} alt="" />
                </div>
                <p>{video.title}</p>
            </Link>
        )
    })

    return (
        <div className='slider-super-cont'>
            <Slider {...settings} className='slidercont'>
                {videoThumbnail}
            </Slider>
        </div>
    )
}

export default VideoSlider;