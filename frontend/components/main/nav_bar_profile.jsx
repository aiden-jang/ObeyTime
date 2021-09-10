import React, { useState } from 'react';

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
                <span>PROFILE</span>
                {visible && (<div onMouseLeave={hideMenu}>
                    <div className="nav-bar-profile-show">
                        <h3>Hello, {props.currentUser.first_name}!</h3>
                        <br />
                        <hr />
                        <ul>
                            <li>
                                My Profile
                            </li>
                            <li>
                                My Dining History
                            </li>
                            <li>
                                My Saved Restaurants
                            </li>
                            <li>
                                <button className="logout-button" onClick={props.logout}>Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default NavBarProfile;