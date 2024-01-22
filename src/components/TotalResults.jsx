import "../styles/TotalResults.css";
import { useContext } from "react";
import { NutritionContext } from "../provider/NutritionContext";

const TotalResults = () => {
  const { formattedResults } = useContext(NutritionContext);

  console.log("From TotalResults:", formattedResults);

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

  const calcBMR = (dailyObjective) => {
    return dailyObjective.gender === "male"
      ? 66.5 +
          13.75 * dailyObjective.weight +
          5 * dailyObjective.height -
          6.75 * dailyObjective.age
      : 655.1 +
          9.563 * dailyObjective.weight +
          1.85 * dailyObjective.height -
          4.676 * dailyObjective.age;
  };

  const bmr = calcBMR(dailyObjective).toFixed(2);

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
        <div>{dailyObjective.calories}</div>
        <div>{dailyObjective.carbs}</div>
        <div>{dailyObjective.protein}</div>
        <div>{dailyObjective.fat}</div>
      </div>
      <div className="ideal">
        <div>Your ideal daily intake</div>
        <div>{bmr}</div>
      </div>
    </div>
  );
};

export default TotalResults;
