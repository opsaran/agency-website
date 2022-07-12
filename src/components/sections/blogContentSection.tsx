import { Box, styled, Container, Grid } from "@mui/material";
import BlogCTACard from "../common/blogCTACard";

interface ContentProps {
  html: string;
  title: string;
  excerpt: string;
  slug: string;
}

const CustomDiv = styled("div")(({ theme }) => ({
  p: {
    color: theme.palette.text.secondary,
    fontSize: "18px",
    lineHeight: "1.667em",
    fontWeight: "400",
    letterSpacing: "-.005em",
    marginBottom: "20px",
  },

  h2: {
    marginBottom: "1rem",
    marginTop: "5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
  },
  li: {
    color: theme.palette.text.secondary,
    fontSize: "18px",
    lineHeight: "1.667em",
    fontWeight: "400",
    letterSpacing: "-.005em",
    marginBottom: "15px",
  },
}));

const BlogContentSection: React.FunctionComponent<ContentProps> = (props) => {
  const { html, title, excerpt, slug } = props;
  return (
    <Container sx={{ mt: { xs: "1rem", md: "5rem" } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={9} md={8}>
          <CustomDiv dangerouslySetInnerHTML={{ __html: html }}></CustomDiv>
        </Grid>
        <Grid item xs={0} sm={3} md={4} mt="4rem">
          <BlogCTACard title={title} excerpt={excerpt} slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogContentSection;
