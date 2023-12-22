import React from "react";
import Searchbox from "./searchBox.js";
import Button from "./Button";
import styles from "./Header.module.css";
import QtifyLogo from "./QtifyLogo.js"

export default function Header() {
  return (
    <nav>
      <div className={styles.navContainer}>
        <QtifyLogo />
        <Searchbox placeholder="Search a album of your choice" />
        <Button>Give Feedback</Button>
      </div>
    </nav>
  );
}
