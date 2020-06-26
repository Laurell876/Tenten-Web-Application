import React from "react";
import Grid from "@material-ui/core/Grid";

import loginScreenImage from "../../images/login-screen-image.jpg";
import registerScreenImage from "../../images/register-screen-image.jpg";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function SignupScreen() {
  return (
    <Grid container id="max-width-container">
      <Grid item lg={6} id="auth_image_section">
        <img
          src={registerScreenImage}
          alt="Auth Screen Image"
          id="auth_screen_image"
        />
      </Grid>
      <Grid item xs={12} lg={6} id="auth_form_section">
        <div id="auth_title_and_subtitle">
          <Typography variant="h3" id="auth_screen_title">
            Tenten
          </Typography>
          <Typography variant="subtitle1" id="auth_screen_subtitle">
            Create an Account
          </Typography>
        </div>

        <div id="auth_fields">
          <TextField id="standard-basic" label="First Name" />
          <TextField id="standard-basic" label="Last Name" />
          <TextField id="standard-basic" label="Email Address" />
          <TextField id="standard-basic" label="Password" />
        </div>

        <Button variant="contained" id="auth_screen_button">
          Sign up
        </Button>

        <div id="auth_screen_redirect_links">
          <Typography variant="subtitle1" id="auth_screen_redirect">
            Already have an account?
          </Typography>
          <Link to="/">
            <Typography variant="subtitle1" id="auth_screen_redirect_link">
              Sign in
            </Typography>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignupScreen;
