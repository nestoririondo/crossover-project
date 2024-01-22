import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NutritionContext } from "../provider/NutritionContext";
import Meal from "./Meal";

const MealsToday = () => {
  const { allNutritions, setAllNutritions, search, formattedResults, setFormattedResults } =
    useContext(NutritionContext);
  const [allMeals, setAllMeals] = useState([]);

  useEffect(() => {
    setAllMeals([...allMeals, ...search]);
  }, [search]);

  useEffect(() => {
    const dataForTotalResults = allMeals.map((meal, index) => ({
      id: index,
      calories: meal.calories,
      carbs: meal.carbohydrates_total_g,
      protein: meal.protein_g,
      fat: meal.fat_total_g,
    }));

    console.log("All meals", allMeals);
    setFormattedResults(dataForTotalResults);
  }, [allMeals]);

  return (
    <section>
      <ul>{allMeals && allMeals.map((meal) => <Meal data={meal} key={meal.name} />)}</ul>
    </section>
  );
};

export default MealsToday;
