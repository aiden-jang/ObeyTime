import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyBillAlt as farMoneyBillAlt,
    faMap as farMap
  } from '@fortawesome/free-regular-svg-icons';
  import {
      faUtensils as fasUtensils
  } from '@fortawesome/free-solid-svg-icons';

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
        };
    }

    componentDidMount () {
        if (this.props.searchTarget) {    
            this.props.updateFilter('search', this.props.searchTarget);
        } else {
            this.props.fetchRestaurants();
        }
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
                <div className="search-filter-price">
                    <label className="search-filter-name">
                        <h3><FontAwesomeIcon icon={farMoneyBillAlt} /> Price</h3>
                        <br />
                        <label>
                            <input type="checkbox" value="$" onChange={this.priceHandleChange} />
                            $
                        </label>
                        <label>
                            <input type="checkbox" value="$$" onChange={this.priceHandleChange} />
                            $$
                        </label>
                        <label>
                            <input type="checkbox" value="$$$" onChange={this.priceHandleChange} />
                            $$$
                        </label>
                        <label>
                            <input type="checkbox" value="$$$$" onChange={this.priceHandleChange} />
                            $$$$
                        </label>
                    </label>
                </div>       
                <hr />
                <div className="search-filter-cuisine">
                    <label className="search-filter-name">
                        <h3><FontAwesomeIcon icon={fasUtensils} /> Cuisine</h3>
                    <br />
                        <label>
                            <input type="checkbox" value="American" onChange={this.cuisineHandleChange} />
                            American
                        </label>
                        <label>
                            <input type="checkbox" value="Italian" onChange={this.cuisineHandleChange} />
                            Italian
                        </label>
                        <label>
                            <input type="checkbox" value="Steakhouse" onChange={this.cuisineHandleChange} />
                            Steakhouse
                        </label>
                        <label>
                            <input type="checkbox" value="Seafood" onChange={this.cuisineHandleChange} />
                            Seafood
                        </label>
                        <label>
                            <input type="checkbox" value="French" onChange={this.cuisineHandleChange} />
                            French
                        </label>
                        <label>
                            <input type="checkbox" value="Barbecue" onChange={this.cuisineHandleChange} />
                            Barbecue
                        </label>
                    </label>
                </div>
                <hr />
                <div className="search-filter-neighborhood">
                    <label className="search-filter-name">
                        <h3><FontAwesomeIcon icon={farMap} /> Neighborhood</h3>
                        <br />
                        <label>
                            <input type="checkbox" value="Hell's Kitchen" onChange={this.neighborhoodHandleChange} />
                            Hell's Kitchen
                        </label>
                        <label>
                        <input type="checkbox" value=" Meatpacking District" onChange={this.neighborhoodHandleChange} />
                            Meatpacking District
                        </label>
                        <label>
                            <input type="checkbox" value="Hudson Yards" onChange={this.neighborhoodHandleChange} />
                            Hudson Yards
                        </label>
                        <label>
                            <input type="checkbox" value="Upper West Side" onChange={this.neighborhoodHandleChange} />
                            Upper West Side
                        </label>
                        <label>
                            <input type="checkbox" value="Chelsea" onChange={this.neighborhoodHandleChange} />
                            Chelsea
                        </label>
                        <label>
                            <input type="checkbox" value="SoHo" onChange={this.neighborhoodHandleChange} />
                            SoHo
                        </label>
                        <label>
                            <input type="checkbox" value="East Village" onChange={this.neighborhoodHandleChange} />
                            East Village
                        </label>
                        <label>
                            <input type="checkbox" value="Little Italy" onChange={this.neighborhoodHandleChange} />
                            Little Italy
                        </label>
                    </label>
                </div>
            </div>
        )
    }
}

export default SearchFilter;