import { Stack, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarRateIcon from "@mui/icons-material/StarRate";
import { StyledGradientSection } from "../common/customHeroGraphic";
import { HeadlineHero1 } from "../common/headlinehero";

import { GradientButtonAnim } from "../Items/gradientButton";
import Image from "next/image";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <StyledGradientSection>
      <Stack
        sx={{
          padding: {
            xs: "106px 1rem 50px",
            sm: "126px 2rem 0",
            md: "186px 0 30px",
          },
          margin: "0 auto",
          mb: { xs: "4rem", md: "7rem" },
        }}
        width="100%"
        height={"100%"}
        alignItems="center"
        justifyContent="center"
        color="text.primary"
        textAlign={"center"}
        maxWidth="lg"
      >
        <HeadlineHero1></HeadlineHero1>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "400",
            fontSize: "1.3rem",
            color: "text.secondary",
            mt: "1.5rem",
          }}
        >
          We build fastest websites with innovative designs and bulletproof
          security.
        </Typography>

        <Stack direction="row" position="relative" spacing={"1rem"} mt="2.5rem">
          <div style={{ width: "80px", position: "relative" }}>
            <Image
              src="/clutch.png"
              fill
              style={{ objectFit: "contain" }}
              priority
              alt="clutch"
            />
          </div>
          <Stack direction="column">
            <div>
              <StarRateIcon sx={{ color: "#ff3d2e" }} />
              <StarRateIcon sx={{ color: "#ff3d2e" }} />
              <StarRateIcon sx={{ color: "#ff3d2e" }} />
              <StarRateIcon sx={{ color: "#ff3d2e" }} />
              <StarRateIcon sx={{ color: "#ff3d2e" }} />
            </div>
            <Typography
              variant="body1"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              Top rated on Clutch.co
            </Typography>
          </Stack>
        </Stack>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        >
          <GradientButtonAnim href="/contact" sx={{ marginTop: "2.5rem" }}>
            Get Started <ArrowForwardIcon />
          </GradientButtonAnim>
        </motion.div>
      </Stack>
    </StyledGradientSection>
  );
}
