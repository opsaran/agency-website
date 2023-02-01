import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link, { LinkProps } from "../../utils/link";
export const CTAButtonBig = styled(Button)({
  color: "white",
  background: "#ffffff1a",
  borderRadius: "50px",
  border: "2px solid white",
  padding: "1rem 1.8rem",
  width: "max-content",
  fontSize: "1rem",
  textDecoration: "none",
  transition: "all 250ms ease-in",
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
  textDecoration: "none",
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
  textDecoration: "none",
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
  textDecoration: "none",
  transition: "all 200ms ease-in",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    letterSpacing: 1.1,
  },
});

export const BlogCardLink = styled(Link)<LinkProps>({
  color: "white",
  position: "relative",

  background: "linear-gradient(0deg, #341062 0%, #5f0662 100%)",
  borderRadius: "5px",
  border: "none",
  padding: "0",
  width: "130px",
  height: "40px",
  fontSize: "1rem",
  fontWeight: "500",
  display: "inline-block",

  textDecoration: "none",
  transition: "all 0.3s ease",
  boxShadow: `inset 2px 2px 2px 0px rgba(70,69,69,.5), 7px 7px 20px 0px rgba(255,255,255,.1), 4px 4px 5px 0px rgba(255,255,255,.1)`,
  "&:hover": {
    background: "transparent",
    boxShadow: "none",
    color: "#7000ff",
  },
  "&::after, &::before": {
    position: "absolute",
    content: '""',
    top: "0",
    right: "0",
    background: "#7000ff",
    transition: "all 0.3s ease",
  },
  "&::before": {
    height: "0%",
    width: "2px",
  },
  "&::after": {
    width: "0%",
    height: "2px",
  },
  "&:hover::before": {
    height: "100%",
  },
  "&:hover::after": {
    width: "100%",
  },
  "& > span": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    "&::before, &::after": {
      position: "absolute",
      content: '""',
      left: "0",
      bottom: "0",
      background: "#7000ff",
      transition: "all 0.3s ease",
    },
    "&::before": {
      width: "2px",
      height: "0%",
    },
    "&::after": {
      width: "0%",
      height: "2px",
    },
    "&:hover::before": {
      height: "100%",
    },
    "&:hover::after": {
      width: "100%",
    },
  },
});
