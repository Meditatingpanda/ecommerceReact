import { Button, duration, TextField } from "@mui/material";
import React, { useState } from "react";
import Lottie from "react-lottie-player";
import tRex from "../data/tRex.json";
import GoogleButton from "react-google-button";
import SignUp from "../components/Login/SignUp";
import SignIn from "../components/Login/SignIn";
import {motion} from 'framer-motion'
function LoginPage() {
  const [isSign, setIsSign] = useState(true);
  return (
    <div className="min-h-screen flex overflow-hidden relative">
      <div className="flex-1  bg-gray-200  text-red-500 text-3xl p-3 ">
        SPORTIFY
      </div>

      <motion.div 
      initial={{
          x:'100vw'
      }}
      animate={{
          x:0
        
      }}
      className="h-[25rem] z-50 m-auto w-[25rem] backdrop-blur-sm border-2 border-r-white shadow-md rounded absolute top-0 bottom-0 right-0 left-0 ">
        {isSign ? <SignIn setIsSign={setIsSign} /> : <SignUp setIsSign={setIsSign}/>}
      </motion.div>
      <div className="flex-1 bg-[#84CEFE]">
        <Lottie
          loop
          animationData={tRex}
          play
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default LoginPage;
