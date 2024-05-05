// API: sk_test_51PCa86SCoMblbDGHYqpWfOYtverZ8X99f2Df9WsUrHg0if8OAjnesx7oJ0gzighNY6uz1GNF97EQQD1JUDqeKsPf00ByIUwgmW
// Documentation: https://docs.stripe.com/testing#regulatory-cards
// Stripe Backup : xumi-xvkr-tlne-pnfa-piig

// test card No.: 4000003560000008

// Coffee : price_1PCzXVSCoMblbDGHD6FxVcvT
// Sunglasses : price_1PCzYBSCoMblbDGHwzgtsSVC
// Camera : price_1PCzYPSCoMblbDGHzcGu58Yd

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51PCa86SCoMblbDGHYqpWfOYtverZ8X99f2Df9WsUrHg0if8OAjnesx7oJ0gzighNY6uz1GNF97EQQD1JUDqeKsPf00ByIUwgmW');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));