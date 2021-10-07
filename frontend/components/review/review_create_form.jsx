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
        return (
            <form className="review-form" onSubmit={this.handleSubmit}>
                <div className="review-heading">
                    <h1>{currentUser.first_name}, how was your experience at {restaurant.name}</h1>
                    <h2>Rate your dining experience (required)</h2>
                    <h2>Reservation made on {reservation.date}</h2>
                </div>
                <div className="review-stars">
                    <label>
                        Overall
                        <input type="radio" name="rating-overall" value="1" onChange={this.update('rating_overall')} />
                        <input type="radio" name="rating-overall" value="2" onChange={this.update('rating_overall')} />
                        <input type="radio" name="rating-overall" value="3" onChange={this.update('rating_overall')} />
                        <input type="radio" name="rating-overall" value="4" onChange={this.update('rating_overall')} />
                        <input type="radio" name="rating-overall" value="5" onChange={this.update('rating_overall')} />
                    </label>
                    <br />
                    <label>
                        Food
                        <input type="radio" name="rating-food" value="1" onChange={this.update('rating_food')} />
                        <input type="radio" name="rating-food" value="2" onChange={this.update('rating_food')} />
                        <input type="radio" name="rating-food" value="3" onChange={this.update('rating_food')} />
                        <input type="radio" name="rating-food" value="4" onChange={this.update('rating_food')} />
                        <input type="radio" name="rating-food" value="5" onChange={this.update('rating_food')} />
                    </label>
                    <br />
                    <label>
                        Service
                        <input type="radio" name="rating-service" value="1" onChange={this.update('rating_service')} />
                        <input type="radio" name="rating-service" value="2" onChange={this.update('rating_service')} />
                        <input type="radio" name="rating-service" value="3" onChange={this.update('rating_service')} />
                        <input type="radio" name="rating-service" value="4" onChange={this.update('rating_service')} />
                        <input type="radio" name="rating-service" value="5" onChange={this.update('rating_service')} />
                    </label>
                    <br />
                    <label>
                        Ambience
                        <input type="radio" name="rating-ambience" value="1" onChange={this.update('rating_ambience')} />
                        <input type="radio" name="rating-ambience" value="2" onChange={this.update('rating_ambience')} />
                        <input type="radio" name="rating-ambience" value="3" onChange={this.update('rating_ambience')} />
                        <input type="radio" name="rating-ambience" value="4" onChange={this.update('rating_ambience')} />
                        <input type="radio" name="rating-ambience" value="5" onChange={this.update('rating_ambience')} />
                    </label>
                    <br />
                    <label>
                        Value
                        <input type="radio" name="rating-value" value="1" onChange={this.update('rating_value')} />
                        <input type="radio" name="rating-value" value="2" onChange={this.update('rating_value')} />
                        <input type="radio" name="rating-value" value="3" onChange={this.update('rating_value')} />
                        <input type="radio" name="rating-value" value="4" onChange={this.update('rating_value')} />
                        <input type="radio" name="rating-value" value="5" onChange={this.update('rating_value')} />
                    </label>
                    <br />
                    <label>
                        Noise level
                        <input type="radio" name="rating-noise" value="1" onChange={this.update('noise_level')} />
                        <input type="radio" name="rating-noise" value="2" onChange={this.update('noise_level')} />
                        <input type="radio" name="rating-noise" value="3" onChange={this.update('noise_level')} />
                        <input type="radio" name="rating-noise" value="4" onChange={this.update('noise_level')} />
                    </label>
                </div>
                <div className="review-heading-2">
                    <h1>Write a review</h1>
                    <h2>Help diners decide where to eat. Remember to keep it short, simple and specific.</h2>
                </div>
                <div className="review-comment">
                    <textarea placeholder="Write a review" onChange={this.update('body')}/>
                </div>
                    <input type="submit" value="Submit your review" />
            </form>
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