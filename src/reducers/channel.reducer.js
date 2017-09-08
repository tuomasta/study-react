import * as actionTypes from '../actions/action.types';

export default function chanelReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.JOIN_CHANNEL:
            return Object.assign({}, state, {
                name: action.channelName,
                messages: []
            });
        case actionTypes.LOGOUT_USER:
            return {};
        case actionTypes.MESSAGES_RECEIVED:
            // if log out while loading then do nothing
            if (!state) return state;
            return Object.assign({}, state, {
                messages: [
                    ...state.messages,
                    ...action.messages]
            });
        default:
            return state;
    }
}