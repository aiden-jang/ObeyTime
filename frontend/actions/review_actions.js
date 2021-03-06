import * as APIUtil from '../util/review_api_utils';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS, 
    reviews
});

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,   
    review 
});

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const fetchReviews = () => dispatch => (
    APIUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = reviewId => dispatch => (
    APIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
    APIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
    APIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
    APIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview()))
);