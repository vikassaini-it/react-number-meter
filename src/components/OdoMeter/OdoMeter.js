import React, { useEffect, useState } from "react";

import styles from "./OdoMeter.css";
export default function OdoMeter({
  value,
  duration = 1000,
  size = "3rem",
  color = "black",
  fontFamily = "sans-serif",
}) {
  const [rotVal, setRotVal] = useState([]);
  const [previousVal, setPrevVal] = useState(0);

  useEffect(() => {
    setRotVal((prevVal) => {
      const localRot = JSON.parse(JSON.stringify(prevVal));
      (value + "").split("").forEach((val, idx) => {
        if (!localRot[idx]) {
          localRot[idx] = { v: 0, r: 0, d: 0 };
        }
        const distance = calculateDistance(
          localRot[idx]["v"],
          parseInt(val, 10)
        );
        const rotationDir = value > previousVal;
        let totalRotation =
          36 * distance + (idx > 0 ? localRot[idx - 1]["d"] * 360 : 0);
        // totalRotation = totalRotation * (rotationDir ? 1 : -1);
        localRot[idx]["r"] = localRot[idx]["r"] + totalRotation;
        localRot[idx]["v"] = parseInt(val, 10);
        localRot[idx]["d"] =
          (distance > 0 ? distance - 1 : 0) +
          (idx > 0 ? localRot[idx - 1]["d"] : 0);
      });
      setPrevVal(value);
      return localRot;
    });
  }, [value]);

  const calculateDistance = (num1, num2) => {
    const distance = (num2 - num1 + 10) % 10;
    return distance;
  };

  return (
    <div
      className={styles["techo-wrap"]}
      style={{ height: size, fontSize: size, lineHeight: size }}
    >
      {(value + "").split("").map((val, idx) => (
        <React.Fragment key={idx + val}>
          <div
            className={styles["techo-digits"]}
            key={idx + val}
            style={{
              color: color,
              fontFamily: fontFamily,
              transform: `rotateX( ${
                (rotVal[idx] ? rotVal[idx]["r"] : 0) * -1
              }deg ) `,
              transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              transitionProperty: `all`,
              transitionDuration: `${duration}ms`,
              transitionDelay: `${
                ((value + "").split("").length - idx) * 50
              }ms`,
              position: "relative",
              marginRight: `calc( ${size} - 1rem )`,
            }}
          >
            <div
              className={styles["techo-digit"]}
              data-val="0"
              style={{
                transform: "rotateX(0deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              0
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="1"
              style={{
                transform: "rotateX(36deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              1
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="2"
              style={{
                transform: "rotateX(72deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              2
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="3"
              style={{
                transform: "rotateX(108deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              3
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="4"
              style={{
                transform: "rotateX(144deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              4
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="5"
              style={{
                transform: "rotateX(180deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              5
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="6"
              style={{
                transform: "rotateX(216deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              6
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="7"
              style={{
                transform: "rotateX(252deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              7
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="8"
              style={{
                transform: "rotateX(288deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              8
            </div>
            <div
              className={styles["techo-digit"]}
              data-val="9"
              style={{
                transform: "rotateX(324deg)",
                transformOrigin: `0rem 0rem calc( ${size} + 2rem )`,
              }}
            >
              9
            </div>
          </div>
          {/* <div
            style={{
              fontSize: "14px",
              color: `${rotVal[idx]?.r < rotValBk[idx]?.r ? "red" : "black"}`,
            }}
          >
            {rotValBk[idx]?.r + ":" + rotVal[idx]?.r}
          </div> */}
        </React.Fragment>
      ))}
    </div>
  );
}
