import { Box, Container } from "@mui/material";

import Headline1 from "../common/headline1";
import styles from "./designSection.module.css";
import ImageDialog from "../common/imageDialog";

export default function DesignSection() {
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Headline1 animate textAlign="center" sx={{ mb: "4rem" }}>
          Some of our Designs
        </Headline1>

        <div className={styles.designs_image_wrapper}>
          <Box
            width={"100%"}
            height="auto"
            className={styles.designs_image_span}
            sx={{ cursor: "zoom-in" }}
          >
            <ImageDialog
              id="firstpic"
              imageSrc="/beautibrand.png"
              imageAlt="Beuti Brand Design"
            ></ImageDialog>
          </Box>
        </div>
        <div className={styles.designs_image_wrapper}>
          <Box
            width={"100%"}
            height="auto"
            className={styles.designs_image_span}
            sx={{ cursor: "zoom-in" }}
          >
            <ImageDialog
              id="second-pic"
              imageSrc="/dentist.png"
              imageAlt="Beuti Brand Design"
            ></ImageDialog>
          </Box>
        </div>
        <div className={styles.designs_image_wrapper}>
          <Box
            width={"100%"}
            height="auto"
            className={styles.designs_image_span}
            sx={{ cursor: "zoom-in" }}
          >
            <ImageDialog
              id="third-pic"
              imageSrc="/lawfirm.png"
              imageAlt="Law firm Design"
            />
          </Box>
        </div>
      </div>
    </Container>
  );
}
