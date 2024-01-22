import React from "react";
import { useContext } from "react";
import { NutritionContext } from "../provider/NutritionContext";

const MealsToday = () => {
  const { allNutritions, setAllNutritions } = useContext(NutritionContext);
  const results = {
    totalFat: 0,
    totalCarbs: 0,
    totalProtein: 0,
    totalCalories: 0,
  };



  return <div>MealsToday</div>;
};

export default MealsToday;
