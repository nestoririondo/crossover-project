import axios from "axios";
import React, { useState, useEffect } from "react";
import { useContext, useRef } from "react";
import { NutritionContext } from "../provider/NutritionContext";
import "../styles/search.css";

const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const { search, setSearch } = useContext(NutritionContext);
  const [searchInput, setSearchInput] = useState("");
  const [apiRequest, setApiRequest] = useState(null);
  const theInput = useRef();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${searchInput}`, {
        headers: { "X-Api-Key": apiKey },
      });
      setSearch(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    if (apiRequest) {
      fetchData();
    }
  }, [apiRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiRequest(searchInput);
    e.target[0].value = "";
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <section id="search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          autoFocus
          type="text"
          placeholder="Search"
          ref={theInput}
          defaultValue={searchInput}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Search;
