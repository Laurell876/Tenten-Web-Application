import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function TransitionAlerts({openAlert, closeAlert, severity, errorMessage}) {
    console.log(openAlert)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={openAlert}>
        <Alert
        severity={severity}
          action={
            <IconButton
              id="dropdown_alert_close_button"
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                  closeAlert();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {errorMessage}
        </Alert>
      </Collapse>
    </div>
  );
}