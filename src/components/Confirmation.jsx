import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Confirmation() {
  return (
    <motion.div
      initial={{
        x:'100vw'
      }} 
      animate={{
        x:0
      }}
      className="mt-20"

    >
      <div className="flex flex-col items-center">
        <CheckCircleOutlineIcon
          className="text-green-400"
          sx={{ fontSize: "10rem" }}
        />
        <span className="text-green-400 ">Thank You For Purchasing.</span>
        <Button component={Link} to='/' variant="contained" sx={{mt:3}} >Back to Home</Button>
      </div>
    </motion.div>
  );
}

export default Confirmation;
