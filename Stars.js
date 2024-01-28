import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ rating, setRating }) => {
    return (
      <div>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <FontAwesomeIcon 
              key={index} 
              icon={ratingValue <= rating ? fullStar : emptyStar} 
              color={ratingValue <= rating ? "gold" : "grey"}
              onClick={() => setRating(ratingValue)} // Add this line
            />
          );
        })}
      </div>
    );
  };
  
  export default Stars
