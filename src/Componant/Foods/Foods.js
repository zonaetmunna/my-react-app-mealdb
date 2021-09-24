import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import Meal from '../Meal/Meal';
import './Foods.css'

const Foods = () => {
     const [meals, setMeals] = useState([])

     const [count, setCount] = useState([])
     const [displySearch, setDisplySearch] = useState([])

     useEffect(() => {
          fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
               .then(res => res.json())
               .then(data => {
                    setMeals(data.meals)
                    setDisplySearch(data.meals)
                    console.log(data.meals)
               })
     }, [])

     // handle meal list
     const handleMealCount = (meal) => {
          const newCount = [...count, meal]
          setCount(newCount);


     }

     // handle searchS
     const handleSearch = (event) => {
          const textSeach = event.target.value;
          const matchSearh = meals.filter(meal => meal.strMeal.toLowerCase.includes(textSeach.toLowerCase()));
          console.log(matchSearh);
          setDisplySearch(matchSearh);
          console.log(textSeach)
     }

     return (
          <div className="main">
               <div className="search-container">
                    <input type="text"
                         onChange={handleSearch}
                         placeholder="Search" />
               </div>

               <div className="food">
                    <div className="foods-container">
                         {
                              displySearch.map(meal => <Meal
                                   key={meal.key}
                                   meal={meal}
                                   handleMealCount={handleMealCount}
                              ></Meal>)
                         }

                    </div>
                    <div className="food-count">
                         <Count count={count}></Count>

                    </div>
               </div>

          </div>

     );
};

export default Foods;