// Sandwich.tsx

import React from 'react';
import Ingredient from './Ingredient';
import styles from './Sandwich.module.css';

interface SandwichProps {
  ingredients: string[];
  isEaten: boolean;
}

const Sandwich: React.FC<SandwichProps> = ({ ingredients, isEaten }) => {
//    console.log('isEaten:', isEaten);   

  return (
    <div className={`${styles.sandwich} ${isEaten ? styles.disappear : ''}`}>
      <div className={styles.breadTop}>Верхний хлеб</div>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={index} type={ingredient} />
      ))}
      <div className={styles.breadBottom}>Нижний хлеб</div>
    </div>
  );
};

export default Sandwich;
