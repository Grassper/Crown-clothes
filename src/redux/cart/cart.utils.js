export const cartUtils = (prevCartItems, addedCartItem) => {
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

