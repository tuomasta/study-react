import * as actionTypes from '../actions/action.types';

export default function userReducer(state = { username: 'tuomas' }, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                username: action.username
            };
        case actionTypes.LOGOUT_USER:
            return null;

        default:
            return state;
    }
}