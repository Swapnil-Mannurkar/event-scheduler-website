import React from "react";
import styles from "./NewEventsForm.module.css";

const NewEventsForm = () => {
  return (
    <form className={styles.newEventForm}>
      <div className={styles.inputContainer}>
        <label>Event Title</label>
        <input type="text" />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Image URL</label>
        <input type="text" />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Date</label>
        <input type="date" />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Time</label>
        <input type="time" />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Location</label>
        <input type="text" />
      </div>
      <div className={styles.inputContainer}>
        <label>Event Description</label>
        <textarea rows={3}></textarea>
      </div>
      <div className={styles.formControls}>
        <button>CANCEL</button>
        <button>SUBMIT</button>
      </div>
    </form>
  );
};

export default NewEventsForm;
