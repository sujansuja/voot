import React from 'react';
import './css/SideMenu.css';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/Voot-Logo.png'
export default function SideMenu(props) {

    let activeClassName = "act";

    return (
        <motion.section className='sidebar'>
            <div className='examp'>
                <div className='logo-div'>
                    <Link to="/voot/">
                        <div></div>
                        {/* <img src={Logo} alt='logo' /> */}
                    </Link>
                </div>
                <div className='login-div'>
                    {/* <div> */}
                    <NavLink onClick={() => { props.toggle() }} to="/voot/login/">
                        <p>Login</p>
                    </NavLink>
                    {/* </div> */}
                </div>
                <div className='page-links-cont'>
                    <NavLink end onClick={() => { props.toggle() }} to="/voot/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>My Voot</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/voot/premium/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Premium</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/voot/sports/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Sports</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/voot/shows/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Shows</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/voot/movies/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Movies</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/voot/kids/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Kids</p></NavLink>
                    <NavLink onClick={() => { props.toggle() }} to="/voot/channels/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    ><p>Channels</p></NavLink>
                </div>
                <div className='help-div'>
                    <NavLink onClick={() => { props.toggle() }} to="/voot/help/">
                        <p>Help & Legal</p>
                    </NavLink>
                </div>
            </div>
            <div onClick={() => { props.toggle() }}></div>
        </motion.section>
    )
}
