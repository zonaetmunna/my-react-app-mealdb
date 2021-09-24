import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Meal = (props) => {
     console.log(props.meal)
     const { strMeal, strMealThumb, strInstructions, strCategory } = props.meal;
     const element = <FontAwesomeIcon icon={faShoppingCart} />

     return (
          <div className="meal-container">
               <div className="meal-thumnail">
                    <img src={strMealThumb} alt="" />
               </div>
               <div className="meal-details">
                    <h1>{strMeal}</h1>
                    <p>{strCategory}</p>
                    <p>{strInstructions.slice(0, 100)}</p>
                    <button

                         onClick={() => props.handleMealCount(props.meal)}>{element} add to list</button>
               </div>

          </div>
     );
};

export default Meal;