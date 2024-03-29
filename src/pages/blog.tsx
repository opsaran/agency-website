import { Container, Grid, Typography } from "@mui/material";
import { GraphQLClient, gql } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import ABlogCard from "../components/common/aBlogCard";

import CenterBox from "../components/common/centerBox";

import NormalHeadline from "../components/common/normalHeadline";
import MainLayout from "../components/layout/mainLayout";
import FifthSection from "../components/sections/fifthSection";
import pages from "../constants/pages";
// import { blogPosts } from "../constants/blogPosts";

const graphcms = new GraphQLClient(`${process.env.GRAPHCMS_URL}`);

const Query = gql`
  {
    posts(orderBy: updatedAt_DESC) {
      id
      title
      slug
      updatedAt
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
  };
};

interface blogPost {
  id: string;
  title: string;

  slug: string;
  updatedAt: any;
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
        <NormalHeadline>Let's Go Boom</NormalHeadline>
      </CenterBox>
      {blogPosts && (
        <Container maxWidth="lg">
          <Grid container columnSpacing={10} rowSpacing={20} padding={"0px"}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={6} key={post.id}>
                <ABlogCard
                  href={`/blog/${post.slug}`}
                  date={`${post.updatedAt}`}
                  imageAlt={post.coverImage.fileName}
                  imageSrc={post.coverImage.url}
                  title={post.title}
                  index={index}
                ></ABlogCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
      <FifthSection />
    </MainLayout>
  );
};

export default Blog;
