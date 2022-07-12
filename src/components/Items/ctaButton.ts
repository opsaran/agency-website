import * as React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link, { LinkProps } from "../../utils/link";
export const CTAButtonBig = styled(Button)({
  marginTop: "1.7rem",
  color: "white",
  background: "#ffffff1a",
  borderRadius: "50px",
  border: "2px solid white",
  padding: "1rem 1.8rem",
  width: "max-content",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    letterSpacing: 1.1,
  },
});

export const CTAButtonSmall = styled(Button)({
  marginTop: "1.7rem",
  color: "white",
  background: "#ffffff1a",
  borderRadius: "50px",
  border: "1px solid white",
  padding: "0.5rem 1rem",
  width: "max-content",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    letterSpacing: 1.1,
  },
});

export const CTALinkBig = styled(Link)({
  marginTop: "1.7rem",
  color: "white",
  background: "#ffffff1a",
  borderRadius: "50px",
  border: "2px solid white",
  padding: "1rem 1.8rem",
  width: "max-content",
  fontSize: "1rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    letterSpacing: 1.1,
    fontWeight: 800,
  },
});

export const CTALinkSmall = styled(Link)<LinkProps>({
  marginTop: "1.7rem",
  color: "white",
  background: "#ffffff1a",
  borderRadius: "50px",
  border: "1px solid white",
  padding: "0.5rem 1rem",
  width: "max-content",
  fontSize: "1rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    letterSpacing: 1.1,
  },
});

export const BlogCardLink = styled(Link)<LinkProps>({
  color: "black",
  background: "white",
  borderRadius: "50px",
  border: "1px solid white",
  padding: "0.5rem 1rem",
  width: "max-content",
  fontSize: "1rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});
