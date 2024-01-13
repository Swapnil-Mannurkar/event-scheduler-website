import React, { useState } from "react";
import styles from "./EditEventForm.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { eventActions } from "@/store/eventData";

const EditEventForm = () => {
  const router = useRouter();
  const { id, title, image, date, time, duration, location, description } =
    router.query;

  const [newTitle, setTitle] = useState(title);
  const [newImage, setImage] = useState(image);
  const [newDate, setDate] = useState(date);
  const [newTime, setTime] = useState(time);
  const [newDuration, setDuration] = useState(duration);
  const [newLocation, setLocation] = useState(location);
  const [newDescription, setDescription] = useState(description);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedEvent = {
      id: id,
      title: newTitle,
      image: newImage,
      date: newDate,
      time: newTime,
      duration: newDuration,
      location: newLocation,
      description: newDescription,
    };

    dispatch(eventActions.editItem(updatedEvent));
    router.push("/events");
  };

  const cancelHandler = () => {
    router.push("/events");
  };

  return (
    <form className={styles.newEventForm} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <label>Event Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Location Image URL</label>
        <input
          type="text"
          value={newImage}
          placeholder="Enter the URL of the location image"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Date</label>
        <input
          type="date"
          value={newDate}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Time</label>
        <input
          type="time"
          value={newTime}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Duration</label>
        <input
          type="number"
          value={newDuration}
          placeholder="Enter the duration of the event in minutes"
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Location</label>
        <input
          type="text"
          value={newLocation}
          placeholder="Enter the location of the event"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Description</label>
        <textarea
          rows={2}
          value={newDescription}
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

export default EditEventForm;
