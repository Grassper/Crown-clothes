export const AddUtils = (prevCartItems, addedCartItem) => {
    const exitingCartItem = prevCartItems.find(
        (items) => items.id ===  addedCartItem.id);

    if(exitingCartItem){
        return prevCartItems.map((items) =>
            (items.id === addedCartItem.id ? 
            {...items,quantity:items.quantity+1}
            : items)
        );
    }

    return [...prevCartItems,{...addedCartItem,quantity: 1}];
}

export const RemoveUtils = (prevCartItems, removeCartItem) => {
    const exitingCartItem = prevCartItems.find(
        (items) => items.id ===  removeCartItem.id);
    
    if(exitingCartItem.quantity === 1){
        return prevCartItems.filter(item => item.id !== removeCartItem.id)
    }

    if(exitingCartItem){
        return prevCartItems.map((items) =>
            (items.id === removeCartItem.id ? 
            {...items,quantity:items.quantity-1}
            : items)
        );
    }

}
