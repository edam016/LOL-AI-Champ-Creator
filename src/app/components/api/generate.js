import { Configuration, OpenAIApi } from "openai";

const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const champion = req.body.champion || {};

  try {
    const championDetails = await generateChampionDetails(champion);
    res.status(200).json({ result: championDetails });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    console.error(`Error with OpenAI API request: ${error.message}`);
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.',
      }
    });
  }
}

async function generateChampionDetails(champion) {
  const tags = champion.tags || "Mage, Fighter";
  const name = champion.name || "ChampionName";
  const lore = champion.lore || "This is the lore of ChampionName.";
  const location = champion.location || "Runeterra";
  const passive = champion.passive || "Passive Ability Description";
  const qAbility = champion.abilities.qAbility || "Q Ability Description";
  const wAbility = champion.abilities.wAbility || "W Ability Description";
  const eAbility = champion.abilities.eAbility || "E Ability Description";
  const rAbility = champion.abilities.rAbility || "R Ability Description";

  // Emphasize the importance of tags in the prompt
  const prompt = `
    Create a League of Legends champion based on the following tags: ${tags}.
    
    Name: ${name}
    Lore: ${lore}
    Location: ${location}
    Passive Ability: ${passive}
    Q Ability: ${qAbility}
    W Ability: ${wAbility}
    E Ability: ${eAbility}
    R Ability: ${rAbility}
    `;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
  });
  console.log('trigger');
  return completion.data.choices[0].text;
}
