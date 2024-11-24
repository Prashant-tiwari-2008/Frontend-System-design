// Example Workflow:
// Scenario: A Payment Gateway Webhook
// Registration:
    // Your application registers a webhook URL (https://yourapp.com/webhook) with the payment gateway to receive updates when a payment is successful.

// Event Trigger:
    // A customer completes a payment on the gateway.

// Webhook Delivery:
    // The gateway sends a POST request to https://yourapp.com/webhook with the payment details (e.g., amount, status, transaction ID).

// Processing:
    // Your server receives the data, validates it (e.g., using a signature), and updates your database.

const express = require('express');
const app = express();

//Middleware to parese JSON bodies
app.use(express.json());

//webhook endpoint
app.post("/webhook",(req,res) => {
    const payload = req.body;
    console.log("Received webhook :", payload);

    // validate and precess the payload
    if(payload.event === 'payment.success'){
        console.log('payment successful for :', payload.data.transactionId)
    }

    // response to acknowlege receipt
    res.status(200).send('webhook received');
})


app.listen(3000, () => {
    console.log('webhook listner running on port 3000')
})

