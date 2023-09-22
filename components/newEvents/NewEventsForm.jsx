import React, { useRef } from "react";
import styles from "./NewEventsForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "@/store/eventData";
import { useRouter } from "next/router";

const NewEventsForm = () => {
  let titleEntered = useRef("");
  let imageURLEntered = useRef("");
  let dateEntered = useRef("");
  let timeEntered = useRef("");
  let locationEntered = useRef("");
  let descriptionEntered = useRef("");
  const dispatch = useDispatch();
  let data = useSelector((state) => state.eventData);
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    const newEvent = {
      id: data.length + 1,
      title: titleEntered.current.value,
      image: imageURLEntered.current.value,
      date: dateEntered.current.value,
      time: timeEntered.current.value,
      location: locationEntered.current.value,
      description: descriptionEntered.current.value,
    };
    dispatch(eventActions.addItem(newEvent));
    router.push("/events");
  };

  return (
    <form className={styles.newEventForm} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <label>
          Event Title <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          value={titleEntered.current.value}
          placeholder="Enter the name of the event"
          ref={titleEntered}
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Location Image URL</label>
        <input
          type="text"
          ref={imageURLEntered}
          placeholder="Enter the URL of the location image"
        />
      </div>
      <div className={styles.inputContainer}>
        <label>
          Event Date <span style={{ color: "red" }}>*</span>
        </label>
        <input type="date" ref={dateEntered} required />
      </div>
      <div className={styles.inputContainer}>
        <label>
          Event Time <span style={{ color: "red" }}>*</span>
        </label>
        <input type="time" ref={timeEntered} required />
      </div>
      <div className={styles.inputContainer}>
        <label>
          Event Location <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          ref={locationEntered}
          placeholder="Enter the location of the event"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Description</label>
        <textarea
          rows={3}
          ref={descriptionEntered}
          placeholder="Enter the description/agenda of the event"
        ></textarea>
      </div>
      <div className={styles.formControls}>
        <button>CANCEL</button>
        <button>SUBMIT</button>
      </div>
    </form>
  );
};

export default NewEventsForm;
