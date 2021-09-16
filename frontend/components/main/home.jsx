import React from 'react'; 
import SearchBar from '../search/search_bar';
import RecommendRestaurants from './recommend_restaurants';

const Home = () => {
    return (
        <div className="home-page">
            <SearchBar />
        </div>
    )
}
//<RecommendRestaurants />

export default Home;