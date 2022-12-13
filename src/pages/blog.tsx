import { Grid, Grow, Typography } from "@mui/material";
import { GraphQLClient, gql } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import BlogCard from "../components/common/blogCard";
import CenterBox from "../components/common/centerBox";
import HeadlineHero from "../components/common/headlinehero";
import MainLayout from "../components/layout/mainLayout";
import FifthSection from "../components/sections/fifthSection";
import pages from "../constants/pages";
// import { blogPosts } from "../constants/blogPosts";

const graphcms = new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPHCMS_URL}`);

const Query = gql`
  {
    posts (orderBy: publishedAt_DESC) {
      id
      title
      slug
      readTime
      coverImage {
        url
        fileName
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await graphcms.request(Query);
  return {
    props: {
      blogPosts: posts,
    },
    revalidate: 60 * 5,
  };
};

interface blogPost {
  id: string;
  title: string;

  slug: string;
  readTime: number;
  coverImage: {
    url: string;
    fileName: string;
  };
}

interface BlogPostsProps {
  blogPosts: blogPost[];
}

const Blog: NextPage<BlogPostsProps> = ({ blogPosts }) => {
  return (
    <MainLayout pageData={pages!.blog}>
      <CenterBox height={"70vh"} flexDirection={"column"}>
        <Typography variant="body1" component="p">
          THE BOOMLABS BLOG
        </Typography>
        <HeadlineHero>Let's Go Boom</HeadlineHero>
      </CenterBox>
      {blogPosts && (
        <Grid
          container
          spacing={8}
          rowSpacing={10}
          sx={{ padding: { xs: "1rem", sm: "2rem" } }}
        >
          {blogPosts.map((post, index) => (
            <Grow in={true} key={post.id} timeout={(index + 1) * 500}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <BlogCard
                  href={`/blog/${post.slug}`}
                  readTime={post.readTime}
                  imageAlt={post.coverImage.fileName}
                  imageSrc={post.coverImage.url}
                  title={post.title}
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></BlogCard>
              </Grid>
            </Grow>
          ))}
        </Grid>
      )}
      <FifthSection />
    </MainLayout>
  );
};

export default Blog;
