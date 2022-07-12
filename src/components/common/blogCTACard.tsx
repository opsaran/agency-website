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
import { pink } from "@mui/material/colors";
const CustomBox = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "sticky",
  top: "20%",
}));

const CustomBox2 = styled(Box)(({ theme }) => ({
  clipPath: "polygon(0 0, 100% 0, 100% 75%, 79% 100%, 0 100%)",
  background: (theme as unknown as any).cardGradient,
  borderRadius: "7px",
  width: "100%",
  height: "20rem",
  transition: "all ease-in 500ms",
  "&:hover": {
    background: (theme as unknown as any).cardGradient2,
    clipPath: "polygon(0 0, 100% 0, 100% 89%, 88% 100%, 0 100%)",
  },
}));

const CustomBox3 = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "2rem",
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Let's Get Started <ArrowForwardIcon />
            </Typography>
            <Typography variant="body2">
              We build websites which are fast, beautiful and SEO freindly.
            </Typography>
            <Box position="relative" sx={{ width: "100%", height: "100%" }}>
              <Image
                src="/rocketLogo.png"
                layout="fill"
                objectFit="contain"
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
            #ffffff1a,
            #ffffff66
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
            rel="noreferrer"
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
            rel="noreferrer"
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
