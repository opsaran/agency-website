import React from "react";
import { styled, Stack } from "@mui/material";
import Image from "next/image";
export const StyledGradientSection = styled("section")(({ theme }) => ({
  background: (theme as unknown as any).gradient.main,
  height: "100vh",
}));
const CustomHeroGraphic: React.FunctionComponent<any> = (
  props: { children: React.ReactNode } & any
) => {
  const { children, ...otherProps } = props;
  return (
    <StyledGradientSection>
      <Stack width={"100%"} position={"relative"} height={"100%"}>
        <div style={{ zIndex: 2, height: "100vh" }}>{children}</div>
        <div
          className="con_right"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          <div
            className="animate"
            style={{ transform: "scale(1)", width: "100%", height: "100%" }}
          >
            <div className="ani_stf_circle">
              <Image
                src="/icons/stuffs_circle.png"
                alt="circle"
                width={103}
                height={106}
                loading="eager"
                priority={true}
              />
            </div>
            <div className="ani_stf_code">
              <Image
                src="/icons/stuffs_code.png"
                alt="code icon"
                width={107}
                height={105}
                loading="eager"
                priority={true}
              />
            </div>
            <div className="ani_stf_pie">
              <Image
                src="/icons/stuffs_pie.png"
                alt="pie chart"
                width={132}
                height={132}
                loading="eager"
                priority={true}
              />
            </div>
            <div className="ani_stf_dot">
              <Image
                src="/icons/stuffs_dot.png"
                alt="dot"
                width={110}
                height={110}
                loading="eager"
                priority={true}
              />
            </div>
            <div className="ani_pn_chart">
              <Image
                src="/icons/panel_chart.png"
                alt="panel chart"
                width={153}
                height={98}
                loading="eager"
                priority={true}
              />
            </div>
            <div className="ani_pn_code">
              <Image
                src="/icons/panel_code.png"
                alt="panel code"
                width={158}
                height={118}
                loading="eager"
                priority={true}
              />
            </div>
          </div>
        </div>
      </Stack>
    </StyledGradientSection>
  );
};

export default CustomHeroGraphic;
