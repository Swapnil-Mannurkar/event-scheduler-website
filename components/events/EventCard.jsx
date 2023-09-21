import React from "react";
import styles from "./EventCard.module.css";

const EventCard = (props) => {
  return (
    <div className={styles.eventCardContainer}>
      <div className={styles.imageContainer}>
        <img src={props.image} className={styles.image} />
      </div>
      <div className={styles.cardDetailsContainer}>
        <div className={styles.cardDetails}>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <h3>{props.time}</h3>
          <h3>{props.location}</h3>
          <div className={styles.description}>{props.description}</div>
        </div>
        <div className={styles.cardControls}>
          <button>EDIT CARD</button>
          <button>DELETE CARD</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
