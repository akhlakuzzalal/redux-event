import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './payment.css';

import CheckoutForm from "./CheakoutForm";
// import { CircularProgress } from "@mui/material";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe("pk_test_51JygH5GVNFdSlIWRfeUCO0c8Uc8oedk6gpNzRNkbP6wQvFCJwQ9tqEQaY6eOSPQzNDQJeQbGmFjDP0ym4E2pkBOJ00ltgQmsu7");

function Payment({ orderData }) {
   // const { price, _id } = orde
   const price = orderData.payment;
   const [clientSecret, setClientSecret] = useState("");

   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://limitless-dusk-46203.herokuapp.com/create-payment-intent", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ price }),
      })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
   }, [price]);
   // Theme
   const appearance = {
      theme: 'flat',
   };
   const options = {
      clientSecret,
      appearance,
   };

   return (
      <div>
         {clientSecret ? (
            <Elements stripe={stripePromise} options={options}>
               <CheckoutForm orderData={orderData} clientSecret={clientSecret} />
            </Elements>)
            :
            <>
               <h2 className="text-center">Loading ...... </h2>
            </>
            // <CircularProgress></CircularProgress>
         }
      </div>
   );
}
export default Payment;