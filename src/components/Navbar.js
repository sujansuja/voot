import React from 'react';
import './css/Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa'
import Menu from './Reuse/Menu';
import { motion } from 'framer-motion';

export default function Navbar() {

    let activeClassName = "act";

    const [isMenu, setIsMenu] = React.useState(false);
    const [login, setLogin] = React.useState(false);

    return (
        <nav className='nav-links'>
            <div className='nav-logo-div'>
                <Link to="/">
                    <img src='https://www.voot.com/images/Voot-Logo.svg' alt='logo' />
                </Link>
                <span></span>
                <button>Upgrade</button>
            </div>
            <div className='page-links'>
                <div>
                    <NavLink
                        to="home"
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
                    <NavLink to="sports"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Sports
                    </NavLink>
                </div>
                <div>
                    <NavLink to="shows"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Shows
                    </NavLink>
                </div>
                <div>
                    <NavLink to="movies"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Movies
                    </NavLink>
                </div>
                <div>
                    <NavLink to="kids"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Kids
                    </NavLink>
                </div>
                <div>
                    <NavLink to="channels"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        Channels
                    </NavLink>
                </div>
            </div>
            <div className='search-div'>
                <img src='https://www.voot.com/images/icon_search_white.svg' alt='search' />
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
                    ['Login', "login"],
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
                ]}
                    open={isMenu}
                    handleClick={() => { setIsMenu(false) }}
                />
            </motion.div>
        </nav>
    )
}