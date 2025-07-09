import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constant";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export const generateGeminiResponse = async (promptText) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: promptText }],
          },
        ],
      });

      const response = result.response;
      return await response.text();
    } catch (error) {
      console.warn(`Gemini attempt ${attempt} failed:`, error.message || error);

      // If it's the 3rd attempt, give up
      if (attempt === 3)
        return "⚠️ Gemini 2.5 Flash is overloaded. Please try again later.";

      // Wait a bit before retrying
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
};
