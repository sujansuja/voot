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
                <Link to="/">
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
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        My Voot
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="premium"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Premium
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/sports"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Sports
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/shows"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Shows
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/movies"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Movies
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/kids"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Kids
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/channels"
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
                    <FaUserAlt className='profile' />
                </motion.div>
                <Menu className="profile-menu" menus={!login ? [
                    // name, to path
                    ['Login', "/"],
                    ['Help & Legal', 'help']
                ] : [
                    [[
                        'User', "profile",
                        'Add Proflie', "add_profile"
                    ]],
                    ['Manage Profiles', 'add_profiles'],
                    [
                        ['Voot Select', 'select'],
                        ['Billing History', 'select'],
                        ['Setting', 'settings'],
                        ['Help & Legal', 'help'],
                    ],
                    ['Log out', '/']
                ]
            }
                    open={isMenu}
                    handleClick={() => { setIsMenu(false) }}
                    login={login}
                    loginHandle={() => {setLogin(!login)}}
                />
            </motion.div>
        </nav>
    )
}
