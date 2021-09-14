import React from 'react';

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.priceHandleChange = this.priceHandleChange.bind(this);
        this.cuisineHandleChange = this.cuisineHandleChange.bind(this);
        this.neighborhoodHandleChange = this.neighborhoodHandleChange.bind(this);
        this.state = {
            price: [],
            cuisine: [],
            neighborhood: []
        }
    }
    componentDidMount () {
        this.props.fetchRestaurants();
    }

    neighborhoodHandleChange(e) {
        const {updateFilter} = this.props;
        if (e.target.checked) {
            this.setState({ neighborhood: [...this.state.neighborhood, e.target.value] }, () => (
                    updateFilter('neighborhood', this.state.neighborhood)
                )
            );   
        } else {
            this.setState({neighborhood: this.state.neighborhood.filter( neighborhood => (
                neighborhood !== e.target.value))}, () => (
                    updateFilter('neighborhood', this.state.neighborhood)
                )
            );
        }
    }

    cuisineHandleChange(e) {
        const {updateFilter} = this.props;
        if (e.target.checked) {
            this.setState({ cuisine: [...this.state.cuisine, e.target.value] }, () => (
                    updateFilter('cuisine', this.state.cuisine)
                )
            );   
        } else {
            this.setState({cuisine: this.state.cuisine.filter( cuisine => (
                cuisine !== e.target.value))}, () => (
                    updateFilter('cuisine', this.state.cuisine)
                )
            );
        }
    }
    priceHandleChange(e) {
        const {updateFilter} = this.props;
        if (e.target.checked) {
            this.setState({ price: [...this.state.price, e.target.value] }, () => (
                    updateFilter('price', this.state.price)
                )
            );   
        } else {
            this.setState({price: this.state.price.filter( price => (
                price !== e.target.value))}, () => (
                    updateFilter('price', this.state.price)
                )
            );
        }
    }

    render () {
        return (
            <div className="search-filter-content">
            <label>Price
                <br />
                <input type="checkbox" value="$" onChange={this.priceHandleChange} />
                <label>$</label>
                <input type="checkbox" value="$$" onChange={this.priceHandleChange} />
                <label>$$</label>
                <input type="checkbox" value="$$$" onChange={this.priceHandleChange} />
                <label>$$$</label>
                <input type="checkbox" value="$$$$" onChange={this.priceHandleChange} />
                <label>$$$$</label>
            </label>
            <br />
            <label>Cuisine
                <br />
                <input type="checkbox" value="American" onChange={this.cuisineHandleChange} />
                <label>American</label>
                <input type="checkbox" value="Mexican" onChange={this.cuisineHandleChange} />
                <label>Mexican</label>
                <input type="checkbox" value="Italian" onChange={this.cuisineHandleChange} />
                <label>Italian</label>
                <input type="checkbox" value="Spanish" onChange={this.cuisineHandleChange} />
                <label>Spanish</label>
            </label>
            <br/>
            <label>Neighborhood
                <br />
                <input type="checkbox" value="Hell's Kitchen" onChange={this.neighborhoodHandleChange} />
                <label>Hell's Kitchen</label>
                <input type="checkbox" value="Koreatown" onChange={this.neighborhoodHandleChange} />
                <label>Koreatown</label>
                <input type="checkbox" value="Hudson Yards" onChange={this.neighborhoodHandleChange} />
                <label>Hudson Yards</label>
                <input type="checkbox" value="Chelsea" onChange={this.neighborhoodHandleChange} />
                <label>Chelsea</label>
                <input type="checkbox" value="SoHo" onChange={this.neighborhoodHandleChange} />
                <label>SoHo</label>
                <input type="checkbox" value="East Village" onChange={this.neighborhoodHandleChange} />
                <label>East Village</label>
                <input type="checkbox" value="Little Italy" onChange={this.neighborhoodHandleChange} />
                <label>Little Italy</label>
            </label>
            <br/>
        </div>
        )
    }
}

export default SearchFilter;