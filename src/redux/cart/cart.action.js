import cartTypes from "./cart.types";

export const ToggleCartIcon = () => {
    return {
        type:cartTypes.TOGGLE_CART_HIDDEN
    }
}

export const AddItems = (item) =>{
    return{
        type:cartTypes.ADD_ITEM,
        payload:item
    }
}



