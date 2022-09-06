import { Container, Stack, Box, Typography } from "@mui/material";
import { CTALinkBig } from "../Items/ctaButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Headline1 from "../common/headline1";
import { useEffect, useRef } from "react";
import Observers from "../../utils/observers";

export function FourthSection() {
  const leftRef1 = useRef(null);
  const rightRef1 = useRef(null);
  useEffect(() => {
    Observers(leftRef1.current);
    Observers(rightRef1.current);
  }, []);
  return (
    <section>
      <Container
        sx={{ pb: { xs: "0rem", md: "2rem" }, pt: { xs: "3rem", md: "2rem" } }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={6}
          alignItems="center"
        >
          <Box flex={2} ref={leftRef1} className="from-left">
            <Image
              src="/fourth_section.webp"
              width={648}
              height={663}
              layout="intrinsic"
              alt="Person analysing his growth"
            />
          </Box>
          <Stack
            ref={rightRef1}
            className="from-right"
            direction="column"
            spacing={3.5}
            flex={4}
            textAlign={{ xs: "center", sm: "inherit" }}
            alignItems={{ xs: "center", md: "inherit" }}
          >
            <Headline1>Fast, Blazing Fast!</Headline1>
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
        </Stack>
      </Container>
    </section>
  );
}
