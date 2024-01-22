import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/Recipes.css'

const Recipes = () => {
  const apiRecKey = import.meta.env.VITE_RECIPE_API_KEY;

  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [apiRequest, setApiRequest] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)



  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${min}&maxCalories=${max}&number=3`,
        {
          headers: { "X-Api-Key": apiRecKey, "Content-Type": "application/json" },
        }
      );
      setRecipes(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiRequest) {
      fetchData();
      setApiRequest(false);
    }
  }, [apiRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiRequest(true);
    console.log(max);
    console.log(min);
    console.log(recipes);
  }

  const handleMaxChange = (e) => {
    setMax(e.target.value)
  }

  const handleMinChange = (e) => {
    setMin(e.target.value)
  }



  return (

    <div>
      <h1>Recipes</h1>
      <h2>Here are some recipes for you</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="calories">Max g Calories:</label>
        <input
          type="number"
          value={max}
          onChange={handleMaxChange}
        />
        <label htmlFor="grams">Min g Calories:</label>
        <input type="number" value={min} name="grams" onChange={handleMinChange}/>
        <button type="submit">Search</button>
      </form>

      {recipes ? recipes.map((recipe) => {
        return (
          <div key={recipe.id} className='recipe-card'>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt="recipe" />
            <p>{recipe.summary}</p>
            <p>Calories: {recipe.calories}</p>
            <p>Fat: {recipe.fat}</p>
            <p>Proteine: {recipe.protein}</p>
            <p>Carbs: {recipe.carbs}</p>
          </div>
        )
      }) 
    : <h2>No Results</h2>}
    </div>


  )


}

export default Recipes;