import React from 'react';
import './Count.css'

const Count = (props) => {
     const { count } = props;

     let item;
     for (const meal of count) {
          item = meal.strMeal;
     }


     return (
          <div className="count-add">
               <h1>meal summery</h1>
               <h4>total item: {count.length}</h4>
               <h5> name :{item}</h5>

          </div>
     );
};

export default Count;