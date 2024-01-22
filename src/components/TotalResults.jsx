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

  const calcProtein = (dailyObjective) => {
    return {
      min: dailyObjective.weight * 1.4,
      max: dailyObjective.weight * 2.4,
    };
  };

  const calcFat = (dailyObjective) => {
    return {
      min: dailyObjective.weight * 0.3,
      max: dailyObjective.weight * 0.4,
    };
  };

  const calcCarbs = (dailyObjective) => {
    return {
      min: dailyObjective.weight * 1.5,
      max: dailyObjective.weight * 2,
    };
  };

  const dailyProtein = calcProtein(dailyObjective);
  const dailyFat = calcFat(dailyObjective);
  const dailyCarbs = calcCarbs(dailyObjective);

  //   To calculate fat:

  //       Convert body weight in pounds to kg’s (round to the nearest 10th)
  //       150lbs / 2.2 = 68.2kg
  //       Multiply weight in kilograms by 1
  //       68g of fat needed per day

  //       See this blog on How Much Fat Per Day for Weight Loss to learn more.

  //   Third: Calculate Daily Carbohydrate needs

  //   The Dietary Guidelines for Americans recommends that carbohydrates should make up 45-65% of one’s daily calories.

  //   Step 1: Calculating grams of carbohydrates. Multiply daily calorie requirements by 0.45 & 0.65 to obtain calories from carbohydrates.

  //       0.45(2000) = 900 calories
  //       0.65(2000) = 1300 calories

  //   Step 2: Divide answers in step 1 by 4 since there are 4 calories per 1 gram of carbohydrate

  //       900/4 = 225g
  //       1300/4 = 325g

  //       See this blog on How Many Carbs Per Day for Weight Loss to learn more.

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
        <div>
          {dailyCarbs.min} - {dailyCarbs.max}
        </div>
        <div>
          {dailyProtein.min} - {dailyProtein.max}
        </div>
        <div>
          {dailyFat.min} - {dailyFat.max}
        </div>
      </div>
    </div>
  );
};

export default TotalResults;
