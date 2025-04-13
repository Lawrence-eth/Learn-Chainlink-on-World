import React from 'react';
import LearningApp from './components/LearningApp';
import WorldIDAuth from './components/WorldIDAuth';

function App() {
  return (
    <div className="app">
      <WorldIDAuth />
      <LearningApp />
    </div>
  );
}

export default App; 