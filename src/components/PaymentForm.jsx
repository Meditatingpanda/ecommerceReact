import { React, useState, useEffect } from "react";
import { Typography, Button, Divider } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import { commerce } from "../lib/commerce.js";
function PaymentForm({
  checkoutToken,
  nextStep,
  backStep,
  shippingData,
  refreshCart
}) {
  const [lineItems, setLineItems] = useState();
  useEffect(() => {
    let lineItems = {};
    checkoutToken.live.line_items.map((item) => {
      lineItems = {
        ...lineItems,
        [item.id]: {
          quantity: item.quantity,
          // variants: {
          //     [item.variants[0].variant_id]: item.variants[0].option_id
          // }
        },
      };
    });
    console.log(lineItems);
    setLineItems(lineItems);
  }, []);
  const orderDetails = {
    line_items: lineItems,
    customer: {
      firstname: shippingData.firstName,
      lastname: shippingData.lastName,
      email: shippingData.email,
    },
    shipping: {
      name: "International",
      street: shippingData.address1,
      town_city: shippingData.city,
      county_state: shippingData.shippingSubdivision,
      postal_zip_code: shippingData.zip,
      country: shippingData.shippingCountry,
    },
    fulfillment: { shipping_method: shippingData.shippingOption },
  };
  console.log(orderDetails);
  const stripePromise = loadStripe(
    "pk_test_51KdtgJSBEqekrGe72Ju6r5R8AvivBLjkPWifkWGjo3ZN9SlsHhYoD6Ak5m1AWCQKIDX5dRHYu62VOUYBshCohAVr00VFhZDnKn"
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use a checkout token ID that was generated earlier, and any order details that may have been collected.
      const order = await commerce.checkout.capture(checkoutToken, {
        ...orderDetails,
        // Include test gateway action and card details.
        payment: {
          gateway: "test_gateway",
          card: {
            number: "4242 4242 4242 4242",
            expiry_month: "01",
            expiry_year: "2023",
            cvc: "123",
            postal_zip_code: "94103",
          },
        },
      });

      // If we get here, we have captured the order
      return;
    } catch (response) {
      // There was an issue with capturing the order with Commerce.js
      console.log(response);
      alert(response.message);
      return;
    } finally {
      nextStep();
      //refreshCart();
    }
  };

  return (
    <div>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
}

export default PaymentForm;
