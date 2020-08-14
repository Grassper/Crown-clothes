import cartTypes from "./cart.types";

export const ToggleCartIcon = () => {
    return {
        type:cartTypes.TOGGLE_CART_HIDDEN
    }
}

export const AddItem = (item) =>{
    return{
        type:cartTypes.ADD_ITEM,
        payload:item
    }
}

export const ClearItem = (item) =>{
    return{
        type:cartTypes.CLEAR_ITEM,
        payload:item
    }
}

export const RemoveItem = (item) =>{
    return {
        type:cartTypes.REMOVE_ITEM,
        payload:item
    }
}

export const ClearCart = () => {
    return {
        type:cartTypes.CLEAR_CART
    }
}

