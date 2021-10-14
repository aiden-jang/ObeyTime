import React from 'react';
import SearchPageSearchBar from './search_page_serach_bar';
import SearchFilter from './seach_filter';
import RestaurantIndex from '../restaurant/restaurant_index';

const SearchPage = ({ restaurants, updateFilter, fetchRestaurants, location }) => {
    return (
        <div className="search-page">
            <SearchPageSearchBar 
                updateFilter={updateFilter}
                searchTarget={
                    location.state ? location.state.searchTarget : null
                }
            />
            <div className="search-filter-container">
                <SearchFilter 
                    updateFilter={updateFilter}
                    searchTarget={
                        location.state ? location.state.searchTarget : null
                    }
                    fetchRestaurants={fetchRestaurants}
                />
            </div>
            <div className="search-result-container">
                {restaurants.length === 0 ? (
                    <h3>Search is currently limited to New York City. Please try again.</h3>
                ) : (
                    <h3>{restaurants.length} restaurants available in New York City </h3>                    
                )}
                <RestaurantIndex 
                    restaurants={restaurants}
                />
            </div>
        </div>
    )     
};

export default SearchPage;