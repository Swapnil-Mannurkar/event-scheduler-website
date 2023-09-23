import React from "react";
import EventCard from "../../components/events/EventCard";
import styles from "./events.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const index = () => {
  const eventData = useSelector((state) => state.eventData);
  const isEmpty = eventData.length === 0;
  console.log(isEmpty);

  return (
    <div className={styles.eventsContainer}>
      {eventData.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          time={event.time}
          location={event.location}
          description={event.description}
        />
      ))}
      {isEmpty && (
        <div className={styles.emptyEventContainer}>
          <h1>No event scheduled!</h1>
          <div className={styles.emptyEventButtons}>
            <Link href="/new-event">
              <button>add new event</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
