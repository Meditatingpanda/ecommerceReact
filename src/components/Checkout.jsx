import { Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddressForm from "./AddressForm";
import Confirmation from "./Confirmation";
import PaymentForm from "./PaymentForm";
import { commerce } from "../lib/commerce";
const steps = ["Shipping Address", "Payment details"];
const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const navigate = useNavigate();
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) navigate("/");
        }
      };

      generateToken();
    }
  }, [cart]);
  const test = (data) => {
    setShippingData(data);
    console.log(data);
    nextStep();
  };
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} test={test} />
    ) : (
      <PaymentForm checkoutToken={checkoutToken} backStep={backStep} />
    );
  return (
    <div className="text-5xl text-center">
      <main>
        <Paper
          sx={{
            width: "45%",
            mx: "auto",
            minHeight: "10rem",
            marginTop: "5rem",
            p: 5,
          }}
        >
          <Typography
            color="GrayText"
            sx={{ pt: 1 }}
            variant="h4"
            align="center"
          >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ p: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;
