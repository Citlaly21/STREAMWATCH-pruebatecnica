import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ title, description, programType, releaseYear }) => {
  return (
    <div className={styles.popupContent}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Program Type: {programType}</p>
      <p>Release Year: {releaseYear}</p>
    </div>
  );
};

export default Popup;
