import React from "react";
import styles from "./LandingPage.module.css";
import Hero from "../components/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../components/Section";

export default function LandingPage(){
    const { data } = useOutletContext();
    const { topAlbums , newAlbums , songs } = data;
    return(
        <>
        <Hero />
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
        </div>
        </>
    );
}