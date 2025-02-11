import { useState } from 'react';
import { cyclistList } from './data';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < cyclistList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePreviousClick() {
    setIndex(hasPrevious ? index - 1 : cyclistList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let cyclist = cyclistList[index];

  return (
    <div className="gallery">
      <h1>Al Vincent Feliciano</h1>

      <div className="buttons">
        <button onClick={handlePreviousClick}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>

      <h2><i>{cyclist.name}</i></h2>
      <h3>({index + 1} of {cyclistList.length})</h3>

      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>

      {showMore && (
        <div className="description">
          <p>{cyclist.description}</p>
        </div>
      )}

      <img src={cyclist.url} alt={cyclist.alt} />
    </div>
  );
}
