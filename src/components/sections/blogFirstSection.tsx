import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";

import Image from "next/image";
import { BlogPostHero } from "../../types/blogTypes";

const LightText = styled("p")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const BlogFirstSection: React.FunctionComponent<BlogPostHero> = (props) => {
  const { title, excerpt, updatedAt, readTime, id, author, coverImage } = props;

  const newdate = new Date(updatedAt);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const parsed = newdate.toLocaleDateString("en-US", options);
  return (
    <Container sx={{ mt: { xs: "6rem", md: "9rem" } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography
              variant="h3"
              lineHeight={{ xs: "2.8rem", md: "3.5rem" }}
              fontSize={{ xs: "2rem", md: "2.8rem" }}
              component="h1"
            >
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
                    style={{
                      borderRadius: "30%",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
                <LightText>{author.name}</LightText>
              </Stack>
              <LightText>{parsed}</LightText>
              <LightText>~ {readTime} min read</LightText>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} position="relative">
          <Image
            src={coverImage.url}
            alt={coverImage.fileName}
            width="1280"
            height="720"
            style={{
              width: "100%",
              height: "auto",
            }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogFirstSection;
