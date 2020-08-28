import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
    const publishableKey = "pk_test_51GyupZGiaSXymWwDXE8l6D6vERAXKWeOSpLDVY6gvUfMxwGNa1C8HjOrmiFa7hxZSEeVw9Q8tmVXR9AyZMJ3Ds8G00yyiV6F8L";
    const stripePrice = price*100;

    const onToken = (token, shipping) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount:stripePrice,
                token,
                shipping
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            alert("There was on error with your payment. please make sure to use acceptable cards.");
            console.log('Payment Error:', error);
        })
    }

    return (
        <StripeCheckout
            name = "CRWN-clothing Ltd."
            description = {`Your total price is $${price}`}
            label="Buy the Thing"
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            token={onToken}
            amount={stripePrice}
            stripeKey={publishableKey}
        />
    )    
}


export default StripeCheckoutButton;