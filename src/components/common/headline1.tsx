import { Typography, TypographyProps } from "@mui/material";
// export const HeadlineHero = styled(Typography)(({theme})=>({

// }))

export default function Headline1(props: TypographyProps) {
  const { children, ...otherProps } = props;
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2.4rem", md: "2.8rem" },
        fontWeight: "900",
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
}
