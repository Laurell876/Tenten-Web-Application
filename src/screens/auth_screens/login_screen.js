import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import loginScreenImage from "../../images/login-screen-image.jpg";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "../../components/history";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../../graphql/mutations";
import auth from "../../auth.js";

import { setAccessToken } from "../../accessToken";
import AlertDropdown from "../../components/alert_dropdown";
import CircularProgress from '@material-ui/core/CircularProgress';


function LoginScreen() {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [openAlert, setOpenAlert] = useState(false);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

  const showAlert = () => {
    return <AlertDropdown errorMessage={signUpErrorMessage} severity="error" openAlert={openAlert} closeAlert={() => {
      setOpenAlert(false);
    }} />
  }

  const loginUser = async () => {
    try {
      const response = await login({
        variables: {
          data: {
            email: emailAddress,
            password: password
          }
        },
      });
      if (response && response.data) {
        setAccessToken(response.data.loginV2.accessToken)
      }

      auth.login(() => {
        history.push("/home")
      })
    } catch (e) {
      let indexWhereMessageStarts = e.message.indexOf(":") + 1;
      let userFriendlyErrorMessage = e.message.substring(indexWhereMessageStarts, e.message.length)
      setSignUpErrorMessage(userFriendlyErrorMessage);
      setOpenAlert(true)
    }

  }


  return (
    <Grid container id="max-width-container">
      <Grid item lg={6} id="auth_image_section">
        <img
          src={loginScreenImage}
          alt="Auth Screen"
          id="auth_screen_image"
        />
      </Grid>
      <Grid item xs={12} lg={6} id="auth_form_section">

        <div id="auth_title_and_subtitle">
          <Typography variant="h3" id="auth_screen_title">
            Tenten
          </Typography>
          <Typography variant="subtitle1" id="auth_screen_subtitle">
            Welcome Back!
          </Typography>
        </div>

        <div id="auth_fields">
          <TextField id="standard-basic" label="Email Address" onChange={(e) => {
            setEmailAddress(e.target.value);
          }} />
          <TextField id="standard-basic" type="password" label="Password" onChange={(e) => {
            setPassword(e.target.value);
          }} />
        </div>

        <Button variant="contained" id="auth_screen_button" onClick={loginUser}>
          {loading ? <CircularProgress color="secondary" size={30} /> : "Sign In"}
        </Button>

        {showAlert()}


        <div id="auth_screen_redirect_links">
          <Typography variant="subtitle1" id="auth_screen_redirect">
            New to Tenten?
          </Typography>
          <Typography variant="subtitle1" id="auth_screen_redirect_link" onClick={() => {
            history.push("/signup")
          }}>
            Create An Account.
            </Typography>
        </div>

      </Grid>
    </Grid>
  );
}

export default LoginScreen;
