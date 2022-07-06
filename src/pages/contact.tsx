import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { NextPage } from "next";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactForm from "../components/common/contactForm";
import { StyledGradientSection } from "../components/common/customHeroGraphic";
import MainLayout from "../components/layout/mainLayout";
import pages from "../constants/pages";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CTAButtonBig } from "../components/Items/ctaButton";
import HeadlineHero from "../components/common/headlinehero";
const Contact: NextPage = () => {
  const CheckIcon = styled(CheckCircleIcon)(({ theme }) => ({
    color: (theme as unknown as any).palette.text.secondary,
  }));
  const gradientSection = styled(Box)(({ theme }) => ({
    width: "100%",
    background: (theme as unknown as any).palette.text.secondary,
  }));
  return (
    <>
      <MainLayout pageData={pages!.contact}>
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
            <HeadlineHero>Let's do great work together</HeadlineHero>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mt: "0.5rem" }}
            >
              An amazing website awaits...
            </Typography>
          </Stack>
        </StyledGradientSection>
        <section
          style={{
            width: "100%",
          }}
        >
          <Container sx={{ mt: { xs: "-10rem", md: "0rem" } }}>
            <Stack direction="column" alignItems={"center"} textAlign="center">
              <Typography variant="h4">Drop a Message</Typography>
              <Typography variant="h6" color="text.secondary">
                Want to grow the business? Look nowhere else, we will reply
                asap. Enter your existing website for audit.
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              sx={{ pt: "5rem", pb: "5rem" }}
            >
              <ContactForm width={{ xs: "100%", md: "40%" }} />
              <Stack
                direction="column"
                sx={{
                  maxWidth: { xs: "100%", md: "45%" },
                  mt: { xs: "4rem", md: 0 },
                  pt: "1rem",
                  textAlign: { xs: "center" },
                }}
                boxShadow={`5px 5px 25px -5px #7000ff,-5px -5px 25px -5px #e94eee`}
              >
                <Typography variant="h4">Why us?</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="We use NextJs to build server side generated websites, which are super fast." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="We take care of technical SEO during the development process resulting in organic growth on the go." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Our SEO services are designed to put you on the first page of Google. From keyword research, backlink generation to content creation, we customize to suit your demands." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="We can improve your existing Wordpress site for better speed and SEO. " />
                  </ListItem>
                </List>
              </Stack>
            </Stack>
          </Container>
        </section>
        <section
          style={{
            width: "100%",
          }}
        >
          <Container>
            <Stack
              direction={"column"}
              sx={{ pt: "7rem", pb: "7rem" }}
              alignItems="center"
              textAlign={"center"}
              position="relative"
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  lineHeight: { xs: "3rem", md: "inherit" },
                  background:
                    "linear-gradient(45deg,#ff61d5 10%,#ffffff 67%,#00f0ff 76%,#1e43ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ready to speak directly with us? Schedule a free call.
              </Typography>
              <CTAButtonBig>
                <a
                  href="https://calendly.com/boomlabs-agency/20-minute-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Free 1:1 Call
                </a>{" "}
                <ArrowForwardIcon />
              </CTAButtonBig>
            </Stack>
          </Container>
        </section>
      </MainLayout>
    </>
  );
};

export default Contact;
