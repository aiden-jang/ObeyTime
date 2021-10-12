import React from 'react';
import { connect } from 'react-redux'; 
import { fetchReviews } from '../../actions/review_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons';
import {
    faStar as farStar
} from '@fortawesome/free-regular-svg-icons';

class ReviewShow extends React.Component {
    componentDidMount () {
        this.props.fetchReviews();
    }

    createElements(n){
        let elements = [];
        for(let i =1; i <= n; i++){
            elements.push(<span key={i}><FontAwesomeIcon className="stars-filled" icon={fasStar} /></span>);
        }
        for(let i = n; i < 5; i++){
            elements.push(<span key={10+i}><FontAwesomeIcon className="stars-unfilled" icon={farStar} /></span>);
        }
        return elements;
    }

    render () {
        if (this.props.reviews.length < 1) return null;
        const { restaurant } = this.props;
        const  reviews  = this.props.reviews.filter(review =>
            restaurant.id === review.restaurant_id);

            return (
            <div className="reviews">
                <h2>What {reviews.length} people are saying</h2>
                <hr />

                {reviews.map(review => (
                    <div key={review.id} className="review">
                        <h3>Anonymous User</h3>
                        <div className="review-container">
                            <span>{ this.createElements(review.rating_overall) }</span>
                            <ul>
                                <li>Overall <span>{review.rating_overall}</span></li>
                                <li>· Food <span>{review.rating_food}</span></li>
                                <li>· Service <span>{review.rating_service}</span></li>
                                <li>· Ambience <span>{review.rating_ambience}</span></li>
                                <li>· Value <span>{review.rating_value}</span></li>
                            </ul>
                            <p>{review.body}</p>
                            <hr />
                        </div>
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