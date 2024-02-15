import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { MoviesGrid } from './components/MoviesGrid/MoviesGrid';
import moviesData from './data/movies.json';
import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { setMediaType } from './redux/features/mediaType/mediaTypeSlice';

export function App() {
  const [type, setType] =  useSelector((state) => state.mediaType);
  
  return (
    <Router>
      <div>
        <header>
          <h1 className={styles.title}>STREAMWATCH</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home type={type} setType={setType} />}
            />
            <Route
              path="/movies"
              element={<MoviesGrid movies={moviesData.entries.filter(movie => movie.programType === 'movie')} />}
            />
            <Route
              path="/series"
              element={<MoviesGrid movies={moviesData.entries.filter(movie => movie.programType === 'series')} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
