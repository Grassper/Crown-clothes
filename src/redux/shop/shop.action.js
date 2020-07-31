import { ShopActionTypes } from "./shop.types";
import { firestore,convertCollectionSnapShotToMap } from "../../firebase/firebase.utils.js";


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsError = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(async snapshot => {
            const collectionMap = convertCollectionSnapShotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        })
        .catch(error => dispatch(fetchCollectionsError(error.message)));
    }
};