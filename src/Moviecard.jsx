import React from 'react';
import './Moviecard.css'; // Assuming you have a separate CSS file for this component

const Moviecard = ({ movie }) => {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400';

  return (
    <div className='movie-card'>
      <div className='movie-info'>
        <p className='movie-year'>{movie.Year}</p>
        <span className='movie-type'>{movie.Type}</span>
      </div>
      <img src={posterUrl} alt={movie.Title} className='movie-poster' />
      <h3 className='movie-title'>{movie.Title}</h3>
    </div>
  );
};

export default Moviecard;
