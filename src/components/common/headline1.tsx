import { Typography, TypographyProps } from "@mui/material";
import Banner from "../Items/textanimate";

interface HeadlineProps extends TypographyProps {
  animate?: boolean;
}
export default function Headline1(props: HeadlineProps) {
  const { children, animate, ...otherProps } = props;
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2.4rem", md: "2.8rem" },
        fontWeight: "900",
      }}
      {...otherProps}
    >
      {animate ? <Banner>{children}</Banner> : children}
    </Typography>
  );
}
