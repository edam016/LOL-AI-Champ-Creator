import { Configuration, OpenAIApi } from "openai";


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

  const animal = req.body.animal || '';
  console.log(animal);
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter valid tags",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
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

function generateChampionPrompt(tags) {
  // Capitalize the tags
  const capitalizedTags = tags.map((tag) => tag[0].toUpperCase() + tag.slice(1)).join(', ');

  // Generate the prompt
  return `Create a new League of Legends champion inspired by the following tags: ${capitalizedTags}?

Name: [Champion Name]
Lore: [Champion Lore]
Abilities: [Champion Abilities]
`;
}


// const completion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages:[
//     {role: "user", content: "Hello World"},
//   ]
// })

// `Create a League of Legends Champion with the following tags that inspire the champion. Make sure to include the Name,
//   Lore and all the abilities in that order. Seperate each of these things by a comma.`