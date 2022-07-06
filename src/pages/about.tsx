import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { StyledGradientSection } from "../components/common/customHeroGraphic";
import { CTALinkSmall } from "../components/Items/ctaButton";
import MainLayout from "../components/layout/mainLayout";
import FifthSection from "../components/sections/fifthSection";
import pages from "../constants/pages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HeadlineHero from "../components/common/headlinehero";

export default function About() {
  return (
    <MainLayout pageData={pages!.about}>
      <StyledGradientSection>
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
          <Typography variant="h5" color="text.secondary" sx={{ mt: "0.5rem" }}>
            Trust. Innovation. Growth
          </Typography>
        </Stack>
      </StyledGradientSection>
      <Container>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          pt={"5rem"}
          justifyContent={{ xs: "space-around", md: "space-between" }}
          alignItems="center"
        >
          <Stack
            spacing={2}
            sx={{
              maxWidth: { xs: "100%", md: "50%" },
            }}
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
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
                help you realise your true business potential while serving all
                your tech needs.
              </Typography>
            </div>
            <CTALinkSmall href="/contact">
              Get Started <ArrowForwardIcon />
            </CTALinkSmall>
          </Stack>
          <Stack
            mt={{ xs: "-10rem", md: "0rem" }}
            pb={{ xs: "3rem", md: "0rem" }}
          >
            <Image
              src="/iconsbanner.webp"
              width={500}
              height={330}
              alt="Our tech stack"
            />
          </Stack>
        </Stack>
      </Container>
      <div
        style={{
          width: "100%",
          background: `radial-gradient(ellipse at 100% 50%,#e94eee 5%,
    #7000ff 25%,
    black 50%)`,
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "space-around", md: "space-between" }}
            alignItems="center"
            sx={{ pt: "5rem", pb: "5rem", mt: { xs: "0rem", md: "7rem" } }}
          >
            <Box
              sx={{ padding: "2rem" }}
              mb={{ xs: "3rem", md: "0rem" }}
              bgcolor="text.secondary"
            >
              <div style={{ position: "relative" }}>
                <Image
                  src="/founder.webp"
                  width={225}
                  height={258}
                  alt="Founder"
                />
                <Typography
                  variant="body1"
                  position={"absolute"}
                  sx={{ width: "100%" }}
                  color="primary.main"
                  textAlign="center"
                >
                  <div>OP Saran</div>
                </Typography>
              </div>
            </Box>
            <Stack
              spacing={3}
              sx={{ maxWidth: { xs: "100%", md: "60%" } }}
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
            </Stack>
          </Stack>
        </Container>
      </div>
      <FifthSection sx={{ pt: { xs: "0rem", md: "8rem" }, pb: "7rem" }} />
    </MainLayout>
  );
}
