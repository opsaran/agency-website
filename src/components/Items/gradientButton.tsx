import Link, { LinkProps } from "../../utils/link";
import styled from "@emotion/styled";
import { forwardRef } from "react";

export const GradLink = styled(Link)({
  color: "white",
  background: `linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b)`,
  borderRadius: "50px",
  width: "max-content",
  fontSize: "1rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textDecoration: "none",
  textAlign: "center",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&>span": {
    padding: "14px 20px",
    margin: "3px",
    background: "#000",
    borderRadius: "50px",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",

    "&>svg": {
      marginLeft: "0.3rem",
    },
  },
});
export const GradientButtonAnim = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { children, ...otherprops } = props;
    const { className, ...others } = otherprops;

    return (
      <GradLink
        className={`gradient-button ${className}`}
        {...others}
        ref={ref}
      >
        <span>{children}</span>
      </GradLink>
    );
  }
);

GradientButtonAnim.displayName = "GradientButtonAnim";

export const GradientButton = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { children, ...otherprops } = props;
    const { className, ...others } = otherprops;

    return (
      <GradLink
        className={`gradient-button ${className}`}
        {...others}
        ref={ref}
      >
        <span>{children}</span>
      </GradLink>
    );
  }
);

GradientButton.displayName = "GradientButton";
