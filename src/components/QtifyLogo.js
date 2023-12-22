import React from "react";
import qtifyLogo from "../assets/qtify-logo.png";
import styles from "./QtifyLogo.module.css";

export default function QtifyLogo(){
    return(
        <div className={styles.logo}>
        <img src={qtifyLogo} alt="qtify logo" />
        </div>
    )
}