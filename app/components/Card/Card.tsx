import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  image: string;
  description: string;
  price?: number; // Torna o campo opcional para suportar tecnologias (usando como "rating")
}

const Card = ({ title, image, description, price }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <img src={image} alt={title} className={styles.image} />
      {price !== undefined && (
        <p className={styles.price}>
          {price} {price > 5 ? "€" : "★"}
        </p>
      )}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;