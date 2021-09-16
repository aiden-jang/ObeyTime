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
        }
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
                        <FontAwesomeIcon icon={farMoneyBillAlt} /> Price
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
                        <FontAwesomeIcon icon={fasUtensils} /> Cuisine
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
                            <input type="checkbox" value="Spanish" onChange={this.cuisineHandleChange} />
                            Spanish
                        </label>
                        <label>
                            <input type="checkbox" value="Korean" onChange={this.cuisineHandleChange} />
                            Korean
                        </label>
                        <label>
                            <input type="checkbox" value="Japanese" onChange={this.cuisineHandleChange} />
                            Japanese
                        </label>
                    </label>
                </div>
                <hr />
                <div className="search-filter-neighborhood">
                    <label className="search-filter-name">
                        <FontAwesomeIcon icon={farMap} /> Neighborhood
                        <br />
                        <label>
                            <input type="checkbox" value="Hell's Kitchen" onChange={this.neighborhoodHandleChange} />
                            Hell's Kitchen
                        </label>
                        <label>
                        <input type="checkbox" value="Koreatown" onChange={this.neighborhoodHandleChange} />
                            Koreatown
                        </label>
                        <label>
                            <input type="checkbox" value="Hudson Yards" onChange={this.neighborhoodHandleChange} />
                            Hudson Yards
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