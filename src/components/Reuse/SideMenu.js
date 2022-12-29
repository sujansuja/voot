import React from 'react';
import './css/SideMenu.css';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

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
                <div className='login-div'>
                    <div>
                        <NavLink onClick={() => {props.toggle()} } to="/login">
                            <p>Login</p>
                        </NavLink>
                    </div>
                </div>
                <div className='page-links-cont'>
                    <NavLink onClick={() => {props.toggle()}} to="/"><p>My Voot</p></NavLink>
                    <NavLink onClick={() => {props.toggle()}} to="/premium"><p>Premium</p></NavLink>
                    <NavLink onClick={() => {props.toggle()}} to="/sports"><p>Sports</p></NavLink>
                    <NavLink onClick={() => {props.toggle()}} to="/shows"><p>Shows</p></NavLink>
                    <NavLink onClick={() => {props.toggle()}} to="/movies"><p>Movies</p></NavLink>
                    <NavLink onClick={() => {props.toggle()}} to="/kids"><p>Kids</p></NavLink>
                    <NavLink onClick={() => {props.toggle()}} to="/channlels"><p>Channels</p></NavLink>
                </div>
                <div className='help-div'>
                    <NavLink onClick={() => {props.toggle()}} to="/help">
                        <p>Help & Legal</p>
                    </NavLink>
                </div>
            </div>
            <div onClick={() => { props.toggle() }}></div>
        </motion.section>
    )
}
