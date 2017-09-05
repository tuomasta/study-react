import * as actionTypes from '../actions/action.types';

export default function chanelReducer(state = null, action) {
    switch (action.type) {
        case actionTypes.JOIN_CHANNEL:
            return Object.assign({}, state, {
                name: action.channelName
            });
        case actionTypes.LOGOUT_USER:
            return null;
        case actionTypes.LOAD_COURSE_SUCCESS:
            // if log out while loading then do nothing
            if (!state) return state;
            return Object.assign({}, state, {
                messages: action.messages
            });
        default:
            return state;
    }
}