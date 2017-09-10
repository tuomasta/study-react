import * as actionTypes from '../actions/action.types';

export default function chanelReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.JOIN_CHANNEL:
      if (state.subscription) state.subscription.unsubscribe();
      return Object.assign({}, state, {
        name: action.channelName,
        messages: []
      });
    case actionTypes.LOGOUT_USER:
      if (state.subscription) state.subscription.unsubscribe();
      return {};
    case actionTypes.MESSAGES_RECEIVED:
      {
        // if log out while loading then do nothing
        if (!state.name) return state;
        let newState = Object.assign({}, state, {
          messages: [
            ...state.messages,
            ...action.messages
          ],
          subscription: state.subscription
        });

        // TODO: there has to be a better way to handle the unsubscription
        if (state.subscription != action.subscription) {
          if (state.subscription) state.subscription.unsubscribe();
          newState.subscription = action.subscription
        }
        return newState;
      }
    default:
      return state;
  }
}