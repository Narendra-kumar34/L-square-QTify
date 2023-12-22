import React from "react";
import Searchbox from "./searchBox.js";
import Button from "./Button";
import { ReactComponent as Logo } from "../assets/qtify-icon.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
        <Logo />
        </div>
        <Searchbox placeholder="Search a album of your choice" />
        <Button>Give Feedback</Button>
      </div>
    </nav>
  );
}
