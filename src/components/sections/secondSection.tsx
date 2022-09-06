import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Observers from "../../utils/observers";
import Headline1 from "../common/headline1";
import { CTAButtonBig } from "../Items/ctaButton";

export default function SecondSection() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    Observers(buttonRef.current);
  }, []);

  return (
    <div>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems="center"
        >
          <Box flex={5} sx={{ ml: { sm: "-2rem" } }}>
            <Image
              src={"/second_section.webp"}
              width={900}
              height={530}
              alt="Website dashboard info"
              layout="intrinsic"
            ></Image>
          </Box>
          <Stack
            direction="column"
            spacing={2}
            flex={2}
            textAlign={{ xs: "center", md: "left" }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Headline1>Schedule a Free Call Now</Headline1>
            <Typography variant="body1" color="text.secondary">
              No BS maintainance agreements, we provide crystal clear upfront
              rate. We provide full support in your favourite chatting platform,
              unheard in the industry.
            </Typography>
            <CTAButtonBig ref={buttonRef} className="fade-in">
              <a
                href="https://calendly.com/boomlabs-agency/20-minute-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule 1 : 1 Call
              </a>
              <ArrowForwardIcon />
            </CTAButtonBig>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
