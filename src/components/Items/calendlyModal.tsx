import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface DialogProps {
  id: string;
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const CalendlyDialog = (props: DialogProps) => {
  const { open, onClose } = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        sx={{ verticalAlign: "center", height: "95vh" }}
        PaperProps={{ sx: { height: `calc(100vh - 64px)` } }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: "#000",
            background: "#0000",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ overflowY: "hidden" }}>
          <iframe
            src="https://calendly.com/boomlabs-agency/20-minute-discovery-call"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="yes"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CalendlyDialog;
