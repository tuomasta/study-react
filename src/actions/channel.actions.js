import * as types from './action.types';
import messageApi from '../api/message.api';

export function joinChannel(channelName) {
    return { type: types.JOIN_CHANNEL, channelName };
}

export function loadMessagesSuccess(channelName, messages) {
    return { type: types.LOAD_COURSE_SUCCESS, channelName, messages };
}

export function loadMessages(channelName) {
    // return loadMessagesSuccess(channelName, [{
    //     sender: 'chatbot',
    //     text: `Hello there, welcome to @${channelName}`
    // }]);
    return function (dispatch) {
        return messageApi
            .getMessages(channelName)
            .subscribe(
            messages => dispatch(loadMessagesSuccess(channelName, messages)),
            error => { throw (error) });
    }
}