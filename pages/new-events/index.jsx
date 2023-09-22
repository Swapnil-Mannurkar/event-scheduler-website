import React from "react";
import styles from "../../styles/NewEvents.module.css";
import NewEventsForm from "@/components/newEvents/NewEventsForm";

const index = () => {
  return (
    <div className={styles.newEventContainer}>
      <h2>New event form</h2>
      <NewEventsForm /> 
    </div>
  );
};

export default index;
