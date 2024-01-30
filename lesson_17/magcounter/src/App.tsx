// App.tsx

import React from 'react';
import './App.css';
import MagicCounter from './MagicCounter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MagicCounter spell="Абракадабра" />
      </header>
    </div>
  );
}

export default App;
