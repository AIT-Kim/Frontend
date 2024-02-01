// SandwichBuilder.tsx

import React, { useState } from 'react';
import IngredientSelector from './IngredientSelector';
import Sandwich from './Sandwich';
import styles from './SandwichBuilder.module.css';

const SandwichBuilder: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isEaten, setIsEaten] = useState(false);

  const addIngredient = (ingredient: string) => {
    setIngredients(prev => [...prev, ingredient]);
  };

  const eatSandwich = () => {
    setIsEaten(true);

    setTimeout(() => {
      setIsEaten(false);
      setIngredients([]);
    }, 1000); 
  };

  return (
    <div className={styles.sandwichBuilder}>
      <h1>Создай свой бутерброд</h1>
      <IngredientSelector onAdd={addIngredient} />
      {ingredients.length > 0 && (
        <button onClick={eatSandwich} className={styles.eatButton}>Съесть бутерброд</button>
      )}      
      <Sandwich ingredients={ingredients} isEaten={isEaten} />

    </div>
  );
};

export default SandwichBuilder;
