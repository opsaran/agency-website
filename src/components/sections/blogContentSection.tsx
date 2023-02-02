import { styled, Container, Grid } from "@mui/material";
import BlogCTACard from "../common/blogCTACard";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "../../utils/link";
import Image from "next/image";
import { ElementNode } from "@graphcms/rich-text-types";
interface ContentProps {
  content: RawContentType;
  title: string;
  excerpt: string;
  slug: string;
}

type RawContentType = {
  children: ElementNode[];
};

const CustomDiv = styled("div")(({ theme }) => ({
  fontSize: "1.25rem",
  a: {
    textDecoration: "underline",
    textDecorationColor: "#e94eee",
    textDecorationThickness: "3px",
  },
  p: {
    color: theme.palette.text.secondary,

    lineHeight: "1.7em",
    fontWeight: "400",
    // letterSpacing: "-.005em",
    marginBottom: "35px",
  },

  h2: {
    marginBottom: "1rem",
    marginTop: "5rem",
    fontSize: "2rem",
    color: "#e94eee",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  h3: {
    marginBottom: "0.8rem",
    marginTop: "2.5rem",
    fontSize: "1.9rem",
    color: "#e94eee",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  li: {
    color: theme.palette.text.secondary,

    lineHeight: "1.667em",
    fontWeight: "400",
    letterSpacing: "-.005em",
    marginBottom: "15px",
    width: "100%",
    position: "relative",
  },
  ul: {
    width: "100%",
    position: "relative",
    display: "block",
  },
  ol: {
    width: "100%",
    position: "relative",
    display: "block",
  },
}));

const BlogContentSection: React.FunctionComponent<ContentProps> = (props) => {
  const { content, title, excerpt, slug } = props;
  return (
    <Container
      sx={{ mt: { xs: "1rem", md: "5rem" }, mb: { xs: "2rem", md: "4rem" } }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} sm={9} md={8} display="block" position="relative">
          <CustomDiv>
            <RichText
              content={content}
              renderers={{
                img: ({ src, altText, height, width }) => (
                  <Image
                    src={src ? src : "/"}
                    alt={altText ? altText : "BoomBlog"}
                    height={height}
                    width={width}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                ),
                a: ({ children, openInNewTab, href, rel, ...rest }) => {
                  if (href?.match(/^https?:\/\/|^\/\//i)) {
                    return (
                      <a
                        href={href}
                        target={openInNewTab ? "_blank" : "_self"}
                        rel={"noopener noreferrer"}
                        {...rest}
                      >
                        {children}
                      </a>
                    );
                  }

                  return <Link href={href ? href : "/"}>{children}</Link>;
                },
              }}
            ></RichText>
          </CustomDiv>
        </Grid>
        <Grid item xs={0} sm={3} md={4} mt="4rem">
          <BlogCTACard title={title} excerpt={excerpt} slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogContentSection;
