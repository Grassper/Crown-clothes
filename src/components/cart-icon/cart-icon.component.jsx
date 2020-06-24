import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping_bag.svg";
import ToggleCartIcon  from "../../redux/cart/cart.action";
import {connect} from "react-redux";
import "./cart-icon.styles.scss";

const CartIcon = ({ToggleCartIcon}) => {
    return (
        <div className="cart-icon" onClick={ToggleCartIcon}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    ToggleCartIcon:() => dispatch(ToggleCartIcon())
})

export default connect(null, mapDispatchToProps)(CartIcon);