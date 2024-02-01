// IngredientSelector.tsx

import React from 'react';
import styles from './IngredientSelector.module.css';

interface IngredientSelectorProps {
  onAdd: (ingredient: string) => void;
}

const IngredientSelector: React.FC<IngredientSelectorProps> = ({ onAdd }) => {
  const ingredients = ['salad', 'tomato', 'cheese', 'bacon', 'beef', 'chicken', 'cucumber'];

  return (
    <div className={styles.ingredientSelector}>
      {ingredients.map(ingredient => (
        <button key={ingredient} onClick={() => onAdd(ingredient)}>
          {ingredient}
        </button>
      ))}
    </div>
  );
};

export default IngredientSelector;
