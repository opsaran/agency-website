import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import { StyledGradientSection } from "../components/common/customHeroGraphic";
import { CTALinkSmall } from "../components/Items/ctaButton";
import MainLayout from "../components/layout/mainLayout";
import FifthSection from "../components/sections/fifthSection";
import pages from "../constants/pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeadlineHero from "../components/common/headlinehero";
import TestimonialSection from "../components/sections/testimonialSection";
import { useEffect, useRef } from "react";
import Observers from "../utils/observers";
import { motion } from "framer-motion";

const ImageBox = styled(Box)(({ theme }) => ({
  borderTop: `1px solid rgba(255,255,255,0.5)`,

  borderLeft: `1px solid rgba(255,255,255,0.5)`,
  background: "rgba(255,255,255,0.05)",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "123px",
    height: "123px",
    right: "10%",
    bottom: "0px",
    filter: "blur(90px)",
    backgroundColor: "#e94eee",
  },
}));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export default function About() {
  const growRef = useRef(null);
  const leftRef1 = useRef(null);
  const rightRef1 = useRef(null);
  useEffect(() => {
    Observers(growRef.current);
    Observers(leftRef1.current);
    Observers(rightRef1.current);
  }, []);
  return (
    <MainLayout pageData={pages!.about}>
      <StyledGradientSection sx={{ height: "80vh" }}>
        <Stack
          sx={{
            pl: { xs: "1rem", md: "inherit" },
            pr: { xs: "1rem", md: "inherit" },
            width: "100%",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <HeadlineHero>We are focused on driving results</HeadlineHero>
          <Typography
            variant="h5"
            component="h3"
            color="text.secondary"
            sx={{ mt: "0.5rem" }}
            ref={growRef}
            className="grow-out"
          >
            Trust. Innovation. Growth
          </Typography>
        </Stack>
      </StyledGradientSection>

      <Container>
        <Grid
          container
          spacing={4}
          direction={{ md: "row-reverse" }}
          alignItems="center"
          justifyItems={"space-between"}
          position="relative"
        >
          <Grid item xs={12} md={6} display="block" position="relative">
            <Image
              src="/iconsbanner.webp"
              width={500}
              height={330}
              quality={100}
              style={{ width: "100%", height: "auto" }}
              alt="Our tech stack"
              priority
            />
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
            <Stack
              textAlign={{ xs: "center", md: "left" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              spacing={2}
            >
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
              >
                <motion.div variants={item}>
                  <Typography variant="h4" gutterBottom>
                    The problem we solve
                  </Typography>
                </motion.div>
                <motion.div variants={item}>
                  <Typography variant="body1" color="text.secondary">
                    It is hard for businesses to find an agency which is
                    dedicated to serve their full stack needs. Businesses are
                    hesitant to contact big agencies to build websites or
                    improve existing one due to high costs and lacklustre
                    support.
                  </Typography>
                </motion.div>
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
              >
                <motion.div variants={item}>
                  <Typography variant="h4" gutterBottom>
                    Our Vision
                  </Typography>
                </motion.div>
                <motion.div variants={item}>
                  <Typography variant="body1" color="text.secondary">
                    To build best in class websites and grow with your users. We
                    help you realise your true business potential while serving
                    all your tech needs.
                  </Typography>
                </motion.div>
              </motion.div>
              <CTALinkSmall href="/contact">
                Get Started <ArrowForwardIcon />
              </CTALinkSmall>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{ pt: "5rem", pb: "5rem", mt: { xs: "0rem", md: "7rem" } }}
        >
          <Grid item xs={12} sm={5} md={3} mb={{ xs: "3rem", md: "0rem" }}>
            <ImageBox
              sx={{ padding: "2rem", width: "100%" }}
              position="relative"
            >
              <Image
                src="/founder.jpg"
                width={225}
                height={258}
                quality={100}
                style={{ width: "100%", height: "auto" }}
                alt="Founder"
              />
              <Typography
                variant="body1"
                position={"absolute"}
                sx={{ width: "100%", left: 0 }}
                color="text.secondary"
                textAlign="center"
              >
                OP Saran
              </Typography>
            </ImageBox>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            textAlign={{ xs: "center", md: "inherit" }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              <motion.div variants={item}>
                <Typography variant="h4" mb="1.5rem">
                  Meet Our Founder
                </Typography>
              </motion.div>
              <motion.div variants={item}>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                  }}
                >
                  Self taught coder with a passion to change how modern websites
                  are built and managed. OP had to learn WordPress for his first
                  freelance client and quicky realized the mess it was to
                  manage; dozens of plugins, slow websites and overall bad SEO.
                  Thus, he chose a hard path to custom code websites using
                  NextJs(Server Side Generation) and this is why he decided to
                  build BoomLabs. With BoomLabs, OP is committed to serve SAAS,
                  ECOMMERCE and any other business using not just NextJs but
                  Webflow and WordPress as well.
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <TestimonialSection />
      <FifthSection sx={{ pt: { xs: "8rem", md: "8rem" }, pb: "8rem" }} />
    </MainLayout>
  );
}
