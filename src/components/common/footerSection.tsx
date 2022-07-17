import {
  Box,
  Container,
  Grid,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Link from "../../utils/link";
import { CustomTwitterIcon } from "./blogCTACard";

const CustomToolTip = styled(Tooltip)(({ theme }) => ({
  background: "#6f70a166",
  color: "white",
}));

const CustomInstaIcon = styled(InstagramIcon)(({ theme }) => ({
  "&.MuiSvgIcon-root": {
    color: theme.palette.text.primary,
    background: "none",
  },
}));

export default function FooterSection() {
  return (
    <div style={{ width: "100%", background: "#ffffff1a" }}>
      <Container sx={{ pt: "4rem", pb: "4rem" }}>
        <Grid
          container
          spacing={2}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ mb: { xs: "1rem", md: "inherit" } }}
          >
            <Box position="relative" maxWidth="200px">
              <Image
                src="/logo.png"
                width={200}
                height={110}
                layout="responsive"
                alt="BoomLabs Logo"
              />
            </Box>
          </Grid>
          <Grid item xs={0} md={4}>
            <Stack
              direction="column"
              spacing={3}
              display={{ xs: "none", md: "inherit" }}
            >
              <Typography variant="h6" component="p">
                Menu
              </Typography>
              <Stack spacing={1}>
                <Link href="/" color="text.secondary">
                  Home
                </Link>
                <Link href="/about" color="text.secondary">
                  About us
                </Link>
                <Link href="/blog" color="text.secondary">
                  Blog
                </Link>
                <Link href="/contact" color="text.secondary">
                  Contact
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={4} sx={{ overflow: "hidden" }}>
            <Stack direction="column" spacing={3}>
              <Typography variant="h6" component="p">
                Connect with us
              </Typography>
              <div>
                <Typography variant="body2">OP Saran</Typography>
                <Link
                  href="mailto: boomlabs.agency@gmail.com"
                  color="text.primary"
                >
                  boomlabs.agency@gmail.com
                </Link>
              </div>
              <Stack direction="row" spacing={3}>
                <Link
                  href="https://www.instagram.com/goboomlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BoomLabs Instagram"
                >
                  <CustomToolTip title="Follow us on Instagram">
                    <CustomInstaIcon color="secondary" />
                  </CustomToolTip>
                </Link>
                <Link
                  href="https://twitter.com/goboomlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BoomLabs Twitter"
                >
                  <CustomToolTip title="Follow us on Twitter">
                    <CustomTwitterIcon color="secondary" />
                  </CustomToolTip>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
