import React from "react";
import styles from "./NewEvent.module.css";
import NewEventsForm from "@/components/newEvents/NewEventsForm";

const index = () => {
  return (
    <div className={styles.newEventContainer}>
      <h2>Add new event</h2>
      <NewEventsForm />
    </div>
  );
};

export default index;
