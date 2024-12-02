import React from 'react';
import './css/Home.css';
// import BigCarousel from './Reuse/BigCarousel';
import VideoSlider from './Reuse/VideoSlider';
import FilterButtons from './Reuse/FilterButtons';
import Poster from './Reuse/Poster';
import SmallSlider from './Reuse/SmallSlider';


const FilterButonsdata = [
    {
        text: "Sports",
        link: "/voot/sports/"
    },
    {
        text: "Kannada",
        link: "/voot/shows/"
    },
    {
        text: "Marathi",
        link: "/voot/shows/"
    },
    {
        text: "Tamil",
        link: "/voot/shows/"
    },
    {
        text: "Kids",
        link: "/voot/kids/"
    },
    {
        text: "International Shows",
        link: "/voot/intshows/"
    },
]

const posterDetails = {
    src: "https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/junooniyat-tv-14x3-1676271577338.jpg",
    to: "/voot/"
}
const posterDetails1 = {
    src: "https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/sports%20-%2014x3-1672827013678.jpg",
    to: "/voot/"
}

const smallslidedetails = [
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/top%20picks-1672550305473.jpg",
        name: "Top picks"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/f%20se%20fantasy-1671114074998.jpg",
        name: "Fuh Se Fanatasy"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/the%20gone%20game-top%20picks-1675232911877.jpg",
        name: "The Gone Game"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/kyy-top%20picks%20tray-1673584271236.jpg",
        name: "Kaisi Yeh Yaariaan"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/euw-1671431380558.jpg",
        name: "Bigg Boss"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/top-picks-tray-splitsvilla-updated-ilu-1674889769838.jpg",
        name: "Splitsvilla"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/bigg%20buzz%20top%20pick%20voot-1675659780917.jpg",
        name: "Bigg Buzz"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/hunters-1672393917697.jpg",
        name: "The Vibe Hunters"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/agnisakshi-1676185892121.jpg",
        name: "Agnisakshi...Ek Samjhauta"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/punyavath-1676185907615.jpg",
        name: "Punyavathi"
    },
]
const smallslidedetails1 = [
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/uddariya---2x3---btv-1676290102890.jpg",
        name: "Udaariyaan"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/sasural-simar-ka-before-tv-branding_2x3-1661415641221.jpg",
        name: "Sasural Simar Ka"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/saavi-ki-savari-before-tv-branding_2x3-1662625182122.jpg",
        name: "Saavi i Savaari"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/08-1672739338704.jpg",
        name: "Ramachari"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/07-1672739270257.jpg",
        name: "Bhagyalakshmi"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/03-1672739089665.jpg",
        name: "Olavina Nildana"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/kannada%202x3-1672653197057.jpg",
        name: "Tripura Sundari"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/kannada-02-1673619067436.jpg",
        name: "Punyavathi"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/09-1672739385685.jpg",
        name: "Lakshana"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/04-1672739141229.jpg",
        name: "Kendasampige"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/02-1672738996953.jpg",
        name: "Ginirama"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/yogyogeshwar-jai-shankar-before-tv-2x3-1662359137194.jpg",
        name: "Yogyogeshwar Jai Shankar"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/sundara-manamadhe-bharli-3x4-1663759273894.jpg",
        name: "Sundara Manamadhe Bharli"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/jeev-majha-guntala-before-tv-2x3-1662359059435.jpg",
        name: "Jeev Majha Guntala"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/shetkarich-navra-hava-before-tv-2x3-1669101453330.jpg",
        name: "Shetkarich Navra Hawa"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_720,h_1080/v3Storage/assets/bhagya-dile-tu-mala-before-tv-2x3-1662358864019.jpg",
        name: "Bhagya Dile Tu Mala"
    },
]
const smallslidedetails2 = [
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/nba-round-1x1-1664520400211.jpg",
        name: "NBA"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/laliga-round-1x1-1641298221519-1662794524731.jpg",
        name: "LaLiga Santander"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/ligue-1-round-1x1-1641298262182-1662794541834.jpg",
        name: "Ligue 1"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/serie-a-round-1x1-1641298280145-1662794557873.jpg",
        name: "Serie A"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/_1x1_1641298221519_(1)_1647074218838-1662794507542.jpg",
        name: "Badminton World Federation"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/untitled%20design-1660200551505-1662794615125.jpg",
        name: "ATP Masters 1000"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/spfl-round-1x1-1641298322113-1662794624602.jpg",
        name: "Scottish Premiership"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/untitled%20design%20(1)-1663308926397.jpg",
        name: "Road Safety World Series 2022"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/untitled%20design%20(2)-1660046734900-1662794496713.jpg",
        name: "Durand Cup"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/mxgp-1x1-1645801853933-1662794633488.jpg",
        name: "Motocross World Championship"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/tnpl-round-1x1%20(1)-1655957416564-1662794645399.jpg",
        name: "Tamil Nadu Premier League"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/psa-round-1x1-1641298367635-1662794679461.jpg",
        name: "PSA World Tour"
    },
    {
        link: "/voot/",
        img: "https://v3img.voot.com/resizeMedium,w_540,h_540/v3Storage/assets/iihf-round-1x1-1653748180414-1662794689621.jpg",
        name: "IIHF World Championship 2022"
    }
]

export default function Home() {
    document.title = 'My Voot';

    return (
        <section className="homePage">
            <div className='caraou-cont'>
                {/* < BigCarousel /> */}
                < VideoSlider />
            </div>
            <FilterButtons data={FilterButonsdata} />
            <Poster details={posterDetails} />
            <SmallSlider data={smallslidedetails}
                isTitle=""
                wantBtn = ""
            />
            <SmallSlider data={smallslidedetails1}
                isTitle="Top Shows Before TV"
                wantBtn = "/"
            />
            <Poster details={posterDetails1} />
            <SmallSlider data={smallslidedetails2}
                isTitle="Popular In Sports"
                wantBtn = "/"
            />
        </section>
    )
}
