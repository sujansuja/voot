import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    {props.menus.map(element => <p>
                        <NavLink onClick={props.handleClick} to={element[1]} key={Math.random()}>{element[0]}</NavLink>
                    </p>
                    )}
                </motion.section>}
            </AnimatePresence>
        </section>
    )
}
