const { OpenAI } = require('openai');


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function (req, res) {
  if (!openai.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const tags = req.body.tags || '';
  try {
    const champion = await createLeagueOfLegendsChampion(tags);
    res.status(200).json({ champion });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

async function createLeagueOfLegendsChampion(tags) {
  const prompt = generateChampionPrompt(tags);
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt,
    temperature: 0.6,
    max_tokens: 400,
  });
  return completion.choices[0].text;
}

function generateChampionPrompt(tags) {
  return `Create a new League of Legends champion with a name, lore and abilities including a passive, a q ability, a w ability a e ability, r ability and Champion Class inspired by the following tags: ${tags}?

Name: [Champion Name]
Class: [Champion Class]
Lore: [Champion Lore]
Abilities: [Champion Abilities]
`;
}
