import UserActionTypes from "./user.types"

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = error =>({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = emailandpassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailandpassword
});

export const emailSignInSuccess = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInFailure = error =>({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});

