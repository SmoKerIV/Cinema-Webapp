import React from "react";
import "./Header.css";
import search from "../../assets/search.svg";
import X from "../../assets/x.svg";
function Header({ onSearch }) {
  const[queryUrl, setQueryUrl] = React.useState('');
  const handelSearch=()=>{
    onSearch(queryUrl);
    console.log(queryUrl);
  }
  const handelClear=()=>{
    setQueryUrl('');
    onSearch('Avengers');
  }

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Aon Cinema</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={queryUrl}
          onChange={(e) => setQueryUrl(e.target.value)}
        />
        <button onClick={handelClear}>
          <img src={X} alt="Clear" id="x" />
        </button>
        <button onClick={handelSearch}>
          <img src={search} alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default Header;
