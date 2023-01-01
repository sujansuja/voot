import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Menu.css';
import { motion, AnimatePresence } from 'framer-motion';
export default function Menu(props) {

    return (
        <section className='menu--cont'>
            <AnimatePresence>
                {props.open && <motion.section className='menu'
                    data-open={props.login}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {!(props.login) ?
                        <>
                            <div>
                                <p><Link to="/" onClick={() => {
                                    props.loginHandle();
                                    // props.handleClick()
                                }}>Login</Link></p>
                            </div>
                            <div>
                                <p><a href="https://help.voot.com/hc/en-us/" alt="help" target="_blank" rel="noreferrer">Help & Legal</a></p>
                            </div>
                            </>
                        :
                        <>
                            <div className='menu-profiles'>
                                <div className='inline-div'>
                                    <div><>U</></div>
                                    <p>Username</p>
                                </div>
                                <div className='inline-div'>
                                    <div><>+</></div>
                                    <p>Add Profile</p>
                                </div>
                            </div>
                            <div>
                                <p>Manage Profile</p>
                            </div>
                            <div>
                                <div>
                                    <p>Voot Select</p>
                                    <span>Subscribe Now</span>
                                </div>
                                <p>Biiling History</p>
                                <p>Settings</p>
                                <p>Help & Legal</p>
                            </div>
                            <div>
                                <p onClick={() => {
                                    props.loginHandle();
                                    // props.handleClick()
                                }}>Log Out</p>
                            </div>
                        </>
                    }
                </motion.section>}
            </AnimatePresence>
        </section>
    )
}






// props.menus.map(element => <p key={Math.random()}>
//     <NavLink onClick={props.handleClick} to={element[1]}>{element[0]}</NavLink>
// </p>
// )