import React from 'react';
import { Link } from 'react-router-dom';
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
                                <p><Link to="/voot/" onClick={() => {
                                    props.loginHandle();
                                    props.handleClick();
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
                                    <div>{props.names[0][0]}</div>
                                    <p>{props.names[0]}</p>
                                </div>
                                {/* <div className='inline-div'>
                                    <div>{props.names[1][0]}</div>
                                    <p>{props.names[1]}</p>
                                </div> */}
                                <div className='inline-div'>
                                    <div>+</div>
                                    <p>Add Profile</p>
                                </div>
                            </div>
                            <div>
                                <a>Manage Profiles</a>
                            </div>
                            <div className='general'>
                                <div>
                                    <p>Voot Select</p>
                                    <span><a href="https://www.voot.com/subscription" target="_blank" rel="noreferrer">Subscribe Now</a></span>
                                </div>
                                <a href='https://www.voot.com/settings/billing-history' target="_blank" rel="noreferrer">Biiling History</a>
                                <a href='https://www.voot.com/settings/' target="_blank" rel="noreferrer">Settings</a>
                                <a href='https://help.voot.com/hc/en-us/' target="_blank" rel="noreferrer">Help & Legal</a>
                            </div>
                            <div>
                                <p onClick={() => {
                                    props.loginHandle();
                                    props.handleClick();
                                }}><a href={`${window.location.href}`}>Log Out</a></p>
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