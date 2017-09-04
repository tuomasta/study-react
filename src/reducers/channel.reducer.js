import * as actionTypes from '../actions/action.types';

export default function chanelReducer(state = null, action) {
    switch (action.type) {
        case actionTypes.JOIN_CHANNEL:
            return Object.assign({}, state, {
                channelName: action.channelName
            });
        case actionTypes.LOGOUT_USER:
            return null;
        default:
            return state;
    }
}