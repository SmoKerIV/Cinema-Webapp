import React from "react";
import "./Card.css";

function CardComponent({ data }) {
 return (
    <div className="Mcard">
      {data.map((movie, index) => (
        <div className="card" key={index}>
          <div className="img">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="content">
            <h1>{movie.Title}</h1>
            <div className="info">
              <p>{movie.Year}</p>
              <p>
                <span>IMDb</span> {movie.imdbRating}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;

