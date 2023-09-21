import React from "react";
import EventCard from "../../components/events/EventCard";
import styles from "../../styles/events.module.css";
import { useSelector } from "react-redux";

const index = () => {
  const eventData = useSelector((state) => state.eventData);

  return (
    <div className={styles.eventsContainer}>
      {eventData.map((event) => (
        <EventCard
          image={event.image}
          title={event.title}
          date={event.date}
          time={event.time}
          location={event.location}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default index;
