import { Typography, TypographyProps } from "@mui/material";

import { useEffect } from "react";
import { useRef } from "react";
import styles from "./headlinehero.module.css";

export function HeadlineHero1(props: TypographyProps) {
  const { children, ...otherProps } = props;

  const ref1 = useRef<HTMLSpanElement>(null);
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const intervalsRef = useRef<any>([]);

  useEffect(() => {
    if (!ref1.current) return;
    let index = 0;
    let interval = 1000;
    const animate = (star: HTMLSpanElement) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      star.style.animation = "none";
      star.offsetHeight;
      star.style.animation = "";
    };

    const observer = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const star = entry.target as HTMLSpanElement;
        if (entry.intersectionRatio === 0) {
          clearInterval(intervalsRef.current[i]);
        } else {
          setTimeout(() => {
            animate(star);
            intervalsRef.current[i] = setInterval(() => animate(star), 1000);
          }, index++ * (interval / 3));
        }
      }
    });

    for (const star of ref1.current.children) {
      observer.observe(star);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Typography
      className={styles.hero_headline_main}
      variant="h2"
      sx={{
        fontSize: { xs: "2.5rem", md: "3rem" },
        fontWeight: "900",
        lineHeight: { xs: "3rem", md: "inherit" },
        textTransform: "uppercase",
      }}
      {...otherProps}
    >
      Skyrocket your business with{" "}
      <span className={styles.magic} ref={ref1}>
        <span className={styles.magic_star}>
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>
        <span className={styles.magic_star}>
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>
        <span className={styles.magic_star}>
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>
        <span className={styles.magic_text}>lightning-fast</span>
      </span>{" "}
      websites
    </Typography>
  );
}
