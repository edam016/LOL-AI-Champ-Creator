import { useState,  CSSProperties, useEffect } from "react";
import "./ChampionView.module.css";
import ClipLoader from "react-spinners/ClipLoader";

interface ChampViewProps {
  result: string; 
  resultTags: string;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ChampionView: React.FC<ChampViewProps> = ({ result, resultTags }) => {
  const sections = result.split('\n\n');
  let [color, setColor] = useState("#b59758");
  const [loading, setLoading] = useState(sections.length > 1);
  const [imageData, setImageData] = useState<GenerationResponse | null>(null);


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
  };

  const lineStyle = {
    borderTop: '1px solid #b59758', 
    margin: '20px 0',      
    width: '20%'     
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (info[3]) {
      // Update the URL to match your Next.js API route
      const textPrompt = info[3];
      console.log(textPrompt);
      const response = await fetch('/api/generateChamp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textPrompt }),
      });
      const responseJSON = (await response.json()) as GenerationResponse
      console.log(responseJSON);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
        setImageData(responseJSON);

        console.log(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    console.log('trigger');
  }, [info[3]]);

  interface GenerationResponse {
    artifacts: Array<{
      base64: string
      seed: number
      finishReason: string
    }>
  }

  return (
    <div>
      <main>
        {loading ? 
          <ClipLoader
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> :
          <div>
            <div className={"champion-description screen-change-text"} style={{
              color: '#fff', 
              textAlign: 'left', 
              width: '100%', 
              fontFamily:'LeagueFont', 
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
          </div>
        }
      </main>
    </div>
  );
}

export default ChampionView;
