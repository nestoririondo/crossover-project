import "../styles/TotalResults.css";
import { useContext } from "react";
import { NutritionContext } from "../provider/NutritionContext";

const TotalResults = () => {
  const { formattedResults, allSelections } = useContext(NutritionContext);

  const calculateTotal = (meals, nutrient) => {
    return meals.reduce((acc, meal) => acc + meal[nutrient], 0).toFixed(2);
  };

  const totalCalories = calculateTotal(formattedResults, "calories");
  const totalCarbs = calculateTotal(formattedResults, "carbs");
  const totalProtein = calculateTotal(formattedResults, "protein");
  const totalFat = calculateTotal(formattedResults, "fat");
  const consumed = {
    totalCalories,
    totalCarbs,
    totalProtein,
    totalFat,
  };


  const calcAmounts = (allSelections, nutrient, min, max) => {
    return {
      min: (allSelections[nutrient] * min).toFixed(2),
      max: (allSelections[nutrient] * max).toFixed(2),
    };
  };

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

  const dailyProtein = calcAmounts(allSelections, "proteine", 1.2, 2.2);
  const dailyFat = calcAmounts(allSelections, "fat", 0.3, 0.4);
  const dailyCarbs = calcAmounts(allSelections, "carbs", 1.5, 2);
  const bmr = calcBMR(allSelections).toFixed(2);

  console.log(totalCalories, allSelections.calories);
  return (
    <section className="totalresults">
      <div className="consumed">
        <h3>Today you have consumed</h3>
        <div>{totalCalories} kCal</div>
        <div>{totalCarbs} g carbs</div>
        <div>{totalProtein} g protein</div>
        <div>{totalFat} g fat</div>
      </div>
      <div className="objective">
        <h3 className="your-daily">Your daily objective</h3>
        {allSelections.calories && (
          <div
            className={
              Number(totalCalories) < Number(allSelections.calories)
                ? "green"
                : "red"
            }
          >
            {allSelections.calories} <span>kCal</span>
          </div>
        )}
        {allSelections.carbs && (
          <div
            className={
              Number(totalCarbs) < Number(allSelections.carbs) ? "green" : "red"
            }
          >
            {allSelections.carbs} <span>g carbs</span>
          </div>
        )}
        {allSelections.proteine && (
          <div
            className={
              Number(totalProtein) < Number(allSelections.proteine)
                ? "green"
                : "red"
            }
          >
            {allSelections.proteine} <span>g protein</span>
          </div>
        )}
        {allSelections.fat && (
          <div
            className={
              Number(totalFat) < Number(allSelections.fat) ? "green" : "red"
            }
          >
            {allSelections.fat} <span>g fat</span>
          </div>
        )}
      </div>
      <div className="ideal">
        <h3>Your ideal daily intake</h3>
        <p>{bmr} kCal</p>
        <p>
          {dailyCarbs.min} - {dailyCarbs.max} g carbs
        </p>
        <p>
          {dailyProtein.min} - {dailyProtein.max} g protein
        </p>
        <p>
          {dailyFat.min} - {dailyFat.max} g fat
        </p>
      </div>
    </section>
  );
};

export default TotalResults;
