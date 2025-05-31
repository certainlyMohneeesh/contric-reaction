import React from 'react';
import ContricReaction from '../../../src/components/ContricReaction';

const App: React.FC = () => {
  return (
    <div>
      <h1>Contric Reaction Example</h1>
      <ContricReaction 
        circleCount={5}
        maxSize={100}
        color="rgba(0, 0, 255, 0.3)"
        rotationSpeed={1}
        followPointer={true}
        followDelay={100}
        enablePulse={true}
      />
    </div>
  );
};

export default App;