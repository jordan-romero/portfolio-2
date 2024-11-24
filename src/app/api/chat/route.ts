import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    return NextResponse.json({ error: "Error communicating with OpenAI" }, { status: 500 });
  }
}
