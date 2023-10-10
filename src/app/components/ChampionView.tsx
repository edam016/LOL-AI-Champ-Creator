import React from 'react';

interface ChampionViewProps {
  result: string; // Specify that the result prop should be a string
}

const ChampionView: React.FC<ChampionViewProps> = ({ result }) => {
  return (
    <div>
      {/* Display the result */}
      <div>Result: {result}</div>
    </div>
  );
}

export default ChampionView;
