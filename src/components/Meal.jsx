const Meal = ({ data }) => {
  return (
    <li className="meal">
      <h3>{data?.name}</h3>
      <ul className="meal-data-list">
        <li>{data?.calories} calories</li>
        <li>{data?.fat_total_g} fat</li>
        <li>{data?.protein_g} protein</li>
      </ul>
    </li>
  );
};

export default Meal;
