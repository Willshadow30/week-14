import React, { useState } from 'react'; // import react and usestate hook

const ReviewForm = ({ onReviewSubmit }) => {
  const [review, setReview] = useState(''); // store current review text

  const handleSubmit = (e) => { //function created to handle form submit
    e.preventDefault(); //stops default of form submit
    onReviewSubmit(review); // calls the onReviewSubmit review  function with current
    setReview('');// restart the  review text
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={review} 
        onChange={(e) => setReview(e.target.value)} //update state when text change
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
