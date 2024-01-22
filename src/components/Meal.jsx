import { useEffect } from "react";
import deleteIcon from "../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import "../styles/mealsToday.css";

const Meal = ({ data, allMeals, setAllMeals }) => {
  const deleteMeal = (name) => {
    setAllMeals(allMeals.filter((meal) => meal.name != name));
  };

  const changeGrams = (name, newServingSize) => {
    if (newServingSize > 0) {
      setAllMeals(
        allMeals.map((meal) => {
          if (meal.name === name) {
            const scale = newServingSize / meal.serving_size_g;
            return {
              ...meal,
              serving_size_g: newServingSize,
              calories: parseFloat((meal.calories * scale).toFixed(1)),
              fat_total_g: parseFloat((meal.fat_total_g * scale).toFixed(1)),
              protein_g: parseFloat((meal.protein_g * scale).toFixed(1)),
              carbohydrates_total_g: parseFloat((meal.carbohydrates_total_g * scale).toFixed(1)),
            };
          } else {
            return meal;
          }
        })
      );
    }
  };

  return (
    <li className="meal">
      <div className="nameAndQuantity">
        <input
          type="number"
          defaultValue={100}
          onChange={(e) => changeGrams(data.name, e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "-") e.preventDefault();
          }}
        />
        g<h3>{data?.name}</h3>
      </div>

      <ul className="meal-data-list">
        <li>{data?.calories} calories</li>
        <li>{data?.fat_total_g}g fat</li>
        <li>{data?.protein_g}g protein</li>
        <li>{data?.carbohydrates_total_g}g carbs</li>
      </ul>
      <img src={deleteIcon} alt="delete icon" onClick={() => deleteMeal(data.name)} />
    </li>
  );
};

export default Meal;
