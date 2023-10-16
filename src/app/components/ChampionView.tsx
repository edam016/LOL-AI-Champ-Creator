import { useState } from "react";
import "./ChampionView.module.css";

interface ChampViewProps {
  result: string; // Add a 'result' property of type string
}


const ChampionView: React.FC<ChampViewProps> = ({ result }) => {
  const sections = result.split('\n\n');
  console.log(result);
  console.log(sections);
  const abilities = {
    P: sections[1],
    P2: sections[2],
    Q: sections[3],
    W: sections[4],
    E: sections[5],
    R: sections[6],
    blank: sections[7],
    blank2: sections[8],
  };

  const info = sections[0].split('\n');
  const champInfo = {
    Name: info[0],
    Name2: info[1],
    Class: info[2],
    Lore: info[3],
  }
  console.log(info);
  const lineStyle = {
    borderTop: '1px solid #b59758', // Adjust the color and width as needed
    margin: '20px 0',      
    width: '20%'     // Adjust the margin as needed
  };
  
   return (
    <div>
      <main>
        <div className={"champion-description"} style={{
          color: '#F1CE72', 
          textAlign: 'left', 
          width: '100%', 
          fontFamily:'LeagueFont', 
          fontSize: 'large',
          margin: 'auto'}}>
          <div>{champInfo.Name}</div>
          <div>{champInfo.Name2}</div>
          <div style={lineStyle}></div>
          <div>{champInfo.Class}</div>
          <div style={lineStyle}></div>
          <div>{champInfo.Lore}</div>
          <div style={lineStyle}></div>
          <div>{abilities.P}</div>
          <div>{abilities.P2}</div>
          <div>{abilities.Q}</div>
          <div>{abilities.W}</div>
          <div>{abilities.E}</div>
          <div>{abilities.R}</div>
          <div>{abilities.blank}</div>
          <div>{abilities.blank2}</div>
        </div>
      </main>
    </div>
  );
}

export default ChampionView;
