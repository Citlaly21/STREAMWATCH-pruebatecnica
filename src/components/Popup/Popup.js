import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../../redux/features/popUp/popupSlice';

function Popup() {

  const { isOpen, movie } = useSelector(state => state.popup);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closePopup());
  };

  if (!isOpen || !movie) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <img src={movie.images['Poster Art'].url} alt={movie.title} />
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
