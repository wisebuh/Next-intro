import Link from "next/link";
import classes from "@/components/layout/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>
          <Link href="/">Next Event</Link>
        </h1>
      </div>

      <nav className={classes.navigation} aria-label="Main navigation">
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}