import React from 'react';

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.priceHandleChange = this.priceHandleChange.bind(this)
        this.state = {
            price: []
        }
    }
    componentDidMount () {
        this.props.fetchRestaurants();
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
            <div className="search-filter-form">
            <label>Price
                <input type="checkbox" value="$" onChange={this.priceHandleChange} />
                <label>$</label>
                <input type="checkbox" value="$$" onChange={this.priceHandleChange} />
                <label>$$</label>
                <input type="checkbox" value="$$$" onChange={this.priceHandleChange} />
                <label>$$$</label>
                <input type="checkbox" value="$$$$" onChange={this.priceHandleChange} />
                <label>$$$$</label>
            </label>
            <br/>
        </div>
        )
    }
}
export default SearchFilter;