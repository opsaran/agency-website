import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import Headline1 from "../common/headline1";
import CalendlyDialog from "../Items/calendlyModal";
import { CTAButtonBig } from "../Items/ctaButton";

export default function SecondSection() {
  //for modal dialog
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Container sx={{ mb: "6rem" }}>
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
                style={{ width: "100%", height: "auto" }}
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
              <Headline1 animate>Schedule a Free Call Now</Headline1>
              <Typography variant="body1" color="text.secondary">
                No BS maintainance agreements, we provide crystal clear upfront
                rate. We provide full support in your favourite chatting
                platform, unheard in the industry.
              </Typography>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-10%" }}
                transition={{ ease: "easeInOut" }}
              >
                <CTAButtonBig onClick={() => setOpen(true)} sx={{ mt: "1rem" }}>
                  Schedule 1 : 1 Call
                  <ArrowForwardIcon />
                </CTAButtonBig>
              </motion.div>
            </Stack>
          </Stack>
        </Container>
      </div>
      <CalendlyDialog open={open} onClose={handleClose} id="second-section" />
    </>
  );
}
