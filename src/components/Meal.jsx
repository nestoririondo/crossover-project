import deleteIcon from "../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import "../styles/mealsToday.css";

const Meal = ({ data }) => {
  return (
    <li className="meal">
      <h3>{data?.name}</h3>
      <ul className="meal-data-list">
        <li>{data?.calories} calories</li>
        <li>{data?.fat_total_g}g fat</li>
        <li>{data?.protein_g}g protein</li>
        <li>{data?.carbohydrates_total_g}g carbs</li>
      </ul>
      <img src={deleteIcon} alt="delete icon" id={data?.name} />
    </li>
  );
};

export default Meal;
