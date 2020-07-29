import { ShopActionTypes } from "./shop.types";

export const updateCollections = (collectionMap) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionMap
    }
}