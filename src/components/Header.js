import React from "react";
import Searchbox from "./searchBox.js";
import Button from "./Button";
import styles from "./Header.module.css";
import qtifyLogo from "../assets/qtify-logo.png";

export default function Header() {
  return (
    <nav>
      <div className={styles.navContainer}>
        <img src={qtifyLogo} alt="qtify logo" />
        <Searchbox placeholder="Search a album of your choice" />
        <Button>Give Feedback</Button>
      </div>
    </nav>
  );
}
