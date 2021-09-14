import { connect } from 'react-redux'; 
import { updateFilter } from '../../actions/filter_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import SearchPage from './search_page';

const mapStateToProps = state => ({
    restaurants: Object.values(state.entities.restaurants),
    price: state.ui.filters.price
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);