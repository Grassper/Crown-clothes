import { takeEvery, put, call, all } from "redux-saga/effects";
import { firestore,convertCollectionSnapShotToMap } from "../../firebase/firebase.utils.js";

import { fetchCollectionsSuccess,fetchCollectionsError } from "./shop.action";

import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionAsync(){
    try{
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapShotToMap,snapshot)
        yield put(fetchCollectionsSuccess(collectionMap));
    }

    catch (error) {
        yield put(fetchCollectionsError(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}

export function* shopSagas(){
    yield all([
        call(fetchCollectionsStart)
    ])
}