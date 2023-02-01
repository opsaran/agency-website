import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./testimonialSection.module.css";
export default function TestimonialSection() {
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
          mt: { xs: "0", md: "8rem" },
        }}
      >
        <Stack
          direction="row"
          position="relative"
          sx={{
            height: "100%",
            maxWidth: { xs: "100%", md: "60%" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-10%" }}
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
                  and attention to details that OP provides is just 'WOW'. I
                  have recommended BoomLabs to a lot my clients as well.
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
          </motion.div>
        </Stack>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-10%" }}
        >
          <div className={styles.person}>
            <div className={styles.person_container}>
              <div className={styles.person_circle}></div>
              <Image
                className={styles.person_img}
                width={666}
                height={792}
                src="/testim.png"
                quality={100}
                style={{ width: "110%", height: "auto" }}
                sizes="(max-width: 768px) 60vw,
            30vw"
                alt="testimonial1"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
