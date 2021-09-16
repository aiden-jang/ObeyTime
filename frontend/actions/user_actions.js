import * as ApiUtil from '../util/user_api_utils';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = userId => dispatch => (
    ApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);