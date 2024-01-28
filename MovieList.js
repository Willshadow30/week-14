import React from 'react';
import Movie from './Movie'; // Import movie component 

const MovieList =({movies}) =>{
    return (
        <div>
         {movies.map(movie => (
            <Movie Key={movie.id} movie={movie} />
         ))}   
        </div>
    );
};

export default MovieList; // Export movie list component