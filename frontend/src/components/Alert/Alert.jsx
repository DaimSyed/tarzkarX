import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Alertpop = ({ message, open, type = "error" }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      autoHideDuration={2000}
      open={open}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Alertpop;
