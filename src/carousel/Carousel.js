import React, { useEffect } from 'react';
import styles from './Carousel.module.css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import CarouselLeftNav from './CarouselLeftNav';
import CarouselRightNav from './CarouselRightNav';

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    },[data])
    return <></>
}

export default function Carousel({data, renderComponent}) {
  return (
    <div className={styles.wrapper}>
    <Swiper
      style={{padding: "0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
    <Controls data={data} />
    <CarouselLeftNav />
    <CarouselRightNav />
    {data.map((ele) => <SwiperSlide>{renderComponent(ele)}</SwiperSlide>)}
    </Swiper>
    </div>
  );
};