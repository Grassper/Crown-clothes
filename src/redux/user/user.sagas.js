import { takeLatest,all,call, put } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { SignInFailure,SignInSuccess } from "./user.action";

import { auth,createUserProfileDocument,googleProvider } from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
            SignInSuccess({
                id:userSnapshot.id,
                ...userSnapshot.data()
            })
        );
    }catch(error){
        yield put(SignInFailure(error));
    }
}

export function* signInWithGoogle(){
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(SignInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
        );
}

export function* signInWithEmail({payload:{ email,password }}){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(SignInFailure(error));
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}


export function* userSagas() {
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart)]);
}