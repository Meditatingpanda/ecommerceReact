import React, { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import { useUserAuth } from "../../context/userAuthContext";

function SignUp({ setIsSign }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setIsSign(true);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex p-4 h-full flex-col items-center justify-around">
      <span className="text-4xl">Sign Up</span>
      {error && <Alert severity="error">{error}</Alert>}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col h-1/2 justify-around"
      >
        <TextField
          type="email"
          fullWidth
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          label="User Name/Email"
        />
        <TextField
          type="password"
          fullWidth
          variant="outlined"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth variant="contained" type="Submit">
          Create An Account
        </Button>
        <div>
          Already Have An Account ?{" "}
          <Button onClick={() => setIsSign(true)}>Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
