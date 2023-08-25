import React from "react";

import styles from "./ShiftingMeter.css";
export default function ShiftingMeter({
  value,
  duration = 1000,
  size = "3",
  color = "black",
  fontFamily = "sans-serif",
}) {
  return (
    <div
      className={styles["speedo-wrap"]}
      style={{
        height: `${size}rem`,
        fontSize: `${size}rem`,
        lineHeight: `${size}rem`,
      }}
    >
      {(value + "").split("").map((val, idx) => (
        <div
          className={styles["speedo-digits"]}
          key={idx}
          style={{
            color: color,
            fontFamily: fontFamily,
            marginTop: `calc( -${val}em `,
            transitionProperty: `all`,
            transitionDuration: `${duration}ms`,
            transitionDelay: `${((value + "").split("").length - idx) * 20}ms`,
          }}
        >
          <div className={styles["speedo-digit"]} data-val="0">
            0
          </div>
          <div className={styles["speedo-digit"]} data-val="1">
            1
          </div>
          <div className={styles["speedo-digit"]} data-val="2">
            2
          </div>
          <div className={styles["speedo-digit"]} data-val="3">
            3
          </div>
          <div className={styles["speedo-digit"]} data-val="4">
            4
          </div>
          <div className={styles["speedo-digit"]} data-val="5">
            5
          </div>
          <div className={styles["speedo-digit"]} data-val="6">
            6
          </div>
          <div className={styles["speedo-digit"]} data-val="7">
            7
          </div>
          <div className={styles["speedo-digit"]} data-val="8">
            8
          </div>
          <div className={styles["speedo-digit"]} data-val="9">
            9
          </div>
        </div>
      ))}
    </div>
  );
}
