import Head from "next/head";
import { useState } from "react";
import styles from "./ChampCreation.module.css";
import './hoverbutton-red.css';

interface ChampCreationProps {
  stopProcess: () => void;
}

const ChampCreation: React.FC<ChampCreationProps> = ({ stopProcess}) => {
  const [championInput, setChampionInput] = useState("");
  const [result, setResult] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [championProfile, setChampionProfile] = useState({
    champion: {
      name: "",
      tags: "",
      lore: "",
      location: "",
      abilities: {
        passive: "",
        qAbility: "",
        wAbility: "",
        eAbility: "",
        rAbility: ""
      }
    }
  });

  const questions = [
    "🌟 Enhance the essence of your champion with thematic words describing their nature (Seperate words with comma)",
    "📛 Reveal the champion's true identity by giving them a name",
    "📜 Craft a captivating lore passage that breathes life into your creation",
    "🌍 Dive into the champion's origins by exploring their unique location.",
    "⚡ Unleash the potential of your champion's passive ability with a compelling description",
    "🔴 Describe the powerful Q ability that sets your champion apart",
    "🔵 Master the intricacies of the W ability with a detailed description",
    "⚫ Create a shifty E ability and define its uniqueness",
    "🌀 Shape the ultimate R ability with an awe-inspiring description",
  ];


  async function submitData(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ champion: championProfile }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setChampionInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }

  const handleBackClick = () => {
    if(currentQuestionIndex == 0){
      stopProcess();
    }else{
      setChampionInput("");
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  async function handleNextClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try{

      const currentQuestion = questions[currentQuestionIndex];

      if (currentQuestion === "🌟 Enhance the essence of your champion with thematic words describing their nature (Seperate words with comma)") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            tags: championInput,
          },
        }));
      } else if (currentQuestion === "📛 Reveal the champion's true identity by giving them a name") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            name: championInput,
          },
        }));
      } else if (currentQuestion === "📜 Craft a captivating lore passage that breathes life into your creation") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            lore: championInput,
          },
        }));
      } else if (currentQuestion === "🌍 Dive into the champion's origins by exploring their unique location.") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            location: championInput,
          },
        }));
      } else if (currentQuestion === "⚡ Unleash the potential of your champion's passive ability with a compelling description") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            abilities: {
              ...prevProfile.champion.abilities,
              passive: championInput,
            },
          },
        }));
      } else if (currentQuestion === "🔴 Describe the powerful Q ability that sets your champion apart") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            abilities: {
              ...prevProfile.champion.abilities,
              qAbility: championInput,
            },
          },
        }));
      } else if (currentQuestion === "🔵 Master the intricacies of the W ability with a detailed description") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            abilities: {
              ...prevProfile.champion.abilities,
              wAbility: championInput,
            },
          },
        }));
      } else if (currentQuestion ===  "⚫ Create a shifty E ability and define its uniqueness") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            abilities: {
              ...prevProfile.champion.abilities,
              eAbility: championInput,
            },
          },
        }));
      } else if (currentQuestion === "🌀 Shape the ultimate R ability with an awe-inspiring description") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            abilities: {
              ...prevProfile.champion.abilities,
              rAbility: championInput,
            },
          },
        }));
      }
            // Clear the input field
            setChampionInput("");

            // Move to the next question
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        {currentQuestionIndex < questions.length ? (
          <div>
            <h3>{questions[currentQuestionIndex]}</h3>
            <form>
              <input
                type="text"
                name="champion"
                placeholder="Your answer"
                value={championInput}
                onChange={(e) => setChampionInput(e.target.value)}
              />
              <div className="question-navigation" style={{width:"40vw", margin: "auto", display: "flex", justifyContent: "space-between" }}>
              {currentQuestionIndex > 0 ?  
              <input type = 'button' value='back' className="button-process" onClick={handleBackClick} />
              : <input type = 'button' value='back' className="button-process" onClick={stopProcess} />}
              <input type = 'button' value= 'next' className="button-process" onClick={handleNextClick} />
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.result}>
            <pre>{JSON.stringify(championProfile, null, 2)}</pre>
            {result}
            <div>
              <button className="button-process">
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
