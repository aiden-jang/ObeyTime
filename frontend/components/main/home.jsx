import React from 'react'; 
import SearchBar from '../search/search_bar'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="home-page-search">
                <SearchBar />
            </div>
        )
    }; 
}

export default Home;