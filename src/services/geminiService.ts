import { GoogleGenAI } from "@google/genai";
import { electionStages, stateData } from "../data/electionData";

let ai: GoogleGenAI | null = null;

export const generateAssistantResponse = async (userPrompt: string): Promise<string> => {
  if (!ai) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  const context = `
    You are the "Election Compass" AI Assistant focused on the Indian election process (Election Commission of India). 
    Your goal is to help users understand the Indian election process in simple, plain language.
    Be helpful, brief, and objective.
    
    Here is the general election process context:
    ${JSON.stringify(electionStages)}
    
    Here is some state specific information:
    ${JSON.stringify(stateData)}

    DO NOT format your response with markdown like **bold** unless necessary. Just text and clear paragraph breaks are best, to match a clean UI style.
    Use this context to help answer the user's questions about the election process, voting, EVMs, VVPATs, and their state if they mention one. Correct any misconceptions about online voting (there is none in India, only postal ballots for specific groups).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [context, userPrompt],
    });
    return response.text || "I was unable to generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};
