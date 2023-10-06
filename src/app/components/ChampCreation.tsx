import Head from "next/head";
import { useState } from "react";
import styles from "./ChampCreation.module.css";

export default function ChampCreation() {
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
    "Enter thematic words associated with your Champion",
    "Enter the Name of the Champion",
    "Enter a small passage for lore",
    "Enter tags related to your new Champion's location",
    "Enter Passive Ability Description",
    "Enter Q Ability Description",
    "Enter W Ability Description",
    "Enter E Ability Description",
    "Enter R Ability Description",
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
    setChampionInput("");
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  async function handleNextClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try{

      const currentQuestion = questions[currentQuestionIndex];

      if (currentQuestion === "Enter thematic words associated with your Champion") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            tags: championInput,
          },
        }));
      } else if (currentQuestion === "Enter the Name of the Champion") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            name: championInput,
          },
        }));
      } else if (currentQuestion === "Enter a small passage for lore") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            lore: championInput,
          },
        }));
      } else if (currentQuestion === "Enter tags related to your new Champion's location") {
        setChampionProfile((prevProfile) => ({
          ...prevProfile,
          champion: {
            ...prevProfile.champion,
            location: championInput,
          },
        }));
      } else if (currentQuestion === "Enter Passive Ability Description") {
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
      } else if (currentQuestion === "Enter Q Ability Description") {
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
      } else if (currentQuestion === "Enter W Ability Description") {
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
      } else if (currentQuestion === "Enter E Ability Description") {
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
      } else if (currentQuestion === "Enter R Ability Description") {
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
      // Consider implementing your own error handling logic here
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
              <div className="question-navigation" style={{ width: "100%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
              <input type="button" value="Back" className="next-button" onClick={handleBackClick} />
              <input type="button" value="Next" className="next-button" onClick={handleNextClick} />
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.result}>
            <pre>{JSON.stringify(championProfile, null, 2)}</pre>
            {result}
            <input type="submit" className="next-button" onClick={submitData} />
          </div>
        )}
      </main>
    </div>
  );
}
