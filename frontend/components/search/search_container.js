import { connect } from 'react-redux'; 
import { updateFilter, clearFilter } from '../../actions/filter_actions';
import SearchPage from './search_page';

const mapStateToProps = state => ({
    restaurants: Object.values(state.entities.restaurants),
    price: state.ui.filters.price
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearFilter: (filter) => dispatch(clearFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);