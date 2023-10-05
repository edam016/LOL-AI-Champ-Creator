import Head from "next/head";
import { useState } from "react";
import styles from "./ChampCreation.module.css";

export default function ChampCreation() {
  const [championInput, setChampionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ champion: championInput }),
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

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Enter key words seperated by a comma</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Enter tags related to your new Champions location"
            value={championInput}
            onChange={(e) => setChampionInput(e.target.value)}
          />
        <input
            type="text"
            name="tags"
            placeholder="Enter thematic words associated to your Champion"
            value={championInput}
            onChange={(e) => setChampionInput(e.target.value)}
          />
        <input
            type="text"
            name="champion"
            placeholder="Enter tags related to your new Chamption"
            value={championInput}
            onChange={(e) => setChampionInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
