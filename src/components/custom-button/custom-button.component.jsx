import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProps}) => {
    return (<button 
                className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'isGoogle':''} custom-button`} 
                {...otherProps}>
                {children}
            </button>)
}

export default CustomButton;