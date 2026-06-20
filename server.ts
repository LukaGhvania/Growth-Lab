import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Chat Endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not set.' });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `შენ ხარ ბიოლოგიის ექსპერტი და მასწავლებელი, რომელიც ეხმარება მოსწავლეებს მცენარეების, ფოტოსინთეზისა და ეკოსისტემების შესახებ ცოდნის გაღრმავებაში.
შენი პასუხები უნდა იყოს საინტერესო, გასაგები (მე-7 დან მე-12 კლასელებისთვის) და მეცნიერულად ზუსტი. უპასუხე ყოველთვის ქართულ ენაზე.`;

      // Extract the last user message and history
      const lastMessage = messages[messages.length - 1].text;
      const historyMsg = messages.slice(0, -1).map((m: any) => ({
         role: m.role === 'user' ? 'user' : 'model',
         parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
         contents: [
          ...historyMsg,
          { role: 'user', parts: [{ text: lastMessage }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error('Error generating AI response:', error);
      res.status(500).json({ error: 'Failed to generate response' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
