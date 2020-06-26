import React from "react";

import {connect} from "react-redux";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping_bag.svg";

import {ToggleCartIcon}  from "../../redux/cart/cart.action";

import { createStructuredSelector } from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selector"

import "./cart-icon.styles.scss";

const CartIcon = ({ToggleCartIcon,itemCount}) => {
    return (
        <div className="cart-icon" onClick={ToggleCartIcon}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
})


const mapDispatchToProps = (dispatch) => ({
    ToggleCartIcon:() => dispatch(ToggleCartIcon())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);