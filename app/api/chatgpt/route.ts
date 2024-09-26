import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// This POST function handles the API request and returns a response
export const POST = async (request: Request) => {
  try {
    const { question } = await request.json();

    // Initialize Google Generative AI with the API key
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Select the Gemini model, here using "gemini-1.5-flash"
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Send the prompt (question) to the Gemini API
    const result = await model.generateContent(question);
    
    // Extract the text response from the result
    const reply = await result.response.text();

    // Return the generated response as JSON
    return NextResponse.json({ reply });

  } catch (error: any) {
    // Handle errors, such as network issues or API errors
    return NextResponse.json({ error: error.message });
  }
};
