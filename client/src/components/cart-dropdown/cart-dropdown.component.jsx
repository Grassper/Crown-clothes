import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import  CartItems from "../cart-items/cart-items.component";
import  CustomButton from "../custom-button/custom-button.component"

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { ToggleCartIcon } from "../../redux/cart/cart.action";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>{
            cartItems.map(item => <CartItems key={item.id} item={item}/>)
        }</div>
        <CustomButton 
        onClick={() => {
            history.push("/checkout");
            dispatch(ToggleCartIcon());
        }} 
        >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector(
    {cartItems:selectCartItems}
)

export default withRouter(connect(mapStateToProps)(CartDropDown));