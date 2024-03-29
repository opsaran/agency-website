import { GraphQLClient, gql } from "graphql-request";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ErrorPage from "next/error";

import { useRouter } from "next/router";
import MainLayout from "../../components/layout/mainLayout";
import BlogContentSection from "../../components/sections/blogContentSection";
import BlogFirstSection from "../../components/sections/blogFirstSection";
import FifthSection from "../../components/sections/fifthSection";
import { BlogPostInterface } from "../../types/blogTypes";

const graphcms = new GraphQLClient(`${process.env.GRAPHCMS_URL}`);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      updatedAt
      readTime
      excerpt
      author {
        name
        picture {
          fileName
          width
          height
          url
        }
      }
      content {
        raw
      }
      coverImage {
        url
        width
        height
        fileName
      }
      seo {
        title
        description
        image {
          url
        }
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const { post } = await graphcms.request(QUERY, { slug });
  return {
    props: {
      blogPost: post,
    },
  };
};

interface BlogPostPageProps {
  blogPost: BlogPostInterface;
}

const BlogPost: NextPage<BlogPostPageProps> = ({ blogPost }) => {
  const router = useRouter();
  if (!router.isFallback && !blogPost?.slug) {
    return <ErrorPage statusCode={404} title="loading..." />;
  }
  return (
    <>
      {router.isFallback ? (
        <h2>Loading…</h2>
      ) : (
        <MainLayout
          pageData={{
            title: blogPost.seo?.title,
            description: blogPost.seo?.description,
            link: `https://www.boomlabs.agency/blog/${blogPost.slug}`,
            ogType: "article",
            ogImage: blogPost.seo.image?.url,
          }}
        >
          <BlogFirstSection {...blogPost} />
          <BlogContentSection
            content={blogPost.content.raw}
            title={blogPost.title}
            excerpt={blogPost.excerpt}
            slug={blogPost.slug}
          />
          <FifthSection></FifthSection>
        </MainLayout>
      )}
    </>
  );
};

export default BlogPost;
