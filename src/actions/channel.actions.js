import * as types from './action.types';
import messageApi from '../api/message.api';

export function joinChannel(channelName) {
  return {
    type: types.JOIN_CHANNEL,
    channelName
  };
}

export function loadMessagesSuccess(channelName, messages) {
  return {
    type: types.MESSAGES_RECEIVED,
    channelName,
    messages
  };
}

export function loadMessages(channelName) {
  return function (dispatch) {
    return messageApi
      .getMessages(channelName)
      .subscribe(
      messages => dispatch(loadMessagesSuccess(channelName, messages)),
      error => {
        throw (error)
      });
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