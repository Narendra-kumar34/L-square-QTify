import React, {useState, useEffect} from "react";
import styles from "./CarouselLeftNav.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../assets/LeftArrow.svg";

export default function CarouselLeftNav() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        },[])
    });

    return(
        <div className={styles.leftNav}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}