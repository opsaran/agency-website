import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Image from "next/image";

interface DialogProps {
  id: string;
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}
export default function ImageDialog(props: DialogProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { children, imageSrc, imageAlt, ...otherProps } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Image
        src={imageSrc}
        width={1200}
        height={900}
        quality={100}
        alt={imageAlt}
        style={{ width: "100%", height: "auto" }}
        onClick={() => {
          if (!smallScreen) {
            setOpen(true);
          }
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        maxWidth="lg"
        {...otherProps}
      >
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: "#000",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Image
          src={imageSrc}
          width={1200}
          height={900}
          quality={100}
          alt={imageAlt}
          style={{ width: "100%", height: "auto", cursor: "zoom-out" }}
          onClick={() => setOpen(false)}
        />
      </Dialog>
    </>
  );
}
