import React, { useEffect, useRef, useState } from 'react'
import "./TitleCrads.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNmYTZlM2VkMjczN2JmYmZjYTlmNzUwYTQxNDFlNyIsIm5iZiI6MTczMDE5NDMyNS4yMzA2NDEsInN1YiI6IjY3MjBhOTE0NmQ2YjcwNWRjODcyMTgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1H83f_eViFX1FvYkUmg4JiamOv1cMJMUlRhqSpifzMc'
    }
  };

  const scrollLeft = () => {
    cardsRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
  };

  const scrollRight = () => {
    cardsRef.current.scrollLeft += 300;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <div className='title-cards' ref={cardsRef}>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <button className="scroll-button left" onClick={scrollLeft}></button>
      <button className="scroll-button right" onClick={scrollRight}></button>
      <div className='card-list'>
        {apiData.map((each, index) => (
          <Link to={`/player/${each.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${each.backdrop_path}`} alt="" />
            <p>{each.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
