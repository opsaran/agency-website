import { Container, Stack, Box, Typography } from "@mui/material";
import { CTALinkBig } from "../Items/ctaButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export function FourthSection() {
  return (
    <section>
      <Container
        sx={{ pb: { xs: "0rem", md: "2rem" }, pt: { xs: "0rem", md: "2rem" } }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems="center"
        >
          <Stack
            direction="column"
            spacing={2}
            flex={4}
            textAlign={{ xs: "center", sm: "inherit" }}
            alignItems={{ xs: "center", md: "inherit" }}
          >
            <Typography variant="h3" sx={{ lineHeight: "1.2" }}>
              Fast, Blazing Fast!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Wordpress is old, slow and requires a lot of maintainance. We use
              new age Technologies like NextJs and Webflow to build super fast
              websites. This is essential in capturing massive amounts of leads
              and gives your website visitors a great search experience to keep
              them coming back.
            </Typography>
            <CTALinkBig href="/contact">
              Get Started <ArrowForwardIcon />
            </CTALinkBig>
          </Stack>
          <Box flex={2}>
            <Image
              src="/fourth_section.webp"
              width={648}
              height={663}
              alt="Person analysing his growth"
            />
          </Box>
        </Stack>
      </Container>
    </section>
  );
}
