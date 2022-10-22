import React, { useState } from "react";
import CakeIcon from "@material-ui/icons/Cake";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

const Login = () => {
  // my code
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };


  // end
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <CakeIcon />
          </Avatar>
          <h2>LogIn</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter email"
          type="email"
          fullWidth
          required
          onChange={(e) => validateEmail(e)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          name="pass"
          fullWidth
          required
        />
        <span>{emailError}</span>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          
          onClick={() => {
            navigate("/title");
          }}
        >
          Sign in
        </Button>

        <Typography>
          {" "}
          Do you have an account ?<Link href="/sign">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
