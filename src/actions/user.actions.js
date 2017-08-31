import * as types from './action.types';

export function loginUser(username) {
    return { type: types.LOGIN_USER, username };
}

export function logoutUser() {
    return { type: types.LOGOUT_USER };
}