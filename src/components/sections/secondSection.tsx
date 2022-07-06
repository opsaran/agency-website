import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CTAButtonBig } from "../Items/ctaButton";

export default function SecondSection() {
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
            ></Image>
          </Box>
          <Stack
            direction="column"
            spacing={2}
            flex={2}
            textAlign={{ xs: "center", md: "left" }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Typography variant="h3" sx={{ lineHeight: "1.2" }}>
              Schedule a Free Call Now
            </Typography>
            <Typography variant="body1" color="text.secondary">
              No BS maintainance agreements, we provide crystal clear upfront
              rate. We provide full support in your favourite chatting platform,
              unheard in the industry.
            </Typography>
            <CTAButtonBig>
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
