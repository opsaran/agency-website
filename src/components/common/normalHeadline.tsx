import { Typography, TypographyProps } from "@mui/material";

export default function NormalHeadline(props: TypographyProps) {
  const { children, ...otherProps } = props;

  return (
    <Typography
      className="hero-headline-anim text-anim"
      variant="h2"
      sx={{
        fontSize: { xs: "2.5rem", md: "3rem" },
        fontWeight: "900",
        lineHeight: { xs: "3rem", md: "inherit" },
        textTransform: "uppercase",
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
}
