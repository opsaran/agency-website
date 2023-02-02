import { Container, Typography, Avatar, Grid } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import GoogleIcon from "@mui/icons-material/Google";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { styled } from "@mui/material";
import { CTAButtonBig, CTALinkSmall } from "../Items/ctaButton";
import Headline1 from "../common/headline1";
import { useState } from "react";

import styles from "../common/glareCard.module.css";
import CalendlyDialog from "../Items/calendlyModal";

const StyledCard = styled("div")(({ theme }) => ({
  background: (theme as unknown as any).cardGradient,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1.8rem 1.3rem",

  borderRadius: "7px",

  boxShadow: `0px 0px 3px rgba(71, 33, 121, 0.051),
  0px 0px 7.2px rgba(71, 33, 121, 0.073),
  0px 0px 13.6px rgba(71, 33, 121, 0.09),
  0px 0px 24.3px rgba(71, 33, 121, 0.107),
  0px 0px 45.5px rgba(71, 33, 121, 0.129),
  0px 0px 109px rgba(71, 33, 121, 0.18)`,
}));

export default function ServicesSection() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container
        sx={{
          pt: "4rem",
          pb: "8rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Headline1 textAlign={"center"} gutterBottom animate>
          Services We Offer
        </Headline1>
        <Grid container spacing={6} alignContent="stretch" mt="0rem">
          <Grid item xs={12} sm={6} md={4} alignItems="center">
            <StyledCard>
              <div className={styles.glare_container}>
                <div className={styles.glare}></div>
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
                  refreshing designs. We can also fix your messy website and
                  give it a complete makeover.
                </Typography>

                <CTALinkSmall href="/contact">Contact Us</CTALinkSmall>
              </div>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} alignItems="center">
            <StyledCard>
              <div className={styles.glare_container}>
                <div className={styles.glare}></div>
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
                  SEO summarizes all activities that assist your website in
                  being able to rank high in search results on Google. Our
                  effective SEO strategy helps your website catapult to the top
                  of search engine results to gain organic traffic.
                </Typography>

                <CTALinkSmall href="/contact">Contact Us</CTALinkSmall>
              </div>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} alignItems="center">
            <StyledCard>
              <div className={styles.glare_container}>
                <div className={styles.glare}></div>
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
                  take actions. All this comes with zero BS support in your
                  choice of chatting platform.
                </Typography>

                <CTALinkSmall href="/contact">Contact Us</CTALinkSmall>
              </div>
            </StyledCard>
          </Grid>
        </Grid>
        <CTAButtonBig onClick={() => setOpen(true)} sx={{ mt: "2rem" }}>
          Schedule Free 1:1 Call <ArrowForwardIcon />
        </CTAButtonBig>
      </Container>
      <CalendlyDialog open={open} onClose={handleClose} id="services-section" />
    </>
  );
}
