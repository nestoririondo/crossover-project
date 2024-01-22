import React from 'react';
import "../styles/Homepage.css";
import { useContext } from 'react';
import { NutritionContext } from "../provider/NutritionContext";
import { useNavigate } from 'react-router-dom/dist';



const Homepage = () => {
  const navigate = useNavigate();
  const { allSelections, setAllSelections } = useContext(NutritionContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setAllSelections(data);

    navigate('/home');

  }

  console.log(allSelections);

  return (
    <div className='home-page-wrap'>
      <img src="https://www.nbac.us/wp-content/uploads/2021/09/workout-fitness-dieting-healthy-food-clean-eating-selection-with-fruits-vegetables-dumbbell-selection-healthy-food-concept_1150-37829.jpg" alt="pic" className='imgHome' />
    
    <div className='homepage'>
      <h1>Let's get started!</h1>
      <h2>Fill in your details below</h2>
      <form onSubmit={handleSubmit} >
       <label htmlFor="gender">Gender:</label>
       <select name="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
        </select>
        <label htmlFor="age">Age (y):</label>
        <input type="number" name="age"/>
        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" name="weight"/>
        <label htmlFor="height">Height (cm):</label>
        <input type="number" name="height" />
        <label htmlFor="calories">Max g Calories Today:</label>
        <input type="number" name="calories" />
        <label htmlFor="carbs">Max g Carbs:</label>
        <input type="number" name="carbs" />
        <label htmlFor="proteine">Max g Proteine:</label>
        <input type="number" name="proteine" />
        <label htmlFor="fat">Max g Fat:</label>
        <input type="number" name="fat" />
        <button type="submit">GO</button>
      </form> 
    </div>
    </div>
  )
}

export default Homepage;