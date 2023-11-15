import React from "react";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchMovies = async (e) => {
    e.preventDefault();

    API_Key = "7142fbe4";
    searchUrl = `https://www.omdbapi.com/?s=${query}&apikey=${API_Key}`;
    try {
      const response = await fetch(`searchUrl`);
      const data = await response.json();
      setMovies(data.results);
      
    } catch (error) {
      console.log(error);
    
  }

};
}

export default MovieCard;
