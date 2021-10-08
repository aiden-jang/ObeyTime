import React from 'react';
import { connect } from 'react-redux'; 

import { fetchReviews } from '../../actions/review_actions';

class ReviewShow extends React.Component {
    componentDidMount () {
        this.props.fetchReviews();
    }

    render () {
        if (this.props.reviews.length < 1) return null;
        const { restaurant } = this.props;
        const  reviews  = this.props.reviews.filter(review =>
            restaurant.id === review.restaurant_id);
        return (
            <div>
                <br />
                <br />
                <br />
                {reviews.map(review => (
                    <div key={review.id}>
                        <span>Anonymous User</span>
                        <span>{review.rating_overall}</span>
                        <span>{review.rating_food}</span>
                        <span>{review.rating_service}</span>
                        <span>{review.rating_ambience}</span>
                        <span>{review.rating_value}</span>
                        <span>{review.body}</span>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    reviews: Object.values(state.entities.reviews)
})
const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow);