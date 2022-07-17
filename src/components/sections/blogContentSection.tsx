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
  a: {
    textDecoration: "underline",
    textDecorationColor: theme.palette.secondary.main,
  },
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
  const { content, title, excerpt, slug } = props;
  return (
    <Container sx={{ mt: { xs: "1rem", md: "5rem" } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={9} md={8}>
          <CustomDiv>
            <RichText
              content={content}
              renderers={{
                img: ({ src, altText, height, width }) => (
                  <Image
                    src={src ? src : "/"}
                    alt={altText}
                    height={height}
                    width={width}
                    layout="responsive"
                    objectFit="contain"
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

                  return (
                    <Link href={href ? href : "/"}>
                      <a {...rest}>{children}</a>
                    </Link>
                  );
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
