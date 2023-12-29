import React from "react";
import styles from "./Card.module.css";
import {Chip, Tooltip} from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ data, type }) {
  const getData = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`album/${slug}`} >
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt={title} loading="lazy" />
                <div className={styles.banner}>
                  <Chip 
                  className={styles.chip}
                  label={`${follows} Follows`}
                  size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { likes, image, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt={title} loading="lazy" />
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getData(type);
}
