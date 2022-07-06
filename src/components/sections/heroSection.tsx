import { Stack, Typography } from "@mui/material";

import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CTALinkBig } from "../Items/ctaButton";
import CustomHeroGraphic from "../common/customHeroGraphic";
import HeadlineHero from "../common/headlinehero";

export default function HeroSection() {
  return (
    <CustomHeroGraphic>
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
        spacing={{ xs: 3, md: 2.5 }}
      >
        <Typography variant="h6" sx={{ color: "text.secondary", mb: "-1rem" }}>
          Take your Business to newer heights!
        </Typography>
        <HeadlineHero>
          Websites Built with Cutting Edge Technologies and SEO
        </HeadlineHero>
        <Typography
          variant="h5"
          sx={{ fontWeight: "300", color: "text.secondary" }}
          gutterBottom
        >
          Speed is the King! We build fastest websites with innovative designs
          and bulletproof security.
        </Typography>

        <CTALinkBig href="/contact">
          Get Started <ArrowForwardIcon />
        </CTALinkBig>
      </Stack>
    </CustomHeroGraphic>
  );
}
