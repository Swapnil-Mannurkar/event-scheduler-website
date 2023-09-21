import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.list}>
        <Link href="/">HOME</Link>
        <Link href="/events">EVENTS</Link>
        <Link href="/new-events">NEW EVENT</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
