import { Typography, TypographyProps } from "@mui/material";
// export const HeadlineHero = styled(Typography)(({theme})=>({

// }))

export default function HeadlineHero(props: TypographyProps) {
  const { children, ...otherProps } = props;
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2.5rem", md: "3rem" },
        fontWeight: "900",
        lineHeight: { xs: "3rem", md: "inherit" },
        textTransform: "uppercase",
        background: `linear-gradient(-45deg,#ffffff 40%,#0aff05 50%,#ffffff 60%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
}
