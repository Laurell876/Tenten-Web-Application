import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import {useQuery} from "@apollo/react-hooks";

import {usersQuery} from "./graphql/users";

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#337CA0",
    }
  },
});


function App() {
  const {data, loading} = useQuery(usersQuery);

  if(loading) {
    return <div>Loading...</div>
  }
  console.log("data ", data)


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
