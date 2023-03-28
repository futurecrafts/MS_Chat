import express from 'express';
import dotenv from 'dotenv';
var router = express.Router();
dotenv.config();

import { OpenAI } from "langchain/llms";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({ temperature: 0.9 });
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });

router.get('/about', (req, res) => {
  res.send('about!!!!')
});

router.post('/chat', async (req, res) => {
    //res.send('chat!!!!'); 

    try {
      const prompt = req.body.prompt;
      //const { prompt } = req.body;
      console.log("prompt : ");
      console.log(prompt);
      const completion = await chain.call({
        input: prompt
      });
      res.status(200).json({
        success: true,
        bot: completion.response,
      });
      console.log("completion : " + completion.response);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message) {
          res.status(500).json({
            error: {
              message: error.message
            }
          });
          console.error(`Error with OpenAI API request: ${error.message}`);
        } else {
          res.status(500).json({
            error: {
              message: 'Unexpected error!',
            }
          });
        }
      }
    }
});
  

export default router;