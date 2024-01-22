import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NutritionContext } from "../provider/NutritionContext";

const MealsToday = () => {
  const { allNutritions, setAllNutritions, search } = useContext(NutritionContext);
  const [allMeals, setAllMeals] = useState([]);
  const [formattedResults, setFormattedResults] = useState([]);

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

    console.log(dataForTotalResults);
    setFormattedResults(dataForTotalResults);
  }, [allMeals]);

  useEffect(() => {
    console.log("FORMATTED", formattedResults);
  }, [formattedResults]);

  return <div>MealsToday</div>;
};

export default MealsToday;
