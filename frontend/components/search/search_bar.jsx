import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);

        this.state = {};
    }

    handleSubmit (e) {
        e.preventDefault();

        this.props.history.push({
            pathname: '/search',
            state: this.state
        });
    }
    
    updateInput(e) {
        this.setState({
            searchTarget: e.target.value
        });
    }
  
    render() {
        const today = new Date().toISOString().slice(0, 10)

        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit} className="search-form-box">
                    <h1 className="search-title">Find your table for any occasion</h1>
                    <br/>
                    <div className="search-form-input">
                        <input className="search-input date" type="date" defaultValue={today} min={today} />
                        <input className="search-input time" type="time" defaultValue="18:00" />
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
                            onChange={this.updateInput}
                        />
                        <input className="search-input submit" type="submit" value="Let's go" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);