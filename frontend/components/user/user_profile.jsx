import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserSideMenu from './user_side_menu';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
    }

    render () {
        if (Object.keys(this.props.user).length === 0) return null;

        const user = this.props.user;

        return (
            <div className="user-profile-page">
                <div className="user-profile-head">
                    <h1>{user.first_name} {user.last_name}</h1>
                </div>
                <div className="user-profile-body">
                   <UserSideMenu 
                    tab='profile'
                   />
                    <div className="user-profile-page-main">
                        <h2>About me</h2>
                        <div className="user-profile-first-name">
                            <h3>First name</h3>
                            <input type="text" value={user.first_name} readOnly/>
                        </div>
                        <div className="user-profile-last-name">
                            <h3>Last name</h3>
                            <input type="text" value={user.last_name} readOnly/>
                        </div>
                        <div className="user-profile-email">
                            <h3>Email</h3>
                            <input type="text" value={user.email} readOnly/>
                        </div>
                        <div className="user-profile-location">
                            <h3>Primary dining location</h3>
                            <input type="text" value={user.primary_location} readOnly/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);