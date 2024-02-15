import React, { useState } from 'react';
import styles from './MovieCard.module.css';

export function MovieCard({ title, description, programType, releaseYear, images }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl = images && images["Poster Art"] && images["Poster Art"].url;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.movieCardContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img
        className={styles.movieImage}
        src={imageUrl}
        alt={title}
      />
      
      <div className={styles.movieInfo}>
        <h2>{title}</h2>
        {isHovered && (
          <div className={styles.popup}>
            <p>Description: {description}</p>
            <p>Program Type: {programType}</p>
            <p>Release Year: {releaseYear}</p>
          </div>
        )}
      </div>
      
    </div>
  );
}
