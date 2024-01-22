import "../styles/TotalResults.css";

const TotalResults = () => {
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

  const testMeals = [
    {
      id: 0,
      calories: 220,
      carbs: 500,
      protein: 20,
      fat: 50,
    },
    {
      id: 1,
      calories: 200,
      carbs: 456,
      protein: 70,
      fat: 50,
    },
    {
      id: 2,
      calories: 136,
      carbs: 340,
      protein: 13,
      fat: 60,
    },
  ];

  const calculateTotal = (meals, nutrient) => {
    return meals.reduce((acc, meal) => acc + meal[nutrient], 0);
  };

  const totalCalories = calculateTotal(testMeals, "calories");
  const totalCarbs = calculateTotal(testMeals, "carbs");
  const totalProtein = calculateTotal(testMeals, "protein");
  const totalFat = calculateTotal(testMeals, "fat");

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
