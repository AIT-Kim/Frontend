// Ingredient.tsx

import React from 'react';
import styles from './Ingredient.module.css';

interface IngredientProps {
  type: string;
}




const Ingredient: React.FC<IngredientProps> = ({ type }) => {
//    console.log('Type:', type); 
//    console.log('Styles:', styles[type.toLowerCase()]); 
  
    const ingredientStyle = `${styles.ingredient} ${styles[type.toLowerCase()] || ''}`;

  return <div className={ingredientStyle}></div>;
};

export default Ingredient;
