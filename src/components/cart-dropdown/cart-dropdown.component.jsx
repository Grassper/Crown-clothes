import React from "react";

import {connect} from "react-redux";

import  CartItems from "../cart-items/cart-items.component";
import CustomButton from "../custom-button/custom-button.component"

import { createStructuredSelector } from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selector";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>{
            cartItems.map(item => <CartItems key={item.id} item={item}/>)
        }</div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps =createStructuredSelector(
    {cartItems:selectCartItems}
)

export default connect(mapStateToProps)(CartDropDown);