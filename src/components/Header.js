import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CakeIcon from "@material-ui/icons/Cake";

import { useNavigate } from "react-router-dom";

import Bottom from "./Bottom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <CakeIcon></CakeIcon>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Birthday Bash
            </Typography>

            <Button
              color="inherit"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/sign");
              }}
            >
              Sign Up
            </Button>
           
          </Toolbar>
        </AppBar>
      </div>
      <Bottom />
    </div>
  );
}
