import React from "react";
import Searchbox from "./searchBox.js";
import Button from "./Button";
import styles from "./Header.module.css";
import QtifyLogo from "./QtifyLogo.js";
import { Link } from "react-router-dom";

export default function Header({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>
        <QtifyLogo />
      </Link>
      <Searchbox placeholder="Search a album of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
}
