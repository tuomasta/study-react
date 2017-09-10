import * as types from './action.types';
import messageApi from '../api/message.api';

export function joinChannel(channelName) {
  return {
    type: types.JOIN_CHANNEL,
    channelName
  };
}

export function loadMessagesSuccess(channelName, messages, subscription) {
  return {
    type: types.MESSAGES_RECEIVED,
    channelName,
    messages,
    subscription
  };
}

export function loadMessages(channelName) {
  return function (dispatch) {
    let subscription = null;
    subscription = messageApi
      .getMessages(channelName)
      .subscribe(
      messages => dispatch(loadMessagesSuccess(channelName, messages, subscription)),
      error => {
        throw (error)
      });
    return subscription;
  }
}

export function createMessagesSuccess(channelName, username, messages) {
  return {
    type: types.CREATE_MESSAGE_SUCCESS,
    channelName,
    messages
  };
}

export function createMessage(channelName, username, messages) {
  return function (dispatch) {
    return messageApi
      .createMessage(channelName, username, messages)
      .subscribe(
      messages => dispatch(createMessagesSuccess(channelName, messages)),
      error => {
        throw (error)
      });
  }
}