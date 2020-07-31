import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    collections:null,
    isFetch:false,
    errorMessage:undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetch:true
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetch:false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetch:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;