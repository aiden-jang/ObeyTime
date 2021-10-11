import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser as farUser
} from '@fortawesome/free-regular-svg-icons';

class NavBarProfile extends React.Component {
    constructor(props) {
        super(props);

        this.handleDropDown = this.handleDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
        
        this.state = {
            display: false
        };
    }

    handleDropDown() {
        this.setState({ display: !this.state.display });
    }

    hideDropDown(e) {
        if (e.target.contains(e.relatedTarget)) return null;
        this.setState({ display: false });
    }

    render() {
        const { currentUser, logout } = this.props;

        return (
            <div className="nav-bar-profile" onBlur={this.hideDropDown}>
                <div className="nav-bar-profile-content" onClick={this.handleDropDown}>
                    <FontAwesomeIcon className="profile" icon={farUser} />
                    { this.state.display ? (
                        <div onMouseLeave={this.hideDropDown}>
                            <div className="nav-bar-profile-show">
                                <h3>Hello, {currentUser.first_name}!</h3>
                                <br />
                                <hr />
                                <ul>
                                    <Link className="dropdown-links-styling" to="/my/profile">
                                        <li>My Profile</li>
                                    </Link>
                                    <Link className="dropdown-links-styling" to="/my/reservations">
                                        <li>My Dining History</li>
                                    </Link>
                                    <Link className="dropdown-links-styling" to="/my/favorites">
                                        <li>My Saved Restaurants</li>
                                    </Link>
                                    <li onClick={logout}>
                                        Sign out
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default NavBarProfile;