import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";


import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";

import { signOutStart } from "../../redux/user/user.action";

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from "./Header.styles";

const Header = ({currentUser,hidden,signOutStart}) => {
    return (<HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {
            currentUser?
                <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden?null:<CartDropDown/>}
    </HeaderContainer>)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) =>({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);