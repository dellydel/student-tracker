import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { DialogTitle } from "@mui/material";

const SuccessPopup = () => {
  const [open, setOpen] = React.useState(false);
  const [isYes, setIsYes] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleYesClick = () => {
    setIsYes(true); // Set isYes to true when "Yes" is clicked
    setOpen(false); // Close the dialog
  };
  return (
    <>
      {!isYes && (
        <div>
          <Button variant="contained" onClick={handleClickOpen}>
            Submit
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>
              Comfirm
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                “Are you sure you want to submit”.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleYesClick} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
      <Snackbar
        open={isYes} // Show Snackbar when isYes is true
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top", // Align to top
          horizontal: "right", // Align to right
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your registration has been successfully submitted.
        </Alert>
      </Snackbar>
    </>
  );
};
export default SuccessPopup;
