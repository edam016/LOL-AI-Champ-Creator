import Head from "next/head";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import styles from "./ChampCreation.module.css";
import './hoverbutton-red.css';

interface ChampCreationProps {
  stopProcess: () => void;
  showChampion: () => void;
  saveResult: (result: React.SetStateAction<string>) => void; 
}


const ChampCreation: React.FC<ChampCreationProps> = ({ stopProcess, showChampion, saveResult}) => {
  const [tagsInput, setTagsInput] = useState("");
  const [results, setResult] = useState([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [championProfile, setChampionProfile] = useState("");

  const questions = [
    "Amplify your champions essence with vivid thematic words describing their nature. Let your imagination run rampant and breathe life into the world of RuneTerra."
  ];


  async function submitData(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log(tagsInput);
    const tags = tagsInput.split(',').map(tag => tag.trim());
    showChampion();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tags }),
      });
      
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log(data);
      setResult(data.result);
      saveResult(data.champion);
      setChampionProfile(data.result);
    } catch(error) {
      console.error(error);
    }
  }

  const handleBackClick = () => {
      stopProcess();
  };

  async function handleNextClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try{
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="fade-in">
      <main className={styles.main}>
        {currentQuestionIndex < questions.length ? (
          <div>
            <h3>{questions[currentQuestionIndex]}</h3>
            <form>
              <input
                type="text"
                name="champion"
                placeholder="Seperate words with commas"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
              />
              <div className="question-navigation" style={{width:"40vw", margin: "auto", display: "flex", justifyContent: "space-around" }}>
              <input type = 'button' value='back' className="button-process" onClick={handleBackClick} />
              <input type = 'button' value= 'done' className="button-process" onClick={handleNextClick} />
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.result}>
            <div className="fade-in">
              <button className="button-process" onClick={submitData}>
              Create Champion
              <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
          </div>
        )}
      </main>
    </div>
  );
}


export default ChampCreation;
