import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { updateReview } from '../../actions/review_actions';

class ReviewEditForm extends React.Component {
    constructor(props) {
        super(props);

        if (!props.location.state) {
            props.history.push('/');
            window.location.reload();   
        }

        this.modifyReview = this.modifyReview.bind(this);
        this.update = this.update.bind(this);
        this.state = this.props.location.state.review;
    }

    update(field) {
        if (field === 'body') {
          return e => this.setState({
              [field]: e.target.value
            });
        } else {
          return e => this.setState({
              [field]: parseInt(e.target.value)
            });
        }
    }

    modifyReview (e) {
        e.preventDefault();
        this.props.updateReview(this.state)
            .then(res => this.props.history.push('/my/reservations'));
    }

    render () {
        const { restaurant, reservation, currentUser } = this.props.location.state;
        return(
            <form className="review-form" onSubmit={this.modifyReview}>
            <div className="review-heading">
                <h1>{currentUser.first_name}, how was your experience at {restaurant.name}</h1>
                <h2>Rate your dining experience (required)</h2>
                <h2>Reservation made on {reservation.date}</h2>
            </div>
            <div className="review-stars">
                <label>
                    Overall
                    <input type="radio" name="rating-overall" value="1" checked={this.state.rating_overall === 1} onChange={this.update('rating_overall')} />
                    <input type="radio" name="rating-overall" value="2" checked={this.state.rating_overall === 2} onChange={this.update('rating_overall')} />
                    <input type="radio" name="rating-overall" value="3" checked={this.state.rating_overall === 3} onChange={this.update('rating_overall')} />
                    <input type="radio" name="rating-overall" value="4" checked={this.state.rating_overall === 4} onChange={this.update('rating_overall')} />
                    <input type="radio" name="rating-overall" value="5" checked={this.state.rating_overall === 5} onChange={this.update('rating_overall')} />
                </label>
                <br />
                <label>
                    Food
                    <input type="radio" name="rating-food" value="1" checked={this.state.rating_food === 1} onChange={this.update('rating_food')} />
                    <input type="radio" name="rating-food" value="2" checked={this.state.rating_food === 2} onChange={this.update('rating_food')} />
                    <input type="radio" name="rating-food" value="3" checked={this.state.rating_food === 3} onChange={this.update('rating_food')} />
                    <input type="radio" name="rating-food" value="4" checked={this.state.rating_food === 4} onChange={this.update('rating_food')} />
                    <input type="radio" name="rating-food" value="5" checked={this.state.rating_food === 5} onChange={this.update('rating_food')} />
                </label>
                <br />
                <label>
                    Service
                    <input type="radio" name="rating-service" value="1" checked={this.state.rating_service === 1} onChange={this.update('rating_service')} />
                    <input type="radio" name="rating-service" value="2" checked={this.state.rating_service === 2} onChange={this.update('rating_service')} />
                    <input type="radio" name="rating-service" value="3" checked={this.state.rating_service === 3} onChange={this.update('rating_service')} />
                    <input type="radio" name="rating-service" value="4" checked={this.state.rating_service === 4} onChange={this.update('rating_service')} />
                    <input type="radio" name="rating-service" value="5" checked={this.state.rating_service === 5} onChange={this.update('rating_service')} />
                </label>
                <br />
                <label>
                    Ambience
                    <input type="radio" name="rating-ambience" value="1" checked={this.state.rating_ambience === 1} onChange={this.update('rating_ambience')} />
                    <input type="radio" name="rating-ambience" value="2" checked={this.state.rating_ambience === 2} onChange={this.update('rating_ambience')} />
                    <input type="radio" name="rating-ambience" value="3" checked={this.state.rating_ambience === 3} onChange={this.update('rating_ambience')} />
                    <input type="radio" name="rating-ambience" value="4" checked={this.state.rating_ambience === 4} onChange={this.update('rating_ambience')} />
                    <input type="radio" name="rating-ambience" value="5" checked={this.state.rating_ambience === 5} onChange={this.update('rating_ambience')} />
                </label>
                <br />
                <label>
                    Value
                    <input type="radio" name="rating-value" value="1" checked={this.state.rating_value === 1} onChange={this.update('rating_value')} />
                    <input type="radio" name="rating-value" value="2" checked={this.state.rating_value === 2} onChange={this.update('rating_value')} />
                    <input type="radio" name="rating-value" value="3" checked={this.state.rating_value === 3} onChange={this.update('rating_value')} />
                    <input type="radio" name="rating-value" value="4" checked={this.state.rating_value === 4} onChange={this.update('rating_value')} />
                    <input type="radio" name="rating-value" value="5" checked={this.state.rating_value === 5} onChange={this.update('rating_value')} />
                </label>
                <br />
                <label>
                    Noise level
                    <input type="radio" name="rating-noise" value="1" checked={this.state.noise_level === 1} onChange={this.update('noise_level')} />
                    <input type="radio" name="rating-noise" value="2" checked={this.state.noise_level === 2} onChange={this.update('noise_level')} />
                    <input type="radio" name="rating-noise" value="3" checked={this.state.noise_level === 3} onChange={this.update('noise_level')} />
                    <input type="radio" name="rating-noise" value="4" checked={this.state.noise_level === 4} onChange={this.update('noise_level')} />
                </label>
            </div>
            <div className="review-heading-2">
                <h1>Write a review</h1>
                <h2>Help diners decide where to eat. Remember to keep it short, simple and specific.</h2>
            </div>
            <div className="review-comment">
                <textarea value={this.state.body} onChange={this.update('body')}/>
            </div>
                <input type="submit" value="Submit your review" />
        </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateReview: review => dispatch(updateReview(review))
});

export default connect(null, mapDispatchToProps)(ReviewEditForm);