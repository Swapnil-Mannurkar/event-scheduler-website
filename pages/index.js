import Head from "next/head";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Event Scheduling Website</title>
        <meta name="description" content="This is an event scheduling website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.landingPageContainer}>
          <h1>Welcome to event scheduling website</h1>
          <div className={styles.homeButtons}>
            <Link href="/events">
              <button>upcoming events</button>
            </Link>
            <Link href="/new-event">
              <button>add new event</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
