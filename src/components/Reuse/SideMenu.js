import React from 'react';
import './css/SideMenu.css';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

export default function SideMenu(props) {

    let activeClassName = "act";

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
                    {/* <div> */}
                        <NavLink onClick={() => { props.toggle() }} to="/login">
                            <p>Login</p>
                        </NavLink>
                    {/* </div> */}
                </div>
                <div className='page-links-cont'>
                    <NavLink onClick={() => { props.toggle() }} to="/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>My Voot</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/premium"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Premium</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/sports"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Sports</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/shows"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Shows</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/movies"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Movies</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/kids"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Kids</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/channels"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Channels</p></NavLink>
                </div>
                <div className='help-div'>
                    <NavLink onClick={() => { props.toggle() }} to="/help">
                        <p>Help & Legal</p>
                    </NavLink>
                </div>
            </div>
            <div onClick={() => { props.toggle() }}></div>
        </motion.section>
    )
}
