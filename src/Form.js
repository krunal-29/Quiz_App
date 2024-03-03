import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button, Typography } from "@mui/material";

export default function HelperTextMisaligned(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleClick = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    localStorage.setItem("Name", name);
    localStorage.setItem("E-mail", email);
    props.handleButton();
  };

  return (
    <div style={{}}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{
          height: "92.2vh",
          padding: "2rem",
          backgroundColor: props.pagebg,
          color: props.textclr,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            User Information
          </Typography>
          <TextField
            error={nameError}
            helperText={nameError ? "Please enter your name" : ""}
            id="name"
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            InputLabelProps={{
              style: { color: props.textclr },
            }}
            inputProps={{
              style: { color: props.textclr,backgroundColor: props.mode=="Dark"? "black":"white",cursor:"pointer"}, // Change the text color here
            }}
          />
          <TextField

            error={emailError}
            helperText={emailError ? "Please enter your e-mail" : ""}
            type="email"
            id="email"
            label="E-mail"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            InputLabelProps={{
              style: { color: props.textclr },
            }}
           inputProps={{
              style: { color: props.textclr,backgroundColor: props.mode=="Dark"? "black":"white",cursor:"pointer"}, // Change the text color here
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            style={{ marginTop: "5px" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
