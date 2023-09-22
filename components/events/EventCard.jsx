import React from "react";
import styles from "./EventCard.module.css";

const EventCard = (props) => {
  return (
    <div className={styles.eventCardContainer}>
      <div className={styles.imageContainer}>
        <img
          src={
            props.image
              ? props.image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGx76KDp61kijU-34lBjb6f4Gdqg-cx4Fmw&usqp=CAU"
          }
          className={styles.image}
          alt="Event location"
        />
      </div>
      <div className={styles.cardDetailsContainer}>
        <div className={styles.cardDetails}>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <h3>{props.time}</h3>
          <h3>{props.location}</h3>
          <div className={styles.description}>
            {props.description ? props.description : "No description provided!"}
          </div>
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
