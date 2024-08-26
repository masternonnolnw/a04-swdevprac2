import React from "react";
import styles from "./card.module.css";

interface CardProps {
  hospitalName: string;
  imgSrc: string;
}

const Card = ({ hospitalName, imgSrc }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="Vaccine Information" className={styles.image} />
      <div className={styles.textContainer}>
        <h2>{hospitalName}</h2>
        <p>description</p>
      </div>
    </div>
  );
};

export default Card;
