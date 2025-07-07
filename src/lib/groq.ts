import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // Required for client-side usage
});

export const getGroqCompletion = async (
  systemContent: string,
  userContent: string,
  tools: Groq.Chat.Completions.ChatCompletionTool[]
) => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemContent,
      },
      {
        role: "user",
        content: userContent,
      },
    ],
    model: "llama3-70b-8192", // Or another powerful model
    tools: tools,
    tool_choice: "auto",
    temperature: 0.1,
  });
};