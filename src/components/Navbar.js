import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import Menu from './Reuse/Menu';
import SideMenu from './Reuse/SideMenu';
import { AnimatePresence, motion } from 'framer-motion';
import './css/Navbar.css';

export default function Navbar() {

    let activeClassName = "act";

    const [isMenu, setIsMenu] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const [sideMenu, setSideMenu] = React.useState(false);

    const username = ['Username', 'Profilename'];
    
    return (
        <nav className='nav-links'>
            <div className='sidebar-cont'>
                <AnimatePresence>
                    {sideMenu && <motion.section
                        initial={{ left: "-100vw", opacity: 0 }}
                        animate={{ left: "0px", opacity: 1 }}
                        exit={{ left: '100vw', opacity: 0 }}
                        className="sidebar-div"
                        key="menu"
                    >
                        <SideMenu toggle={(erre) => { setSideMenu(erre) }} />
                    </motion.section>}
                </AnimatePresence>
            </div>
            <div className='nav-logo-div'>
                <Link to="/voot/">
                    <div></div>
                </Link>
                <span></span>
                <button>Upgrade</button>
                <div className={sideMenu ? 'sidebar-menu side-open' : 'sidebar-menu'} onClick={() => setSideMenu((prev) => !prev)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='page-links'>
                <div>
                    <NavLink
                        to="/voot/" end
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        My Voot
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/voot/premium/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Premium
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/voot/sports/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Sports
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/voot/shows/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Shows
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/voot/movies/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Movies
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/voot/kids/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Kids
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/voot/channels/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Channels
                    </NavLink>
                </div>
            </div>
            <div className='search-div'>
                <AiOutlineSearch/>
            </div>
            <motion.div className='profile-div'>
                <motion.div onClick={() => {
                    setIsMenu(prev => !prev)
                }}
                >
                    {login ? 
                    <div className='profile-letter'>{username[0][0]}</div>
                    :
                    <FaUserAlt className='profile-icon' />
                    }
                </motion.div>
                <Menu className="profile-menu" 
                    open={isMenu}
                    handleClick={() => { setIsMenu(false) }}
                    login={login}
                    loginHandle={() => {setLogin(!login)}}
                    names = {username}
                />
            </motion.div>
        </nav>
    )
}
