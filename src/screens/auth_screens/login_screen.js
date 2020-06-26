import React from "react";
import Grid from "@material-ui/core/Grid";
import loginScreenImage from "../../images/login-screen-image.jpg";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function LoginScreen() {
  return (
    <Grid container id="max-width-container">
      <Grid item lg={6} id="auth_image_section">
        <img
          src={loginScreenImage}
          alt="Auth Screen Image"
          id="auth_screen_image"
        />
      </Grid>
      <Grid item xs={12} lg={6} id="auth_form_section">
        <Typography variant="h3" id="auth_screen_title">
          Tenten
        </Typography>
        <Typography variant="subtitle1" id="auth_screen_subtitle">
          Welcome Back!
        </Typography>
        <TextField id="standard-basic" label="Email Address" />
        <TextField id="standard-basic" label="Password" />
        <Button variant="contained" id="auth_screen_button">
          Sign in
        </Button>
        <div id="auth_screen_redirect_links">
          <Typography variant="subtitle1" id="auth_screen_redirect">
            New to Tenten?
          </Typography>
          <Typography variant="subtitle1" id="auth_screen_redirect_link">
            Create An Account.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default LoginScreen;
