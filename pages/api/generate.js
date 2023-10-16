const { Configuration, OpenAI } = require('openai');


const openai = new OpenAI({
  apiKey: "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", // Replace with your OpenAI API key
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
  const results = [];
  console.log(tags);
  // if (tags.trim().length === 0) {
  //   res.status(400).json({
  //     error: {
  //       message: "Please enter valid tags",
  //     }
  //   });
  //   return;
  // }

  try {
    const champion = await createLeagueOfLegendsChampion(tags);
    res.status(200).json({ champion });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
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
  // Generate a League of Legends champion based on the provided tags
  const prompt = generateChampionPrompt(tags);
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt,
    temperature: 0.6,
  });
  console.log(choices);
  return completion.data.choices[0].text;
}

function generateChampionPrompt(tags) {
  return `Create a new League of Legends champion inspired by the following tags: ${tags}?

Name: [Champion Name]
Lore: [Champion Lore]
Abilities: [Champion Abilities]
`;
}
