// MagicCounter.tsx

import React, { useState, useEffect } from 'react';
import './MagicCounter.css'; 

interface MagicCounterProps {
  spell: string;
}

const MagicCounter: React.FC<MagicCounterProps> = ({ spell }) => {
  const [count, setCount] = useState<number>(0);
  const [effect, setEffect] = useState<string>('');

  useEffect(() => {
    if (count > 0) {
      setEffect('increase');
    } else if (count < 0) {
      setEffect('decrease');
    }

    const effectTimeout = setTimeout(() => {
      setEffect('');
    }, 500); 

    return () => clearTimeout(effectTimeout);
  }, [count]);

  const castSpell = (increment: boolean): void => {
    setCount(prevCount => prevCount + (increment ? 1 : -1));
  };

  return (
    <div className="magic-counter">
      <h1>{spell}</h1>
      <div className={`counter ${effect}`}>{count}</div>
      <button onClick={() => castSpell(true)}>Увеличить силу</button>
      <button onClick={() => castSpell(false)}>Уменьшить силу</button>
    </div>
  );
};

export default MagicCounter;
