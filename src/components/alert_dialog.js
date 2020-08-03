import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({Component,
  question, 
  title, 
  functionToRunOnConfirm,
  listingId
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirm = () => {
    functionToRunOnConfirm(listingId)
    handleClose()
    window.location.reload(false);
  }

  return (
    <div>
      <Component functionToRunOnClick={handleClickOpen} />
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {question}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" id="alert_button" onClick={confirm}>
            Confirm
          </Button>
          <Button onClick={handleClose} color="primary" id="alert_button">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}