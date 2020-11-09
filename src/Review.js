import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const changeReview = (e) => {
    e.stopPropagation()

    let newReview = currentReview;
    switch(e.target.className) {
      case "prev-btn":
        newReview = currentReview ? currentReview - 1 : 3
        break
      case "next-btn":
        newReview = (currentReview + 1) % 4
        break
      default: //        case "random-btn":
        newReview = Math.floor(Math.random() * Math.floor(4))
        break
    }
    setCurrentReview(newReview)
  }

  return (
    <section className="review">
      <header className="info">
        <div className="img-container">
          <img
            className="person-img"
            src={people[currentReview].image}
            alt=""/>
          <i className="quote-icon"><FaQuoteRight /></i>
        </div>
        <h4 className="author">{people[currentReview].name}</h4>
        <div className="job">{people[currentReview].job}</div>
      </header>

      <p>{people[currentReview].text}</p>

      <footer>
        <button className="prev-btn" onClick={changeReview} aria-label="Previous Review">
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={changeReview} aria-label="Next Review">
          <FaChevronRight />
        </button>
        <br/>
        <button className="random-btn" onClick={changeReview}>
          surprise Me
        </button>
      </footer>
    </section>
  );
};

export default Review;
