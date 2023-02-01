import * as React from "react";
import { motion } from "framer-motion";
import { TypographyProps } from "@mui/material";

const banner = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  viewport: {
    margin: "-10%",
  },
};

const letterAni = {
  initial: { opacity: 0, y: "100px" },
  animate: {
    opacity: 1,
    y: "0px",
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

const Banner = (props: TypographyProps) => {
  const { children, ...otherProps } = props;
  if (!children) return <></>;
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={children.toString()} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title }: { title: string }) => (
  <motion.span
    className="row-title"
    variants={banner}
    initial="initial"
    whileInView="animate"
  >
    {[...title].map((letter, indx) => (
      <motion.span className="row-letter" variants={letterAni} key={indx}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }: { title: string }) => {
  return (
    <div>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;
