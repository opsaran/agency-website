import {
  Box,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "../../utils/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CustomBox = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "sticky",
  top: "20%",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "123px",
    height: "123px",
    right: "20%",
    top: "20rem",
    filter: "blur(90px)",
    backgroundColor: "#e94eee",
  },
}));

const CustomBox2 = styled(Box)(({ theme }) => ({
  position: "relative",
  clipPath: "polygon(0 0, 100% 0, 100% 75%, 79% 100%, 0 100%)",

  width: "100%",
  height: "20rem",
  transition: "all ease-in 250ms",
  boxShadow: "20px 20px 50px rgba(0,0,0, 0.5)",
  borderRadius: "15px",
  borderTop: "1px solid rgba(255,255,255,0.5)",
  borderLeft: "1px solid rgba(255,255,255,0.5)",
  background: "rgba(255,255,255,0.1)",
  "&:hover": {
    clipPath: "polygon(0 0, 100% 0, 100% 89%, 88% 100%, 0 100%)",
  },
}));

const CustomBox3 = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "2rem",
  position: "relative",
}));

const CustomToolTip = styled(Tooltip)(({ theme }) => ({
  background: "#6f70a166",
  color: "white",
}));

interface CardProps {
  title: string;
  excerpt: string;
  slug: string;
}

const IconLink = styled("a")(({ theme }) => ({
  marginLeft: "1rem",
}));

const CustomLinkedInIcon = styled(LinkedInIcon)(({ theme }) => ({
  "&.MuiSvgIcon-root": {
    color: theme.palette.text.primary,
    background: "none",
  },
}));

export const CustomTwitterIcon = styled(TwitterIcon)(({ theme }) => ({
  "&.MuiSvgIcon-root": {
    color: theme.palette.text.primary,
    background: "none",
  },
}));

const BlogCTACard: React.FunctionComponent<CardProps> = (props) => {
  const { title, excerpt, slug } = props;
  return (
    <CustomBox>
      <CustomBox2>
        <Link href="/contact">
          <CustomBox3 spacing={1}>
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Let's Get Started <ArrowForwardIcon />
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              We build websites which are fast, beautiful and SEO freindly.
            </Typography>
            <Box
              position="relative"
              sx={{ width: "100%", height: "100%", display: "flex" }}
            >
              <Image
                src="/rocketLogo.png"
                fill
                style={{ width: "100%", objectFit: "contain" }}
                alt="BoomLabs Logo"
              />
            </Box>
          </CustomBox3>
        </Link>
      </CustomBox2>
      <Stack
        direction="column"
        mt="1rem"
        spacing={2}
        sx={{
          background: `linear-gradient(
            45deg,
            #6867671a,
            #32323266
          )`,
          clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%)",
          width: { xs: "90%", md: "80%" },
          padding: "1rem",
          borderRadius: "7px",
        }}
      >
        <Typography variant="body1">SHARE</Typography>
        <Stack direction="row" sx={{ width: "100%" }}>
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet/?text=${encodeURI(
              title
            )}&url=https%3A%2F%2Fwww.boomlabs.agency%2Fblog%2F${encodeURI(
              slug
            )}`}
            aria-label="Share On Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomToolTip title="Share on Twitter">
              <CustomTwitterIcon fontSize="large" />
            </CustomToolTip>
          </a>
          <IconLink
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.boomlabs.agency%2Fblog%2F${encodeURI(
              slug
            )}&title=${encodeURI(title)}&summary=${encodeURI(
              excerpt
            )}&source=https%3A%2F%2Fwww.boomlabs.agency%2Fblog%2F${encodeURI(
              slug
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <CustomToolTip title="Share on LinkedIn">
              <CustomLinkedInIcon fontSize="large" />
            </CustomToolTip>
          </IconLink>
        </Stack>
      </Stack>
    </CustomBox>
  );
};

export default BlogCTACard;
