import * as types from './action.types';

export function joinChannel(channelName) {
    return { type: types.JOIN_CHANNEL, channelName };
}