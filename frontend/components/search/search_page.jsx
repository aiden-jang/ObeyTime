import React from 'react';
import SearchPageSearchBar from './search_page_serach_bar';
import SearchFilter from './seach_filter';
import SearchResult from './search_result';
import RestaurantIndex from '../restaurant/restaurant_index';

const SearchPage = ({ restaurants, updateFilter, clearFilter, location}) => {
    

    return (
        <div>
            {location.state.input}
            <SearchPageSearchBar />
            <SearchFilter 
             updateFilter={updateFilter}
             clearFilter={clearFilter}
            />
            <SearchResult />
            <RestaurantIndex 
                restaurants={restaurants}
            />
        </div>
    )     
};

export default SearchPage;