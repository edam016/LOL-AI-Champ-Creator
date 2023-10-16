import { useState } from "react";
import "./ChampionView.module.css";

interface ChampViewProps {
  result: string; // Add a 'result' property of type string
}


const ChampionView: React.FC<ChampViewProps> = ({ result }) => {
  return (
    <div>
      <main>
        <div className={"champion-description"} style={{
          color: 'white', 
          textAlign: 'center', 
          width: '100%', 
          fontFamily:'LeagueFont', 
          fontSize: 'large',
          margin: 'auto'}}>
          {result}
        </div>
      </main>
    </div>
  );
}

export default ChampionView;
