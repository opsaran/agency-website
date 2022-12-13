import { Container, ContainerProps, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { CTAButtonBig } from "../Items/ctaButton";
import { useEffect, useRef } from "react";
import Observers from "../../utils/observers";
export default function FifthSection(props: ContainerProps) {
  const { children, ...otherProps } = props;
  const buttonRef = useRef(null);
  useEffect(() => {
    Observers(buttonRef.current);
  }, []);
  return (
    <Container
      sx={{
        pt: { xs: "8rem", md: "12rem" },
        pb: { xs: "7rem", md: "12rem" },

        background: `radial-gradient(circle at center,#e94eee 0%,
      #7000ff 15%,
      black 30%)`,
      }}
      {...otherProps}
    >
      <Stack direction="column" alignItems="center" textAlign="center">
        <Typography variant="h5" component="p">
          LET'S GET STARTED
        </Typography>
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
          Ready to grow your business? We'd love to hear from you
        </Typography>
        <CTAButtonBig ref={buttonRef} className="grow-out">
          <a
            href="https://calendly.com/boomlabs-agency/20-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            SETUP A FREE MEETING
          </a>
          <ArrowForwardIcon />
        </CTAButtonBig>
      </Stack>
    </Container>
  );
}
