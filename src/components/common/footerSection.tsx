import { Box, Container, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Link from "../../utils/link";

export default function FooterSection() {
  return (
    <div style={{ width: "100%", background: "#ffffff1a" }}>
      <Container sx={{ pt: "4rem", pb: "4rem" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent={"space-between"}
        >
          <Box flex={1} sx={{ mb: { xs: "1rem", md: "inherit" } }}>
            <Image
              src="/logo.png"
              width={200}
              height={110}
              alt="BoomLabs Logo"
            />
          </Box>

          <Stack
            direction="column"
            flex={1}
            spacing={3}
            display={{ xs: "none", md: "inherit" }}
          >
            <Typography variant="h6">Menu</Typography>
            <Stack spacing={1}>
              <Link href="/" color="text.secondary">
                Home
              </Link>
              <Link href="/about" color="text.secondary">
                About us
              </Link>
              <Link href="/" color="text.secondary">
                Blog
              </Link>
              <Link href="/contact" color="text.secondary">
                Contact
              </Link>
            </Stack>
          </Stack>
          <Stack direction="column" flex={1} spacing={3}>
            <Typography variant="h6">Connect with us</Typography>
            <div>
              <Typography variant="body2">OP Saran</Typography>
              <Link
                href="mailto: boomlabs.agency@gmail.com"
                color="text.primary"
              >
                boomlabs.agency@gmail.com
              </Link>
            </div>
            <Link
              href="https://www.instagram.com/boomlabstech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon color="secondary"></InstagramIcon>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
