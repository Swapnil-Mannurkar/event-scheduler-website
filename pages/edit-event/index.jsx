import React from "react";
import EditEventForm from "@/components/editEvent/EditEventForm";
import styles from "./EditEvent.module.css";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className={styles.editEventContainer}>
      <h1>
        Edit{" "}
        <span
          style={{ textDecoration: "underline", textTransform: "lowercase" }}
        >
          {title}
        </span>{" "}
        event
      </h1>
      <EditEventForm />
    </div>
  );
};

export default index;
