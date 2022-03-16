import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@mui/material";

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      {/* <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      /> */}
      <Controller
        control={control}
        name={label}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <TextField
            required
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            label={name}
            value={value}
            inputRef={ref}
          />
        )}
      />
    </Grid>
  );
}

export default FormInput;
