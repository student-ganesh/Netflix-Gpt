import OpenAI from "openai";
import React from "react";
import { OPENAI_KEY } from "./constant";

const openAi = new OpenAI({
  apiKey: OPENAI_KEY,
});

export default openAi;
