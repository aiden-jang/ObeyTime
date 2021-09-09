import React from 'react'; 

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit} className="search-form-box">

                    <h1 id="search-title">Find your table for any occasion</h1>
                    <br/>
                    <div className="search-form-input">
                        <input className="search-input date" type="date" />
                        <input className="search-input time" type="time" />
                        <select className="search-input party" defaultValue="2">
                            <option value="1">1 person</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                        </select>
                        <input type="text"
                            className="search-input filter"
                            placeholder="Location, Restaurant, or Cuisine"
                        />
                        <input className="search-input submit" type="submit" value="Let's go" />
                    </div>
                </form>
            </div>
        )
    }; 
}

export default SearchBar;