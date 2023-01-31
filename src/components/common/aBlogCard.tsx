import { Stack, Typography } from "@mui/material";

import ImageWithSkeleton from "./imageWithSkeleton";
import { styled } from "@mui/material";
import { BlogCardLink } from "../Items/ctaButton";
import Link from "../../utils/link";
import dayjs from "dayjs";

interface BlogCardProps {
  children?: React.ReactNode;
  href: string;
  date: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

const CustomCard = styled("div")(({ theme }) => ({
  position: "relative",

  boxShadow: "0px 0px 80px rgba(0, 5, 131, 0.2)",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "1.5rem",
  borderRadius: "25px",
  backgroundImage: (theme as unknown as any).cardGradient,
  trasition: "all 300ms ease-in",
  "&:hover": {
    boxShadow: "0px 0px 90px rgba(0, 5, 131, 0.3)",
  },
}));
export default function ABlogCard(props: BlogCardProps) {
  const {
    children,
    href,
    date,
    imageAlt = "Boom Blog",
    imageSrc,
    title,
    ...otherProps
  } = props;
  const parsed = dayjs(date).format("MMMM, D YYYY");
  return (
    <CustomCard>
      <div
        style={{
          position: "relative",
          width: "80%",
          height: "100%",
          transform: "translateY(-5rem)",
        }}
        className="SpecialDiv"
      >
        <ImageWithSkeleton
          src={imageSrc}
          alt={imageAlt}
          width={1280}
          height={720}
          style={{
            width: "100%",
            objectFit: "contain",
            height: "auto",
            borderRadius: "20px",
            boxShadow: "0px 0px 60px rgb(29, 12, 30)",
          }}
          sizes="(max-width: 600px) 80vw,
            (max-width: 900px) 80vw,
            40vw"
        />
      </div>

      <Stack
        direction="column"
        position="relative"
        mt={"-4rem"}
        padding={{ xs: "0 0 1.5rem 0", md: "0 1.5rem 1.5rem 1.5rem" }}
        alignItems="center"
      >
        <Typography
          variant="body2"
          mb={"1rem"}
          color="text.secondary"
          fontWeight="500"
        >
          {parsed}
        </Typography>

        <Typography
          variant="h5"
          mb="1.6rem"
          fontSize={"1.5rem"}
          lineHeight="1.3"
          fontWeight="500"
          color="text.primary"
          textAlign="center"
        >
          <Link href={href}>{title}</Link>
        </Typography>

        <BlogCardLink href={href} left="0">
          <span>Read More</span>
        </BlogCardLink>
      </Stack>
    </CustomCard>
  );
}
