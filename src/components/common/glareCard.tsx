import React, { useRef, useEffect } from "react";
import styles from "./glareCard.module.css";
export default function GlareCard() {
  const cardRef = useRef(null);
  const limits = 15.0;

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    const offsetX = x / rect.width;
    const offsetY = y / rect.height;

    const rotateY = offsetX * (limits * 2) - limits;
    const rotateX = offsetY * (limits * 2) - limits;

    const shadowOffsetX = offsetX * 32 - 16;
    const shadowOffsetY = offsetY * 32 - 16;

    e.currentTarget.style.boxShadow = `${(1 / 6) * -shadowOffsetX}px ${
      (1 / 6) * -shadowOffsetY
    }px 3px rgba(71, 33, 121, 0.051), 
        ${(2 / 6) * -shadowOffsetX}px ${
      (2 / 6) * -shadowOffsetY
    }px 7.2px rgba(71, 33, 121, 0.073), 
        ${(3 / 6) * -shadowOffsetX}px ${
      (3 / 6) * -shadowOffsetY
    }px 13.6px rgba(71, 33, 121, 0.09), 
        ${(4 / 6) * -shadowOffsetX}px ${
      (4 / 6) * -shadowOffsetY
    }px 24.3px rgba(71, 33, 121, 0.107), 
        ${(5 / 6) * -shadowOffsetX}px ${
      (5 / 6) * -shadowOffsetY
    }px 45.5px rgba(71, 33, 121, 0.129), 
        ${-shadowOffsetX}px ${-shadowOffsetY}px 109px rgba(71, 33, 121, 0.18)`;
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

    e.currentTarget.children[0].children[0].style.left = `${
      rotateX + rotateY + 90
    }%`;
  };

  const handleMouseLeave = (e: any) => {
    e.currentTarget.style.boxShadow =
      "0px 0px 3px rgba(71, 33, 121, 0.051), 0px 0px 7.2px rgba(71, 33, 121, 0.073), 0px 0px 13.6px rgba(71, 33, 121, 0.09), 0px 0px 24.3px rgba(71, 33, 121, 0.107), 0px 0px 45.5px rgba(71, 33, 121, 0.129), 0px 0px 109px rgba(71, 33, 121, 0.18)";
    e.currentTarget.style.transform = "scale(1.0)";
    const glare = e.currentTarget.children[0].children[0];

    glare.style.left = "100%";
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.card}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.glare_container}>
          <div className={styles.glare}></div>
        </div>
      </div>
      <div
        className={styles.card}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.glare_container}>
          <div className={styles.glare}></div>
        </div>
      </div>
      <div
        className={styles.card}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.glare_container}>
          <div className={styles.glare}></div>
        </div>
      </div>
    </div>
  );
}
