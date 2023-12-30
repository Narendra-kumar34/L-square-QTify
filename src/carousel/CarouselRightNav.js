import React, {useState, useEffect} from "react";
import styles from "./CarouselRightNav.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../assets/RightArrow.svg";

export default function CarouselRightNav() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        },[])
    });

    return(
        <div className={styles.rightNav}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}