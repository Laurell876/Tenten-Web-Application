import React, {useState, useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { setAccessToken } from "./accessToken";

import { useQuery, useLazyQuery, useMutation } from "@apollo/react-hooks";
import {ME} from "./graphql/queries";
import LoadingScreen from "./screens/loading_screen";
import {URI, SUBURI} from "./constants";


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#337CA0",
    },
    secondary: {
      main:"#ffffff"
    }
  },
});


function App() {

  const [loading, setLoading] = useState(true);

  // this runs once when the component mounts ie when the page is loaded/reloaded
  // before an app renders show loading, while its displaying that try to refresh the token, after its done that set loading to false
  // after this load the entire application
  useEffect(()=>{
    fetch(`${URI}refresh_token`, {
      method:"POST",
      credentials: "include",
    })
    .then(async x => {
      const res = await x.json();
      console.log(res);
      
      console.log("access token to replace expired token " + res.accessToken);
      if(res.accessToken) setAccessToken(res.accessToken) // token is refreshed and replaced
      setLoading(false);
    }
    )
  
  }, [])

  if(loading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
