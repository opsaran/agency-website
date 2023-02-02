import React from "react";
import { styled, Stack } from "@mui/material";

export const StyledGradientSection = styled("section")(({ theme }) => ({
  // background: (theme as unknown as any).gradient.main,
  position: "relative",
  overflowX: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "123px",
    height: "123px",
    left: "20%",
    top: "138px",
    filter: "blur(90px)",
    backgroundColor: "#e94eee",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "123px",
    height: "123px",
    left: "70%",
    top: "23rem",
    filter: "blur(90px)",
    backgroundColor: "#7000ff",
  },
}));
const CustomHeroGraphic: React.FunctionComponent<any> = (
  props: { children: React.ReactNode } & any
) => {
  const { children, ...otherProps } = props;
  return (
    <StyledGradientSection>
      <Stack position={"relative"}>
        <div style={{ zIndex: 2, margin: "0px auto" }} {...otherProps}>
          {children}
        </div>
      </Stack>
    </StyledGradientSection>
  );
};

export default CustomHeroGraphic;
