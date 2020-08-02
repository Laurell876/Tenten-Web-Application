import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import registerScreenImage from "../../images/register-screen-image.jpg";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "../../components/history";
import { useMutation } from "@apollo/react-hooks";
import { SIGN_UP } from "../../graphql/mutations";
import auth from "../../auth.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import AlertDropdown from "../../components/alert_dropdown";


function SignupScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);
  const [openAlert, setOpenAlert] = useState(false);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

  const signupUser = async () => {
    try {
      await signUp({
        variables: {
          data: {
            firstName: firstName,
            lastName: lastName,
            email: emailAddress,
            password: password,
            tokenVersion: 0
          },
        },
      });

      auth.login(()=>{
        history.push("/home")
      })
    } catch (e) {
      let indexWhereMessageStarts = e.message.indexOf(":") + 1;
      let userFriendErrorMessage = e.message.substring(indexWhereMessageStarts, e.message.length)
      setSignUpErrorMessage(userFriendErrorMessage);
      setOpenAlert(true)
    }
  }

  const showAlert = () => {
    return <AlertDropdown errorMessage={signUpErrorMessage} severity="error" openAlert={openAlert} closeAlert={() => {
      setOpenAlert(false);
    }} />
  }

  return (
    <Grid container id="max-width-container">
      <Grid item lg={6} id="auth_image_section">
        <img
          src={registerScreenImage}
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
            Create an Account
          </Typography>
        </div>

        <div id="auth_fields">
          <TextField id="standard-basic" label="First Name" onChange={(e) => {
            setFirstName(e.target.value);
          }} />

          <TextField id="standard-basic" label="Last Name" onChange={(e) => {
            setLastName(e.target.value);
          }} />

          <TextField id="standard-basic" label="Email Address" onChange={(e) => {
            setEmailAddress(e.target.value);
          }} />

          <TextField id="standard-basic" label="Password" onChange={(e) => {
            setPassword(e.target.value);
          }} />
        </div>

        <Button variant="contained" id="auth_screen_button" onClick={
          () => signupUser()
        }>
          {loading ? <CircularProgress color="secondary" size={30} /> : "Sign Up"}
        </Button>
        {showAlert()}

        <div id="auth_screen_redirect_links">
          <Typography variant="subtitle1" id="auth_screen_redirect">
            Already have an account?
          </Typography>
          <Typography variant="subtitle1" id="auth_screen_redirect_link" onClick={() => {
            history.push("/");
          }}>
            Sign in
            </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignupScreen;
