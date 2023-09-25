import React, { useReducer } from "react";
import styles from "./EventCard.module.css";
import { useDispatch } from "react-redux";
import { eventActions } from "@/store/eventData";
import { useRouter } from "next/router";

const EventCard = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const editCardHandler = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/edit-event",
      query: {
        id: props.id,
        title: props.title,
        image: props.image,
        date: props.date,
        time: props.time,
        duration: props.duration,
        location: props.location,
        description: props.description,
      },
    });
  };

  const deleteCardHandler = (event) => {
    event.preventDefault();
    dispatch(eventActions.deleteItem(props.id));
  };

  const imageURL = props.image
    ? props.image
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGx76KDp61kijU-34lBjb6f4Gdqg-cx4Fmw&usqp=CAU";

  return (
    <div className={styles.eventCardContainer}>
      <div className={styles.imageContainer}>
        <img src={imageURL} className={styles.image} alt="Event location" />
      </div>
      <div className={styles.cardDetailsContainer}>
        <div className={styles.cardDetails}>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <h3>{props.time}</h3>
          <h3>{props.duration} minutes</h3>
          <h3>{props.location}</h3>
          <p className={styles.description}>
            {props.description ? props.description : "No description provided!"}
          </p>
        </div>
        <div className={styles.cardControls}>
          <button onClick={editCardHandler}>EDIT CARD</button>
          <button onClick={deleteCardHandler}>DELETE CARD</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
