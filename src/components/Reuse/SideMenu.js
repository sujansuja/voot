import React from 'react';
import './css/SideMenu.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SideMenu(props) {
    return (
        <motion.section className='sidebar'>
            <div className='examp'>
                <div className='logo-div'>
                    <Link to="/">
                        <div></div>
                        {/* <img src='https://www.voot.com/images/Voot-Logo.svg' alt='logo' /> */}
                    </Link>
                </div>
                <div>
                    <p>Hiiiiii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                    <p>Hii</p>
                </div>
            </div>
            <div onClick={() => {props.toggle()}}></div>
        </motion.section>
    )
}
