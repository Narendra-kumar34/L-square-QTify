import React from "react";
import styles from "./Hero.module.css";
import HeadphonePic from "../assets/headphone.png";

export default function Hero(){
    return(
        <div className={styles.heroContainer}>
            <div className={styles.heroSection}>
                <div>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>
                <div className={styles.heroImage}>
                    <img src={HeadphonePic} alt="headphone" />
                </div>
            </div>
        </div>
    )
}