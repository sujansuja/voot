import React from 'react'
import "./css/Footer.css";
import { Link } from 'react-router-dom'
import AppleStore from '../images/appstore.png'
import GoogleStore from '../images/googleplay.png'
import fire from '../images/firetv.png';
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter-icon.png'
import Youtube from '../images/youtube-icon.png'
import Logo from '../images/Voot-Logo.png';
export default function Footer() {
    return (
        <footer className='footer-cont'>
            <div className='footer-first'>
                <div className='logo-div'>
                    <Link to="/voot/">
                        <img className='logo' src={Logo} alt='logo' />
                    </Link>
                </div>
                <div className='footer-menu'>
                    <div>
                        <h2>Key Pages</h2>
                        <input type="radio" name="btm-radio" />
                    </div>
                    <ul>
                        <li><Link to='/voot/'>My Voot</Link></li>
                        <li><Link to='/voot/premium/'>Premium</Link></li>
                        <li><Link to='/voot/sports/'>Sports</Link></li>
                        <li><Link to='/voot/shows/'>Shows</Link></li>
                        <li><Link to='/voot/movies/'>Movies</Link></li>
                        <li><Link to='/voot/kids/'>Kids</Link></li>
                        <li><Link to='/voot/channels/'>Channels</Link></li>
                    </ul>
                </div>
                <div className='footer-menu'>
                    <div>
                        <h2>Legal</h2>
                        <input type="radio" name="btm-radio" />
                    </div>
                    <ul>
                        <li><a href='https://help.voot.com/about-us' target="_blank" rel="noreferrer">About Us</a></li>
                        <li><a href="https://help.voot.com/terms-of-use" target="_blank" rel="noreferrer">Terms of Use</a></li>
                        <li><a href="https://help.voot.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                        <li><a href="https://help.voot.com/content-complaints" target="_blank" rel="noreferrer">Content Complaints</a></li>
                    </ul>
                </div>
                <div className='footer-menu'>
                    <div>
                        <h2>Support</h2>
                        <input type="radio" name="btm-radio" />
                    </div>
                    <ul>
                        <li><a href="https://help.voot.com/" target="_blank" rel="noreferrer">FAQs</a></li>
                        <li><a href="https://help.voot.com/hc/en-us#contactUs" target="_blank" rel="noreferrer">Contact us</a></li>
                    </ul>
                </div>
                <div className='download'>
                    <div>
                        <h2>Download</h2>
                        <input type="radio" name="btm-radio" />
                    </div>
                    <div>
                        <p>Download our mobile app for your tablet and mobile!</p>
                        <div className='apps-links'>
                            <a href="https://itunes.apple.com/in/app/voot/id1011777157?mt=8" target="_blank" rel="noreferrer"><img src={AppleStore} alt="apple" /> </a>
                            <a href="https://play.google.com/store/apps/details?id=com.tv.v18.viola" target="_blank" rel="noreferrer"><img src={GoogleStore} alt="apple" /> </a>
                            <a href="http://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Dmobile-apps&field-keywords=voot%20tv" target="_blank" rel="noreferrer"><img src={fire} alt="apple" /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-btm'>
                <div>
                    <a href='https://www.facebook.com/voot/'><img src={Facebook} alt="facebook-logo" /></a>
                    <a href='https://twitter.com/justvoot'><img src={Twitter} alt="twitter-logo" /></a>
                    <a href='https://www.youtube.com/channel/UCFHhFwEdsLs2wuvh1YdChHw'><img src={Youtube} alt="youtube-logo" /></a>
                </div>
                <p>Viacom 18 Media Pvt. Ltd @ 2022. All Rights Reserved</p>
            </div>
        </footer>
    )
}
