import "../styles/TotalResults.css";
import { useContext } from "react";
import { NutritionContext } from "../provider/NutritionContext";

const TotalResults = () => {
  const { formattedResults, allSelections } = useContext(NutritionContext);

  console.log("From TotalResults:", formattedResults);
  console.log("From TotalResults:", allSelections);

  const dailyObjective = {
    calories: 2000,
    carbs: 200,
    protein: 100,
    fat: 50,
    age: 30,
    weight: 70,
    height: 170,
    gender: "female",
  };

  const calculateTotal = (meals, nutrient) => {
    return meals.reduce((acc, meal) => acc + meal[nutrient], 0).toFixed(2);
  };

  const totalCalories = calculateTotal(formattedResults, "calories");
  const totalCarbs = calculateTotal(formattedResults, "carbs");
  const totalProtein = calculateTotal(formattedResults, "protein");
  const totalFat = calculateTotal(formattedResults, "fat");

  const calcBMR = (allSelections) => {
    return allSelections.gender === "male"
      ? 66.5 +
          13.75 * allSelections.weight +
          5 * allSelections.height -
          6.75 * allSelections.age
      : 655.1 +
          9.563 * allSelections.weight +
          1.85 * allSelections.height -
          4.676 * allSelections.age;
  };

  const calcProtein = (allSelections) => {
    return {
      min: (allSelections.weight * 1.4).toFixed(2),
      max: (allSelections.weight * 2.4).toFixed(2),
    };
  };

  const calcFat = (allSelections) => {
    return {
      min: (allSelections.weight * 0.3).toFixed(2),
      max: (allSelections.weight * 0.4).toFixed(2),
    };
  };

  const calcCarbs = (allSelections) => {
    return {
      min: (allSelections.weight * 1.5).toFixed(2),
      max: (allSelections.weight * 2).toFixed(2),
    };
  };

  const dailyProtein = calcProtein(allSelections);
  const dailyFat = calcFat(allSelections);
  const dailyCarbs = calcCarbs(allSelections);
  const bmr = calcBMR(allSelections).toFixed(2);

  // Men: BMR = 66.5 + (13.75 x weight in kilos) + (5 x height in cm) – (6.75 x age in years)
  // Women: BMR = 655.1 + (9.563 X weight in kilos) + (1.85 X height in cm) – (4.676 x age in years)
  // Source: https://www.bmi-calculator.net/bmr-calculator/

  return (
    <div className="totalresults">
      <div className="consumed">
        <div>Today you have consumed</div>
        <div>{totalCalories} kCal</div>
        <div>{totalCarbs} g carbs</div>
        <div>{totalProtein} g protein</div>
        <div>{totalFat} g fat</div>
      </div>
      <div className="objective">
        <div>Your daily objective</div>
        <div>{allSelections.calories}</div>
        <div>{allSelections.carbs}</div>
        <div>{allSelections.proteine}</div>
        <div>{allSelections.fat}</div>
      </div>
      <div className="ideal">
        <div>Your ideal daily intake</div>
        <div>{bmr} kCal</div>
        <div>
          {dailyCarbs.min} - {dailyCarbs.max} g carbs
        </div>
        <div>
          {dailyProtein.min} - {dailyProtein.max} g protein
        </div>
        <div>
          {dailyFat.min} - {dailyFat.max} g fat
        </div>
      </div>
    </div>
  );
};

export default TotalResults;
