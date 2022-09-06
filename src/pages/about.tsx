import { Box, Container, Grid, Stack, Typography } from "@mui/material";
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
          <Grid
            item
            xs={12}
            md={6}
            display="block"
            position="relative"
            ref={rightRef1}
            className="from-right"
          >
            <Image
              src="/iconsbanner.webp"
              width={500}
              height={330}
              quality={100}
              layout="responsive"
              alt="Our tech stack"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }}
            ref={leftRef1}
            className="from-left"
          >
            <Stack
              textAlign={{ xs: "center", md: "left" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              spacing={2}
            >
              <div>
                <Typography variant="h4" gutterBottom>
                  The problem we solve
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  It is hard for businesses to find an agency which is dedicated
                  to serve their full stack needs. Businesses are hesitant to
                  contact big agencies to build websites or improve existing one
                  due to high costs and lacklustre support.
                </Typography>
              </div>
              <div>
                <Typography variant="h4" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To build best in class websites and grow with your users. We
                  help you realise your true business potential while serving
                  all your tech needs.
                </Typography>
              </div>
              <CTALinkSmall href="/contact">
                Get Started <ArrowForwardIcon />
              </CTALinkSmall>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          position: "relative",
          width: "100%",
          background: `radial-gradient(ellipse at 100% 50%,#e94eee 5%,
    #7000ff 25%,
    black 50%)`,
        }}
      >
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            sx={{ pt: "5rem", pb: "5rem", mt: { xs: "0rem", md: "7rem" } }}
          >
            <Grid item xs={12} sm={5} md={3} mb={{ xs: "3rem", md: "0rem" }}>
              <Box
                sx={{ padding: "2rem", width: "100%" }}
                bgcolor="text.secondary"
                position="relative"
              >
                <Image
                  src="/founder.jpg"
                  width={225}
                  height={258}
                  quality={100}
                  layout="responsive"
                  alt="Founder"
                />
                <Typography
                  variant="body1"
                  position={"absolute"}
                  sx={{ width: "100%", left: 0 }}
                  color="primary.main"
                  textAlign="center"
                >
                  OP Saran
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              md={7}
              textAlign={{ xs: "center", md: "inherit" }}
            >
              <Typography variant="h4">Meet Our Founder</Typography>
              <Typography variant="body1" color="text.primary">
                Self taught coder with a passion to change how modern websites
                are built and managed. OP had to learn WordPress for his first
                freelance client and quicky realized the mess it was to manage;
                dozens of plugins, slow websites and overall bad SEO. Thus, he
                chose a hard path to custom code websites using NextJs(Server
                Side Generation) and this is why he decided to build BoomLabs.
                With BoomLabs, OP is committed to serve SAAS, ECOMMERCE and any
                other business using not just NextJs but Webflow and WordPress
                as well.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <TestimonialSection />
      <FifthSection sx={{ pt: { xs: "4rem", md: "8rem" }, pb: "7rem" }} />
    </MainLayout>
  );
}
