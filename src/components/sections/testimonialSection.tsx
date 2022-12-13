import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Observers from "../../utils/observers";

export default function TestimonialSection() {
  const imageRef = useRef(null);
  const leftRef = useRef(null);
  useEffect(() => {
    Observers(imageRef.current);
    Observers(leftRef.current);
  }, []);
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pb: { xs: "0rem", md: "5rem" },
          pt: { xs: "0rem", md: "5rem" },
        }}
      >
        <Stack
          direction="row"
          position="relative"
          ref={leftRef}
          className="from-left"
          sx={{
            height: "100%",
            maxWidth: { xs: "100%", md: "60%" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack direction="column" position="relative">
            <Stack direction="row" sx={{ mt: { xs: "3rem", md: "0" } }}>
              <Box
                sx={{ width: "100%", height: "100%", display: "grid" }}
                position="relative"
              >
                <div
                  style={{
                    display: "flex",
                    top: "-100%",
                    position: "relative",
                    left: "0",
                  }}
                >
                  <Image
                    src="/quoteleft.png"
                    width={107}
                    height={80}
                    style={{ width: "100%", height: "auto" }}
                    alt="quote"
                  />
                </div>
              </Box>
              <Typography
                variant="h6"
                component="p"
                sx={{ color: "text.secondary", fontWeight: 400 }}
              >
                Working with BoomLabs has put our conversion rates through the
                roof. I have worked with many agencies but the responsiveness
                and attention to details that OP provides is just 'WOW'. I have
                recommended BoomLabs to a lot my clients as well.
              </Typography>
            </Stack>
            <Stack direction="column" alignItems={"center"}>
              <Divider
                variant="middle"
                color="text.primary"
                role="presentation"
                sx={{ width: "50px", mt: "1rem", mb: "1rem" }}
              />
              <Typography
                variant="h6"
                component="p"
                sx={{ color: "text.secondary", fontWeight: "200" }}
              >
                QUINTEN POON
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ color: "text.secondary" }}
              >
                Founder, EcomProfits
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box
          position="relative"
          sx={{
            width: { xs: "60%", md: "30%" },
            ml: "auto",
            mr: "auto",
            textAlign: "center",
          }}
          ref={imageRef}
          className="from-right"
        >
          <Image
            width={281}
            height={316}
            src="/testi2.png"
            quality={100}
            style={{ width: "100%", height: "auto" }}
            alt="testimonial1"
          />
        </Box>
      </Container>
    </>
  );
}
