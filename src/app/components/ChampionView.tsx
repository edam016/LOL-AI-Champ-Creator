import { useState,  CSSProperties, useEffect } from "react";
import "./ChampionView.module.css";
import { MoonLoader } from "react-spinners";

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
  const [imageData, setImageData] = useState("");
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [status, setStatus] = useState(0);

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
        if (info[3] && resultTags) {
      // Update the URL to match your Next.js API route
      const textPrompt = info[3] + "," + resultTags;
      console.log(textPrompt);
      const response = await fetch('/api/generateChamp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textPrompt }),
      });
      const responseJSON = (await response.json()) as GenerationResponse;
      console.log(responseJSON.data.artifacts[0].base64);
      if (response.status !== 200) {
        setStatus(response.status);
        throw new Error(`Request failed with status ${response.status}`);
        
      }
      if (responseJSON && responseJSON.data.artifacts.length > 0) {
        console.log(responseJSON);
        setImageData(responseJSON.data.artifacts[0].base64);
      } else {
        console.error('Response data is not in the expected format.');
      }
        console.log(response.status);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage(error as Error | null);
        console.log('Error Message:'+errorMessage);
      }
    }

    fetchData();
    console.log('trigger');
  }, [info[3], resultTags]);

  interface GenerationResponse {
    data: any;
    artifacts: Array<{
      base64: string
      seed: number
      finishReason: string
    }>
  }

  const statusMessage = (status: number) => {
    switch(status) {
      case 400:
        return 'Unfortunately Summoner, the Stability AI API is currently down. Please check back again later'
      case 401:
        return 'Unfortunately Summoner, the Stability AI API is currently down. Please check back again later'
      case 403:
        return 'Unfortunately Summoner, the Stability AI API is currently down. Please check back again later'
      case 404:
        return 'Unfortunately Summoner, the Stability AI API is currently down. Please check back again later'
      case 500:
        return 'Unfortunately Summoner, the Stability AI API is currently down. Please check back again later'
      default:
    }
  }

  return (
    <div>
      {errorMessage 
      ? <span></span> 
      : <div>{errorMessage}</div>}
      <main>
        {sections.length == 0 ? 
          <MoonLoader
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#F1CE72"
          /> :
          <div className={'screen-change'}style={{display:'flex', paddingTop: '40px', paddingBottom:'40px'}}>
            <div className={"champion-description screen-change-text"} style={{
              color: '#fff', 
              textAlign: 'left', 
              width: '65%', 
              fontFamily:'LeagueFont'}}>
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
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignSelf: 'center', margin: 'auto', flexGrow: '1', padding: '10px'}}>
            {imageData =="" ? <MoonLoader
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#F1CE72"
              />:
              <div style={{ border:'2px solid #F1CE72'}}>
                <img src={`data:image/png;base64,${imageData}`} height={300} width={300} />
              </div>
            }
            </div>
            </div>
        }
        
      </main>
    </div>
  );
}

export default ChampionView;
