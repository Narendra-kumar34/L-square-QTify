import React, {useState} from "react";
import styles from "./Section.module.css";
import Card from "./Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../carousel/Carousel";

export default function Section({title, data, type}){
    const [carouselToggle, setCarouselToggle] = useState(false);
    
    const handleToggle = () =>{
        setCarouselToggle((prevState) => !prevState);
    }
    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{carouselToggle ? "Show all" : "Collapse"}</h4>
            </div>
            {!data.length ? (
                <CircularProgress />
            ):(
                <div className={styles.cardWrapper}>
                    {carouselToggle ? (
                        <Carousel data={data} renderComponent={(data) => <Card data={data} type={type}/> } />
                    ) : (
                        <div className={styles.wrapper}>
                            {data.map((ele) => <Card data={ele} type={type} />)}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}