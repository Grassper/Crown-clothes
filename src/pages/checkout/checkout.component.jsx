import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {createStructuredSelector} from "reselect";
import { selectCartTotal,selectCartItems } from "../../redux/cart/cart.selector";

import "./checkout.styles.scss"

const CheckoutPage = ({total,cartItems}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => <CheckoutItem  cartItem={cartItem}/>)
        }
        <div className="total">TOTAL: ${total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    total:selectCartTotal,
    cartItems:selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage);