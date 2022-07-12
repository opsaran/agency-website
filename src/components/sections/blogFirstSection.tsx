import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import { BlogPostHero } from "../../types/blogTypes";

const LightText = styled("p")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const BlogFirstSection: React.FunctionComponent<BlogPostHero> = (props) => {
  const { title, excerpt, publishedAt, readTime, id, author, coverImage } =
    props;

  const parsed = dayjs(publishedAt).format("MMMM, D YYYY");
  return (
    <Container sx={{ mt: { xs: "6rem", md: "9rem" } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography variant="h3" lineHeight={"3.5rem"}>
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="h4"
              color="text.secondary"
              fontWeight="100"
            >
              {excerpt}
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent={"space-between"}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box display="block">
                  <Image
                    src={author.picture.url}
                    alt={author.picture.fileName}
                    width={40}
                    height={40}
                    layout="intrinsic"
                    style={{ borderRadius: "30%" }}
                  />
                </Box>
                <LightText>{author.name}</LightText>
              </Stack>
              <LightText>{parsed}</LightText>
              <LightText>~ {readTime} min read</LightText>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} display="block" position="relative">
          <Image
            src={coverImage.url}
            alt={coverImage.fileName}
            width={coverImage.width}
            height={coverImage.height}
            layout="responsive"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogFirstSection;
