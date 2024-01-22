import axios from "axios";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { NutritionContext } from "../provider/NutritionContext";

const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const { search, setSearch } = useContext(NutritionContext);
  const [searchInput, setSearchInput] = useState("");
  const [apiRequest, setApiRequest] = useState(null);
  const [grams, setGrams] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/nutrition?query=${searchInput}`,
        {
          headers: { "X-Api-Key": apiKey },
        }
      );
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
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
