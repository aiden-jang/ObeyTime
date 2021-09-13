import React from 'react'; 
import SearchBar from '../search/search_bar';
import RecommendRestaurants from './recommend_restaurants';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="home-page-search">
                <SearchBar />
                <RecommendRestaurants />
            </div>
        )
    }; 
}

export default Home;