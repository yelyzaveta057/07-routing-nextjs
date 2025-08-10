import css from "./Header.module.css";
import React from "react";
import Link from "next/link";

export default function  Header () {
    return <header className={css.header}>
  <Link href="/" aria-label="Home">
    NoteHub
  </Link>
  <nav aria-label="Main Navigation">
    <ul className={css.navigation}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/notes">Notes</Link>
      </li>
    </ul>
  </nav>
</header>
};

