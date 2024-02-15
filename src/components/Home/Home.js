// components/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useDispatch } from 'react-redux';
import { setMediaType } from '../../redux/features/mediaType/mediaTypeSlice';

export const Home = () => {
  // Utiliza el hook useDispatch para obtener la función dispatch de Redux
    const dispatch = useDispatch();

return (
    <div className={styles.home}>
        <div className={styles.banner}>
                <h1 className={styles.title}>Bienvenido a tu sitio favorito</h1>
                <p className={styles.subtitle}>Descubre miles de películas y series</p>
            </div>

    <div className={styles.buttonContainer}>
        {/* Al hacer clic en el botón de Series, se despacha la acción setMediaType con 'series' como argumento */}
        <Link to="/movies">
            <button className={styles.startButton} onClick={() => dispatch(setMediaType('series'))}>Series</button>
        </Link>
        {/* Al hacer clic en el botón de Películas, se despacha la acción setMediaType con 'movies' como argumento */}
        <Link to="/movies">
            <button className={styles.startButton1} onClick={() => dispatch(setMediaType('movies'))}>Peliculas</button>
        </Link>
    </div>
    </div>
);
};

export default Home;
