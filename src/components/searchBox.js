import React from "react";
import styles from "./SearchBox.module.css";
import { ReactComponent as SearchIcon} from "../assets/search-icon.svg";

export default function Searchbox({placeholder}){
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <input className={styles.search} placeholder={placeholder} required/>
            <button className={styles.searchButton} type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}