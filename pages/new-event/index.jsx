import React from "react";
import styles from "./NewEvent.module.css";
import NewEventsForm from "@/components/newEvents/NewEventsForm";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Add new event</title>
      </Head>
      <div className={styles.newEventContainer}>
        <h2>Add new event</h2>
        <NewEventsForm />
      </div>
    </>
  );
};

export default index;
