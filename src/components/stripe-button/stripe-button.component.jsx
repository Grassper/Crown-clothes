import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = "pk_test_51GyupZGiaSXymWwDXE8l6D6vERAXKWeOSpLDVY6gvUfMxwGNa1C8HjOrmiFa7hxZSEeVw9Q8tmVXR9AyZMJ3Ds8G00yyiV6F8L";
    const stripePrice = price*100;

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful!");
    }

    return (
        <StripeCheckout
            name = "CRWN-clothing Ltd."
            description = {`Your total price is $${price}`}
            label="Buy the Thing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            token={onToken}
            amount={stripePrice}
            stripeKey={publishableKey}
        />
    )    
}


export default StripeCheckoutButton;