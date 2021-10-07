import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';


class ReviewCreateForm extends React.Component {
    constructor(props) {
        super(props);
    
        // if (!this.props.location.state) {
        //     props.history.push('/');
        //     window.location.reload();   
        // }
        this.props.location.state = {restaurant: {id:1, name: 'testing'}}
      }
    

    
      render () {
          console.log(this.props)          
        return (
            <div>
                <h1>hey, {this.props.location.state.restaurant.name}</h1>
            </div>
        )
      }
}
const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
})
const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCreateForm);