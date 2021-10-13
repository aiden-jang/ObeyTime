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
                id:133,
                name: 'testing'
            },
            reservation: {
                date: '10/01/2021'
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.location.state.restaurant.id,
            rating_overall : 5,
            rating_food : 5,
            rating_service : 5,
            rating_ambience : 5,
            rating_value : 5,
            noise_level: 1,
            body: ''
          };
      }
      
    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
          .then(res => this.props.history.push('my/reservations'));
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

    render () {
        const { currentUser } = this.props;
        const { restaurant, reservation } = this.props.location.state;

        console.log(this.state)
        return (
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
                            <input type="radio" id="ro1" name="rating-overall" value="5" onChange={this.update('rating_overall')} />
                            <label htmlFor="ro1">★</label>
                            <input type="radio" id="ro2" name="rating-overall" value="4" onChange={this.update('rating_overall')} />
                            <label htmlFor="ro2">★</label>
                            <input type="radio" id="ro3" name="rating-overall" value="3" onChange={this.update('rating_overall')} />
                            <label htmlFor="ro3">★</label>
                            <input type="radio" id="ro4" name="rating-overall" value="2" onChange={this.update('rating_overall')} />
                            <label htmlFor="ro4">★</label>
                            <input type="radio" id="ro5" name="rating-overall" value="1" onChange={this.update('rating_overall')} />
                            <label htmlFor="ro5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Food
                        <div>
                            <input type="radio" id="rf1" name="rating-food" value="5" onChange={this.update('rating_food')} />
                            <label htmlFor="rf1">★</label>
                            <input type="radio" id="rf2" name="rating-food" value="4" onChange={this.update('rating_food')} />
                            <label htmlFor="rf2">★</label>
                            <input type="radio" id="rf3" name="rating-food" value="3" onChange={this.update('rating_food')} />
                            <label htmlFor="rf3">★</label>
                            <input type="radio" id="rf4" name="rating-food" value="2" onChange={this.update('rating_food')} />
                            <label htmlFor="rf4">★</label>
                            <input type="radio" id="rf5" name="rating-food" value="1" onChange={this.update('rating_food')} />
                            <label htmlFor="rf5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Service
                        <div>
                            <input type="radio" id="rs1" name="rating-service" value="5" onChange={this.update('rating_service')} />
                            <label htmlFor="rs1">★</label>
                            <input type="radio" id="rs2" name="rating-service" value="4" onChange={this.update('rating_service')} />
                            <label htmlFor="rs2">★</label>
                            <input type="radio" id="rs3" name="rating-service" value="3" onChange={this.update('rating_service')} />
                            <label htmlFor="rs3">★</label>
                            <input type="radio" id="rs4" name="rating-service" value="2" onChange={this.update('rating_service')} />
                            <label htmlFor="rs4">★</label>
                            <input type="radio" id="rs5" name="rating-service" value="1" onChange={this.update('rating_service')} />
                            <label htmlFor="rs5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Ambience
                        <div>
                            <input type="radio" id="ra1" name="rating-ambience" value="5" onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra1">★</label>
                            <input type="radio" id="ra2" name="rating-ambience" value="4" onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra2">★</label>
                            <input type="radio" id="ra3" name="rating-ambience" value="3" onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra3">★</label>
                            <input type="radio" id="ra4" name="rating-ambience" value="2" onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra4">★</label>
                            <input type="radio" id="ra5" name="rating-ambience" value="1" onChange={this.update('rating_ambience')} />
                            <label htmlFor="ra5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Value
                        <div>
                            <input type="radio" id="rv1" name="rating-value" value="5" onChange={this.update('rating_value')} />
                            <label htmlFor="rv1">★</label>
                            <input type="radio" id="rv2" name="rating-value" value="4" onChange={this.update('rating_value')} />
                            <label htmlFor="rv2">★</label>
                            <input type="radio" id="rv3" name="rating-value" value="3" onChange={this.update('rating_value')} />
                            <label htmlFor="rv3">★</label>
                            <input type="radio" id="rv4" name="rating-value" value="2" onChange={this.update('rating_value')} />
                            <label htmlFor="rv4">★</label>
                            <input type="radio" id="rv5" name="rating-value" value="1" onChange={this.update('rating_value')} />
                            <label htmlFor="rv5">★</label>
                        </div>
                    </label>
                    <br />
                    <label>
                        Noise level
                        <div>
                            <input type="radio" id="rn1" name="rating-noise" value="4" onChange={this.update('noise_level')} />
                            <label htmlFor="rn1">▮</label>
                            <input type="radio" id="rn2" name="rating-noise" value="3" onChange={this.update('noise_level')} />
                            <label htmlFor="rn2">◼</label>
                            <input type="radio" id="rn3" name="rating-noise" value="2" onChange={this.update('noise_level')} />
                            <label htmlFor="rn3">▪</label>
                            <input type="radio" id="rn4" name="rating-noise" value="1" onChange={this.update('noise_level')} />
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
                    <textarea placeholder="Write a review" onChange={this.update('body')}/>
                </div>
                    <input type="submit" value="Submit your review" />
            </form>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCreateForm);