import React from 'react';
import { connect } from 'react-redux'; 
import { fetchReviews } from '../../actions/review_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar as fasStar,
    faStarHalfAlt as fasStarHalfAlt
} from '@fortawesome/free-solid-svg-icons';
import {
    faStar as farStar
} from '@fortawesome/free-regular-svg-icons';

class ReviewStar extends React.Component {
    componentDidMount () {
        this.props.fetchReviews();
    }

    createElements(n){
        let elements = [];
        for(let i =1; i < n; i++){
            elements.push(<span key={i}><FontAwesomeIcon className="stars" icon={fasStar} /></span>);
        }
        if (n % 1 != 0) {
            elements.push(<span key={0.5}><FontAwesomeIcon className="stars" icon={fasStarHalfAlt} /></span>);
        }
        for(let i = n; i < 4; i++){
            elements.push(<span key={10+i}><FontAwesomeIcon className="stars" icon={farStar} /></span>);
        }
        return elements;
    }

    render () {
        if (this.props.reviews.length < 1) return null;
        const { restaurant } = this.props;
        const  reviews  = this.props.reviews.filter(review =>
            restaurant.id === review.restaurant_id);
        let ratingAvg = 0;
        reviews.map(review => {
            ratingAvg += review.rating_overall;
        })
        ratingAvg = Math.round(ratingAvg / reviews.length * 10) / 10;
        
        return (
            <div>
                <div className="avg-rating">
                    <span>{ this.createElements(ratingAvg) }</span>
                    <span>{ ratingAvg }</span>
                    <span>{ reviews.length } Reviews</span>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewStar);