import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieCard } from "../MovieCard/MovieCard";
import { useLocation } from "react-router-dom";
import { setResultsPerPage, goToNextPage, goToPreviousPage } from '../../redux/features/movies/moviesSlice';
import moviesData from '../../data/movies.json';

export function MoviesGrid() {
  const mediaType = useSelector((state) => state.mediaType);
  const movies = moviesData.entries.filter(movie => movie.programType === mediaType);
  const location = useLocation();
  const dispatch = useDispatch();
  const { entries, page, resultsPerPage } = useSelector((state) => state.movies);
  

  const filteredMovies = mediaType === 'movies'
    ? entries.filter(movie => movie.programType === 'movie' && movie.releaseYear >= 2010)
    : entries.filter(movie => movie.programType === 'series' && movie.releaseYear >= 2010);

  filteredMovies.sort((a, b) => a.title.localeCompare(b.title));

  const totalPages = Math.ceil(filteredMovies.length / resultsPerPage);
  const startIndex = (page - 1) * resultsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, startIndex + resultsPerPage);
  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return; 
    }
    if (newPage < page) {
      dispatch(goToPreviousPage()); 
    } else {
      dispatch(goToNextPage());
    }
  };

  return (
    <div>
      <div>
        <select value={resultsPerPage} onChange={(e) => dispatch(setResultsPerPage(parseInt(e.target.value)))} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginRight: '10px' }}>
          <option value={5}>5 resultados</option>
          <option value={10}>10 resultados </option>
          <option value={20}>20 resultados </option>
        </select>
      </div>

      <ul className="moviesGrid">
        {paginatedMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            images={movie.images}
          />
        ))}
      </ul>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={() => changePage(page - 1)} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginRight: '10px' }}>Página Anterior</button>
        <button onClick={() => changePage(page + 1)} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Próxima Página</button>
      </div>
    </div>
  );
}
