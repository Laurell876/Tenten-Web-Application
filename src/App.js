import React, {useState, useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { setAccessToken } from "./accessToken";

import { useQuery, useLazyQuery, useMutation } from "@apollo/react-hooks";
import {ME} from "./graphql/queries";
import LoadingScreen from "./screens/loading_screen";


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
  // const [getMe, meObject] = useLazyQuery(ME, {
  //   fetchPolicy:"network-only"
  // })

  const [loading, setLoading] = useState(true);

  // this runs once when the component mounts ie when the page is loaded/reloaded
  // before an app renders show loading, while its displaying that try to refresh the token, after its done that set loading to false
  // after this load the entire application
  useEffect(()=>{
    fetch('http://localhost:4000/refresh_token', {
      method:"POST",
      credentials: "include",
    })
    .then(async x => {
      const {accessToken} = await x.json();
      setAccessToken(accessToken) // token is refreshed and replaced
      setLoading(false);
    }
    )
    // .then(()=>{
    //   getMe();
    // });
  
  }, [])

  if(loading) {
    return <LoadingScreen />
  }
  

  // if(meObject.error){
  //   console.log(meObject.error)
  // }

  // if(!meObject.loading && !meObject.error && meObject.data && meObject.data.data) {
  //   console.log(meObject.data.data.me);
  // }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
