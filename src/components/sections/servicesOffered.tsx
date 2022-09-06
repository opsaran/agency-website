import { Container, Typography, Avatar, Grid } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import GoogleIcon from "@mui/icons-material/Google";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { styled } from "@mui/material";
import { CTAButtonBig, CTALinkSmall } from "../Items/ctaButton";
import Headline1 from "../common/headline1";
import { useEffect, useRef } from "react";
import Observers from "../../utils/observers";

const StyledCard = styled("div")(({ theme }) => ({
  background: (theme as unknown as any).cardGradient,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",

  borderRadius: "7px",
  "&:hover": {
    boxShadow: `5px 5px 25px -5px #7000ff,-5px -5px 25px -5px #e94eee`,
  },
}));
export default function ServicesOffered() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  useEffect(() => {
    Observers(card1Ref.current);
    Observers(card2Ref.current);
    Observers(card3Ref.current);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        background: `radial-gradient(ellipse at 100% 50%,#e94eee 5%,
    #7000ff 25%,
    black 50%)`,
      }}
    >
      <Container
        sx={{
          pt: "4rem",
          pb: "6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Headline1 textAlign={"center"} gutterBottom>
          Services We Offer
        </Headline1>
        <Grid container spacing={6} alignContent="stretch" mt="0rem">
          <Grid item xs={12} sm={6} md={4} alignItems="center">
            <StyledCard ref={card1Ref} className="grow-out">
              <Avatar sx={{ width: 56, height: 56, bgcolor: "primary.main" }}>
                <DevicesIcon fontSize="large" sx={{ color: "#e94eee" }} />
              </Avatar>

              <Typography variant="h6" sx={{ mb: "1rem" }} component="p">
                Web Development and Design
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign={"center"}
                sx={{ color: "text.secondary" }}
              >
                Put yourself online or your online store. We build highly
                optimized websites using cutting edge technologies and
                refreshing designs. We can also fix your messy website and give
                it a complete makeover.
              </Typography>

              <CTALinkSmall href="/contact">Contact Us</CTALinkSmall>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard ref={card2Ref} className="grow-out">
              <Avatar sx={{ width: 56, height: 56, bgcolor: "primary.main" }}>
                <GoogleIcon fontSize="large" sx={{ color: "#e94eee" }} />
              </Avatar>

              <Typography variant="h6" sx={{ mb: "1rem" }} component="p">
                Search Engine Optimization
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign={"center"}
                sx={{ color: "text.secondary" }}
              >
                SEO summarizes all activities that assist your website in being
                able to rank high in search results on Google. Our effective SEO
                strategy helps your website catapult to the top of search engine
                results to gain organic traffic.
              </Typography>

              <CTALinkSmall href="/contact">Contact Us</CTALinkSmall>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard ref={card3Ref} className="grow-out">
              <Avatar sx={{ width: 56, height: 56, bgcolor: "primary.main" }}>
                <ArticleIcon fontSize="large" sx={{ color: "#e94eee" }} />
              </Avatar>

              <Typography variant="h6" sx={{ mb: "1rem" }} component="p">
                Copywriting
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign={"center"}
                sx={{ color: "text.secondary" }}
              >
                Having a copy that engages potential audience is necessary. We
                write copy that triggers emotions and compel your audience to
                take actions. All this comes with zero BS support in your choice
                of chatting platform.
              </Typography>

              <CTALinkSmall href="/contact">Contact Us</CTALinkSmall>
            </StyledCard>
          </Grid>
        </Grid>
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
      </Container>
    </div>
  );
}
