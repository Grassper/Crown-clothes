const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:true }));

app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"client/build")));

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname,"client/build","index.html"));
    });
}

app.post("/payment", (req,res) => {
    const body = {
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'usd',
        description:'Software development services',
        shipping: {
            name: req.body.shipping.billing_name,
            address: {
                line1: '510 Townsend St',
                postal_code: '98140',
                city: 'San Francisco',
                state: 'CA',
                country: 'US'
            },
          }
    }
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).send({ error: stripeErr });
        }else{
            res.status(200).send({ success: stripeRes })
        }
    });
});

app.listen(port, error => {
    if(error) throw error;
    console.log("Server is running on port",port)
})