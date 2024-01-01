import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "./Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../carousel/Carousel";
import Filters from "./Filters";

export default function Section({ title, data, type, filterSource }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilter, setSelectedFilter] = useState(0);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilter !== 0
      ? card.genre.key === filters[selectedFilter].key
      : card
  );

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </h4>
      </div>
      {showFilters && <div className={styles.filterWrapper}><Filters filters={filters} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} /></div>}
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {carouselToggle ? (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          ) : (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
