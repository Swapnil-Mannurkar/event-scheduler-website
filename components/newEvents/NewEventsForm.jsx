import React, { useRef, useState } from "react";
import styles from "./NewEventsForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "@/store/eventData";
import { useRouter } from "next/router";

const NewEventsForm = () => {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.eventData);

  const submitHandler = (event) => {
    event.preventDefault();

    const newEvent = {
      id: data.length + 1,
      title,
      image: imageURL,
      date,
      time,
      location,
      description,
    };

    dispatch(eventActions.addItem(newEvent));
    router.push("/events");
  };

  const cancelHandler = () => {
    router.push("/");
  };

  return (
    <form className={styles.newEventForm} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <label>
          Event Title <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          value={title}
          placeholder="Enter the name of the event"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Location Image URL</label>
        <input
          type="text"
          value={imageURL}
          placeholder="Enter the URL of the location image"
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>
          Event Date <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>
          Event Time <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>
          Event Location <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          value={location}
          placeholder="Enter the location of the event"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Description</label>
        <textarea
          rows={3}
          value={description}
          placeholder="Enter the description/agenda of the event"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.formControls}>
        <button onClick={cancelHandler}>CANCEL</button>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default NewEventsForm;
