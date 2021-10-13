import React from 'react';
import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import { deleteReview } from '../../actions/review_actions';

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
        const { restaurant, reservation, currentUser, review } = this.props.location.state;
        const { deleteReview } = this.props;

        if (!review) return null;
        
        return(
            <div className="review-background">
            <form className="review-form" onSubmit={this.handleSubmit}>
                <div className="review-heading">
                    <h1>{currentUser.first_name}, how was your experience at {restaurant.name}</h1>
                    <hr />
                    <h2>Rate your dining experience (required)</h2>
                    <h2>Reservation made on {reservation.date}</h2>
                </div>
                <div className="review-stars">
                    <label>
                        Overall
                        <div>
                            <input type="radio" id="ro1" name="rating-overall" value="5" checked={this.state.rating_overall === 5} onChange={this.update('rating_overall')} />
                            <label htmlFor="ro1">★</label>
                            <input type="radio" id="ro2" name="rating-overall" value="4" checked={this.state.rating_overall === 4} onChange={this.update('rating_overall')} />
                            <label htmlFor="ro2">★</label>
                            <input type="radio" id="ro3" name="rating-overall" value="3" checked={this.state.rating_overall === 3} onChange={this.update('rating_overall')} />
                            <label htmlFor="ro3">★</label>
                            <input type="radio" id="ro4" name="rating-overall" value="2" checked={this.state.rating_overall === 2} onChange={this.update('rating_overall')} />
                            <label htmlFor="ro4">★</label>
                            <input type="radio" id="ro5" name="rating-overall" value="1" checked={this.state.rating_overall === 1} onChange={this.update('rating_overall')} />
                            <label htmlFor="ro5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Food
                        <div>
                            <input type="radio" id="rf1" name="rating-food" value="5" checked={this.state.rating_food === 5} onChange={this.update('rating_food')} />
                            <label htmlFor="rf1">★</label>
                            <input type="radio" id="rf2" name="rating-food" value="4" checked={this.state.rating_food === 4} onChange={this.update('rating_food')} />
                            <label htmlFor="rf2">★</label>
                            <input type="radio" id="rf3" name="rating-food" value="3" checked={this.state.rating_food === 3} onChange={this.update('rating_food')} />
                            <label htmlFor="rf3">★</label>
                            <input type="radio" id="rf4" name="rating-food" value="2" checked={this.state.rating_food === 2} onChange={this.update('rating_food')} />
                            <label htmlFor="rf4">★</label>
                            <input type="radio" id="rf5" name="rating-food" value="1" checked={this.state.rating_food === 1} onChange={this.update('rating_food')} />
                            <label htmlFor="rf5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Service
                        <div>
                            <input type="radio" id="rs1" name="rating-service" value="5" checked={this.state.rating_service === 5} onChange={this.update('rating_service')} />
                            <label htmlFor="rs1">★</label>
                            <input type="radio" id="rs2" name="rating-service" value="4" checked={this.state.rating_service === 4} onChange={this.update('rating_service')} />
                            <label htmlFor="rs2">★</label>
                            <input type="radio" id="rs3" name="rating-service" value="3" checked={this.state.rating_service === 3} onChange={this.update('rating_service')} />
                            <label htmlFor="rs3">★</label>
                            <input type="radio" id="rs4" name="rating-service" value="2" checked={this.state.rating_service === 2} onChange={this.update('rating_service')} />
                            <label htmlFor="rs4">★</label>
                            <input type="radio" id="rs5" name="rating-service" value="1" checked={this.state.rating_service === 1} onChange={this.update('rating_service')} />
                            <label htmlFor="rs5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Ambience
                        <div>
                            <input type="radio" id="ra1" name="rating-ambience" value="5" checked={this.state.rating_ambience === 5} onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra1">★</label>
                            <input type="radio" id="ra2" name="rating-ambience" value="4" checked={this.state.rating_ambience === 4} onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra2">★</label>
                            <input type="radio" id="ra3" name="rating-ambience" value="3" checked={this.state.rating_ambience === 3} onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra3">★</label>
                            <input type="radio" id="ra4" name="rating-ambience" value="2" checked={this.state.rating_ambience === 2} onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra4">★</label>
                            <input type="radio" id="ra5" name="rating-ambience" value="1" checked={this.state.rating_ambience === 1} onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Value
                        <div>
                            <input type="radio" id="rv1" name="rating-value" value="5" checked={this.state.rating_value === 5} onChange={this.update('rating_value')} />
                            <label htmlFor="rv1">★</label>
                            <input type="radio" id="rv2" name="rating-value" value="4" checked={this.state.rating_value === 4} onChange={this.update('rating_value')} />
                            <label htmlFor="rv2">★</label>
                            <input type="radio" id="rv3" name="rating-value" value="3" checked={this.state.rating_value === 3} onChange={this.update('rating_value')} />
                            <label htmlFor="rv3">★</label>
                            <input type="radio" id="rv4" name="rating-value" value="2" checked={this.state.rating_value === 2} onChange={this.update('rating_value')} />
                            <label htmlFor="rv4">★</label>
                            <input type="radio" id="rv5" name="rating-value" value="1" checked={this.state.rating_value === 1} onChange={this.update('rating_value')} />
                            <label htmlFor="rv5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Noise level
                        <div>
                            <input type="radio" id="rn1" name="rating-noise" value="4" checked={this.state.noise_level === 4} onChange={this.update('noise_level')} />
                            <label htmlFor="rn1">▮</label>
                            <input type="radio" id="rn2" name="rating-noise" value="3" checked={this.state.noise_level === 3} onChange={this.update('noise_level')} />
                            <label htmlFor="rn2">◼</label>
                            <input type="radio" id="rn3" name="rating-noise" value="2" checked={this.state.noise_level === 2} onChange={this.update('noise_level')} />
                            <label htmlFor="rn3">▪</label>
                            <input type="radio" id="rn4" name="rating-noise" value="1" checked={this.state.noise_level === 1} onChange={this.update('noise_level')} />
                            <label htmlFor="rn4">⬝</label>
                        </div>
                    </label>
                </div>
                <hr />
                <div className="review-heading-2">
                    <h1>Write a review</h1>
                    <h2>Help diners decide where to eat. Remember to keep it short, simple and specific.</h2>
                </div>
                <div className="review-comment">
                    <textarea value={this.state.body} onChange={this.update('body')}/>
                </div>
                <input type="submit" value="Edit your review" />
                <input type="submit" onClick={() => deleteReview(review.id).then(res => this.props.history.push('/my/reservations'))} value='Delete your review' />
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(null, mapDispatchToProps)(ReviewEditForm);