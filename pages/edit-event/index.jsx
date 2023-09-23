import React from "react";
import EditEventForm from "@/components/editEvent/EditEventForm";
import styles from "./EditEvent.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const index = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <Head>
        <title>Edit event</title>
      </Head>
      <div className={styles.editEventContainer}>
        <h1>
          Edit{" "}
          <span style={{ color: "orange", textTransform: "lowercase" }}>
            {title}
          </span>{" "}
          event
        </h1>
        <EditEventForm />
      </div>
    </>
  );
};

export default index;
