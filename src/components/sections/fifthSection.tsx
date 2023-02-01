import {
  Container,
  ContainerProps,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { CTAButtonBig } from "../Items/ctaButton";

import { motion } from "framer-motion";

const CustomContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "8rem",
    height: "8rem",
    left: "50%",
    transform: "translateX(-50%)",
    top: "9rem",
    filter: "blur(90px)",
    backgroundColor: "#7000ff",
  },
}));

export default function FifthSection(props: ContainerProps) {
  const { children, ...otherProps } = props;

  return (
    <CustomContainer
      sx={{
        pt: { xs: "8rem", md: "12rem" },
        pb: { xs: "7rem", md: "12rem" },
      }}
      {...otherProps}
    >
      <Stack direction="column" alignItems="center" textAlign="center">
        <Typography variant="h5" component="p" mb="1rem">
          LET's GET STARTED
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
          mb="2rem"
        >
          Transform Your Ideas into Reality with BoomLabs
        </Typography>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-10%" }}
          transition={{ ease: "easeInOut" }}
        >
          <CTAButtonBig>
            SETUP A FREE MEETING
            <ArrowForwardIcon />
          </CTAButtonBig>
        </motion.div>
      </Stack>
    </CustomContainer>
  );
}
