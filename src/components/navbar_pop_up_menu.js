import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import history from "./history";
import { useMutation } from "@apollo/react-hooks";
import {LOGOUT} from "../graphql/mutations";
import {setAccessToken} from "../accessToken";


export default function SimpleMenu({ Component }) {
  const [logout, { data, loading, error }] = useMutation(LOGOUT, {
    errorPolicy: "all",
    fetchPolicy: "no-cache"
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button id="simple_menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button> */}
      <Component id="simple_menu" ariaControls="simple-menu" ariaHasPopup="true" onClickFunction={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          handleClose();
          history.push("/user-profile")
        }
        }>Profile</MenuItem>
        <MenuItem onClick={() => {
          logout();
          handleClose();
          history.push("/")
          setAccessToken("")
        }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}