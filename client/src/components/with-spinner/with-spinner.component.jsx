import React from "react"

import { SpinnerOverlay,SpinnerContainer } from "./with-spinner.styles"

const WithSpinner = WrapperComponent => {
    const spinner = ({isLoading, ...otherProps}) => 
    {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ):(
        <WrapperComponent {...otherProps}/>);
    }
    return spinner;
}

export default WithSpinner;