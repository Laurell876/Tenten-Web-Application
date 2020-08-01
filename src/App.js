import React, {useState, useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { setAccessToken } from "./accessToken";

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#337CA0",
    }
  },
});


function App() {
  const [loading, setLoading] = useState(true);

  // this runs once when the component mounts ie when the page is loaded/reloaded
  // before an app renders show loading, while its displaying that try to refresh the token, after its done that set loading to false
  // after this load the entire application
  useEffect(()=>{
    fetch('http://localhost:4000/refresh_token', {
      method:"POST",
      credentials: "include"
    })
    .then(async x => {
      const {accessToken} = await x.json();
      setAccessToken(accessToken) // token is refreshed and replaced
      setLoading(false);
    }
    );
  }, [])

  if(loading) {
    return <div>loading...</div>
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
