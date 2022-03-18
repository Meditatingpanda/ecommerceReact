import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/userAuthContext";
import { useNavigate } from "react-router-dom";

function SignIn({ setIsSign }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex p-2 h-full flex-col items-center justify-around">
      <span className="text-4xl">Login</span>
      {error && <Alert severity="error">{error}</Alert>}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col h-1/2 justify-around items-center"
      >
        <TextField
          type="email"
          fullWidth
          variant="outlined"
          label="User Name/Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          fullWidth
          variant="outlined"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth variant="contained" type="Submit">
          Log In
        </Button>
        <GoogleButton type="dark" onClick={handleGoogleSignIn} />
        <div>
          Don't Have an Account ?{" "}
          <Button onClick={() => setIsSign(false)}>Sign Up</Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
