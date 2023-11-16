import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Head/Header.jsx';
import CardComponent from './components/MovieCard/Card.jsx';

function App() {
  const [apiData, setApiData] = useState([]);
  const [queryUrl, setQueryUrl] = useState("Avengers");
  const fetchData = async () => {
    const url = `https://www.omdbapi.com/?s=${queryUrl}&apikey=7142fbe4`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setApiData(result.Search || []);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [queryUrl]);

  return (
    <>
      <div className="App">
        <Header onSearch={setQueryUrl} />
        <CardComponent data={apiData} />
      </div>
    </>
  );
}

export default App;