import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#337CA0",
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
