import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'

const NavBarProfile = props => {
    const [visible, setVisible] = useState(false);

    const handleDropdownMenu = () => {
        setVisible(!visible);
    };

    const hideMenu = e => {
        if (e.target.contains(e.relatedTarget)) return null        
        setVisible(false);
    };
    return (
        <div className="nav-bar-profile" onBlur={hideMenu}>
            <div className="nav-bar-profile-content" onClick={handleDropdownMenu}>
                <FontAwesomeIcon className="profile" icon={farUser} />
                { visible && (
                    <div onMouseLeave={hideMenu}>
                        <div className="nav-bar-profile-show">
                            <h3>Hello, {props.currentUser.first_name}!</h3>
                            <br />
                            <hr />
                            <ul>
                                <Link className="link-styling" to="/my/profile">
                                    <li>My Profile</li>
                                </Link>
                                <Link className="link-styling" to="/my/reservations">
                                    <li>My Dining History</li>
                                </Link>
                                <li onClick={props.logout}>
                                    Sign out
                                </li>
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
};

export default NavBarProfile;