import React from 'react';
import SearchPageSearchBar from './search_page_serach_bar';
import SearchFilter from './seach_filter';
import RestaurantIndex from '../restaurant/restaurant_index';

const SearchPage = ({ restaurants, updateFilter, fetchRestaurants, location}) => {
// { location.state ? (location.state.input) : (<p>empty</p>)}
    return (
        <div className="search-page">
            <SearchPageSearchBar 
                updateFilter={updateFilter}
            />
            <div className="search-filter-container">
                <SearchFilter 
                    updateFilter={updateFilter}
                    fetchRestaurants={fetchRestaurants}
                />
            </div>
            <div className="search-result-container">
                <RestaurantIndex 
                    restaurants={restaurants}
                />
            </div>  
            
        </div>
    )     
};

export default SearchPage;

