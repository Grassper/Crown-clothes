import React from "react";
import {connect} from "react-redux";
import "./cart-dropdown.styles.scss";
import  CartItems from "../cart-items/cart-items.component"

import CustomButton from "../custom-button/custom-button.component"


const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>{
            cartItems.map(item => <CartItems key={item.id} item={item}/>)
        }</div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => {
    return {cartItems}
}

export default connect(mapStateToProps)(CartDropDown);