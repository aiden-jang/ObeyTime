import React from 'react';
import SearchPageSearchBar from './search_page_serach_bar';
import SearchFilter from './seach_filter';
import SearchResult from './search_result';
import RestaurantIndexContainer from '../restaurant/restaurant_index_container';

class SearchPage extends React.Component {
    render () {
        return (
            <div>
                <SearchPageSearchBar />
                <SearchFilter />
                <SearchResult />
                <RestaurantIndexContainer />
            </div>
        ) 
    }
}

export default SearchPage;