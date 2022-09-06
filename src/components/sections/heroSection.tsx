import { Stack, Typography } from "@mui/material";

import { useEffect, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CTALinkBig } from "../Items/ctaButton";
import { StyledGradientSection } from "../common/customHeroGraphic";
import HeadlineHero from "../common/headlinehero";
import Observers from "../../utils/observers";
export default function HeroSection() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    Observers(buttonRef.current);
  }, []);

  return (
    <StyledGradientSection>
      <Stack
        sx={{
          pl: { xs: "1rem", md: "inherit" },
          pr: { xs: "1rem", md: "inherit" },
          pt: { xs: "4rem", md: "inherit" },
        }}
        width="100%"
        height={"100%"}
        alignItems="center"
        justifyContent="center"
        color="text.primary"
        textAlign={"center"}
        spacing={{ xs: 3, md: 3 }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "text.secondary", mb: "-1rem" }}
        >
          Take your Business to newer heights!
        </Typography>
        <HeadlineHero>
          Websites Built with Cutting Edge Technologies and SEO
        </HeadlineHero>
        <Typography
          variant="h5"
          component="h3"
          sx={{ fontWeight: "300", color: "text.secondary" }}
          gutterBottom
        >
          Speed is the King! We build fastest websites with innovative designs
          and bulletproof security.
        </Typography>

        <CTALinkBig href="/contact" className="fade-in" ref={buttonRef}>
          Get Started <ArrowForwardIcon />
        </CTALinkBig>
      </Stack>
    </StyledGradientSection>
  );
}
