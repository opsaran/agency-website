import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  styled,
  Typography,
} from "@mui/material";
import Link from "../../utils/link";
import React from "react";
import ImageWithSkeleton from "./imageWithSkeleton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BlogCardLink } from "../Items/ctaButton";
import Image from "next/image";

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  background: (theme as unknown as any).cardGradient,
  padding: "1rem 1rem 0.5rem",
}));

interface BlogCardProps extends CardProps {
  href?: string;
  readTime?: number;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

const CustomCardContent = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: "4px",
  display: "block",
  marginBottom: "0.5rem",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  img: {
    transform: "scale(1)",
    transition: "transform 0.5s ease-in-out",
  },
  "&: hover": {
    img: {
      transform: "scale(1.2)",
      transition: "transform 0.5s ease-in-out",
    },
  },
}));

const CardTitleWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(2px)",
  borderRadius: theme.shape.borderRadius,
  bottom: 0,
  height: "40%",
  overflow: "hidden",
  padding: "0.5rem",
  position: "absolute",
  width: "100%",
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 0",
    alignItems: "center",
    textAlign: "center",
  })
);
const BlogCard: React.FunctionComponent<BlogCardProps> = (props) => {
  const {
    children,
    href = "#",
    readTime = 10,
    imageAlt = "",
    imageSrc = "/",
    title = "BoomLabs Blog",
    ...otherProps
  } = props;

  return (
    <CustomCard {...otherProps}>
      <Link href={href}>
        <CustomCardContent>
          <ImageWithSkeleton
            alt={imageAlt}
            src={imageSrc}
            width={1280}
            height={720}
            style={{ width: "100%", height: "auto" }}
          />
          <CardTitleWrapper>
            <Typography variant="h5" component="h3" color="primary.main">
              {title}
            </Typography>
          </CardTitleWrapper>
        </CustomCardContent>
      </Link>
      <CustomCardActions>
        <Typography variant="body2" component="p" color="secondary.main">
          {readTime} min read
        </Typography>

        <BlogCardLink href={href} color="primary.main">
          View Full Story <ArrowForwardIcon />
        </BlogCardLink>
      </CustomCardActions>
    </CustomCard>
  );
};

export default BlogCard;
