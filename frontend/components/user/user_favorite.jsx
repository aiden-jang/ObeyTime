import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavorites } from '../../actions/favorite_actions';
import UserSideMenu from './user_side_menu';

class UserFavorite extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFavorites();
    }

    render () {

        const user = this.props.currentUser;
        const favorites = this.props.favorites.filter(favorite => 
            favorite.user_id === user.id)
        console.log(this.props)
        return (
            <div className="user-favorite-page">
                <UserSideMenu />
                {favorites.map(favorite =>
                    <div key={favorite.id}>
                        <h1>{favorite.restaurant_id}</h1>
                    </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    favorites: Object.values(state.entities.favorites)
});

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFavorite);