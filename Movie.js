import React, { useState } from 'react';
import Stars from './Stars'; // Import to use stars component for rates
import ReviewList from './ReviewList'; // display list of reviews of movie
import ReviewForm from './ReviewForm';// allows user to submit view

const Movie = ({ movie }) => { // state for movie rating 
    const [rating, setRating] = useState(movie.rating); // Assuming movie has an initial rating
    const [reviews, setReviews] = useState(movie.reviews || []); // State for movie reviews, initialized with existing reviews or an empty array
    const addReview = (review) => { //Function to add a new review 
        setReviews([...reviews, review]); 
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.synopsis}</p>
            <Stars rating={rating} setRating={setRating} /> {/* Updated to include setRating */}
            <ReviewList reviews={reviews} />
            <ReviewForm onReviewSubmit={addReview} />
        </div>
    );
};

export default Movie;// Export Movie component 
