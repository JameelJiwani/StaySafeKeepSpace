import { CLEAR_ERROR, LOGIN_USER, UPDATE_USER } from "./constants";

export const updateUser = user => ({
    type: UPDATE_USER,
    user,
});

export const loginUser = (email, password) => ({
    type: LOGIN_USER,
    email,
    password
});

export const loginUserError = error => ({
    type: LOGIN_USER,
    error,
});

export const clearError = () => ({
    type: CLEAR_ERROR,
});
