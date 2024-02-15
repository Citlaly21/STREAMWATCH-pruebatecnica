import React from 'react';
import styles from './MovieCard.module.css';

export function MovieCard({ title, description, programType, releaseYear, images, onClick }) {
  const imageUrl = images && images["Poster Art"] && images["Poster Art"].url;

  return (
    <div className={styles.movieCardContainer} onClick={onClick}>
      {imageUrl && (
        <img
          width={200}
          height={300}
          className={styles.movieImage}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.movieInfo}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
