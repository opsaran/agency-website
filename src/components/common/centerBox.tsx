import { BoxProps, useTheme } from "@mui/material";
import * as React from "react";
// type
interface CenterBoxProps extends React.CSSProperties {
  children: React.ReactNode;
  height?: string | number;
}

const CenterBox: React.FunctionComponent<CenterBoxProps> = (props) => {
  const { children, height = "100vh", ...otherProps } = props;
  const {
    gradient: { main },
  } = useTheme() as any;
  return (
    <div
      style={{
        background: main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height,
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default CenterBox;
