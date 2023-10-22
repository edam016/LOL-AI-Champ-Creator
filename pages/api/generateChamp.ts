// pages/api/championGenerator.ts

export default async function handler(req: { method: string; body: { textPrompt: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data?: any; error?: string; }): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
      try {
        const engineId = 'stable-diffusion-xl-1024-v1-0';
        const apiHost = process.env.API_HOST || 'https://api.stability.ai';
        const apiKey = process.env.STABILITY_API_KEY; // Replace with your API key
  
        if (!apiKey) {
          throw new Error('Missing Stability API key.');
        }
  
        const textPrompt = req.body.textPrompt; // Get text prompt from the request body
        const response = await fetch(`${apiHost}/v1/generation/${engineId}/text-to-image`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            text_prompts: [{ text: textPrompt }],
            cfg_scale: 7,
            height: 1024,
            width: 1024,
            steps: 10,
            style_preset:'digital-art',
            samples: 1,
          }),
        });
        console.log(response);
        if (response.status == 200) {
          const data = await response.json();
          console.log(data);
          console.log(textPrompt);
          res.status(200).json({ data });
        } else {
          // Handle errors
          res.status(response.status).json({ error: 'API request failed' });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } 
  }
  