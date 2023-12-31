import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.list}>
        <Link
          href="/"
          className={router.pathname === "/" ? `${styles.active}` : " "}
        >
          HOME
        </Link>
        <Link
          href="/events"
          className={router.pathname === "/events" ? `${styles.active}` : " "}
        >
          EVENTS
        </Link>
        <Link
          href="/new-event"
          className={
            router.pathname === "/new-event" ? `${styles.active}` : " "
          }
        >
          NEW EVENT
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
