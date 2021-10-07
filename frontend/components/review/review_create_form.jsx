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
        this.props.location.state = {
            restaurant: {
                id:1,
                name: 'testing'
            },
            reservation: {
                date: '10/01/2021'
            }
        }
      }
    
      render () {
          const { currentUser } = this.props;
          const { restaurant, reservation } = this.props.location.state;
        return (
            <div className="review-form">
                <div className="review-heading">
                    <h1>{currentUser.first_name}, how was your experience at {restaurant.name}</h1>
                    <h2>Rate your dining experience (required)</h2>
                    <h2>Reservation made on {reservation.date}</h2>
                </div>
                <div className="review-stars">
                    <label>
                        Overall
                        <input type="radio" name="rating-overall" value="1" />
                        <input type="radio" name="rating-overall" value="2" />
                        <input type="radio" name="rating-overall" value="3" />
                        <input type="radio" name="rating-overall" value="4" />
                        <input type="radio" name="rating-overall" value="5" />
                    </label>
                    <br />
                    <label>
                        Food
                        <input type="radio" name="rating-food" value="1" />
                        <input type="radio" name="rating-food" value="2" />
                        <input type="radio" name="rating-food" value="3" />
                        <input type="radio" name="rating-food" value="4" />
                        <input type="radio" name="rating-food" value="5" />
                    </label>
                    <br />
                    <label>
                        Service
                        <input type="radio" name="rating-service" value="1" />
                        <input type="radio" name="rating-service" value="2" />
                        <input type="radio" name="rating-service" value="3" />
                        <input type="radio" name="rating-service" value="4" />
                        <input type="radio" name="rating-service" value="5" />
                    </label>
                    <br />
                    <label>
                        Ambience
                        <input type="radio" name="rating-ambience" value="1" />
                        <input type="radio" name="rating-ambience" value="2" />
                        <input type="radio" name="rating-ambience" value="3" />
                        <input type="radio" name="rating-ambience" value="4" />
                        <input type="radio" name="rating-ambience" value="5" />
                    </label>
                    <br />
                    <label>
                        Value
                        <input type="radio" name="rating-value" value="1" />
                        <input type="radio" name="rating-value" value="2" />
                        <input type="radio" name="rating-value" value="3" />
                        <input type="radio" name="rating-value" value="4" />
                        <input type="radio" name="rating-value" value="5" />
                    </label>
                    <br />
                    <label>
                        Noise level
                        <input type="radio" name="rating-noise" value="1" />
                        <input type="radio" name="rating-noise" value="2" />
                        <input type="radio" name="rating-noise" value="3" />
                        <input type="radio" name="rating-noise" value="4" />
                    </label>
                </div>
                <div className="review-heading-2">
                    <h1>Write a review</h1>
                    <h2>Help diners decide where to eat. Remember to keep it short, simple and specific.</h2>
                </div>
                <div className="review-comment">
                    <textarea placeholder="Write a review" />
                </div>
                    <input type="submit" value="Submit your review" />
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