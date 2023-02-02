import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import styles from "./numberSection.module.css";
export default function NumberSection1() {
  return (
    <Container
      sx={{
        mb: { xs: "4rem", md: "7rem" },
        pl: { xs: 0, md: "2rem" },
        pr: { xs: 0, md: "2rem" },
      }}
    >
      <Stack
        className={styles.flex_wrapper}
        sx={{ flexDirection: { xs: "column", md: "row" }, width: "100%" }}
        spacing={{ xs: "2rem", md: "0rem" }}
      >
        <motion.div
          className={styles.single_chart}
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className={styles.chart_image}>
            <svg viewBox="0 0 36 36" className={styles.circular_chart}>
              <path
                className={styles.circle_bg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={styles.circle}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                strokeDasharray={"99px 100px"}
              />
              <text x="18" y="20.35" className={styles.percentage}>
                99%
              </text>
            </svg>
          </div>
          <Typography variant="body1">Performance</Typography>
        </motion.div>
        <motion.div
          className={styles.single_chart}
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.07 }}
        >
          <div className={styles.chart_image}>
            <svg viewBox="0 0 36 36" className={styles.circular_chart}>
              <path
                className={styles.circle_bg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className={styles.circle}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                strokeDasharray={"100px 100px"}
              />
              <text x="18" y="20.35" className={styles.percentage}>
                100%
              </text>
            </svg>
          </div>
          <Typography variant="body1">Accessibility</Typography>
        </motion.div>
        <motion.div
          className={styles.single_chart}
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.14 }}
        >
          <div className={styles.chart_image}>
            <svg viewBox="0 0 36 36" className={styles.circular_chart}>
              <path
                className={styles.circle_bg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className={styles.circle}
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                strokeDasharray={"100px 100px"}
              />
              <text x="18" y="20.35" className={styles.percentage}>
                100%
              </text>
            </svg>
          </div>
          <Typography variant="body1">Best Practices</Typography>
        </motion.div>
        <motion.div
          className={styles.single_chart}
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.21 }}
        >
          <div className={styles.chart_image}>
            <svg viewBox="0 0 36 36" className={styles.circular_chart}>
              <path
                className={styles.circle_bg}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                className={styles.circle}
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                strokeDasharray={"100px 100px"}
              />
              <text x="18" y="20.35" className={styles.percentage}>
                100%
              </text>
            </svg>
          </div>
          <Typography variant="body1">SEO</Typography>
        </motion.div>
      </Stack>
    </Container>
  );
}
