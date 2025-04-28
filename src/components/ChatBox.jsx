import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import MarkdownIt from "markdown-it";
import { MessageCircle, X, Send } from "lucide-react";

const md = new MarkdownIt();
const API_KEY = "AIzaSyBwPLoPNMamDlFtZyGuNFIShDJOh5t4LXo"; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-pro",
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ],
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

const ChatBox = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const initChat = async () => {
      const session = await model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {
                text: `You are AquaBot, a helpful chatbot for AquaSol, a company dedicated to providing reliable and cost-effective solutions for water access and quality, particularly for farmers and rural communities. Your role is to:
                1. Provide information about AquaSol's solar-powered water purification systems and water pumps.
                2. Explain the benefits of AquaSol's solutions for addressing water scarcity and contamination.
                3. Assist with inquiries about product specifications, pricing, and implementation.
                4. Offer guidance on how AquaSol's solutions promote sustainable agriculture and community well-being.
                5. Provide resources for education, product demonstrations, and post-sales support.
                6. Politely redirect unrelated queries to AquaSol's core mission and services.

                Keep responses friendly, concise, and focused on AquaSol's mission and products. If asked about anything unrelated to water solutions or agriculture, politely redirect the conversation to AquaSol's services.`,
              },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: "Hello! I'm AquaBot, your personal assistant for AquaSol. I can help you learn about our solar-powered water purification systems, water pumps, and how they benefit farmers and rural communities. How can I assist you today?",
              },
            ],
          },
        ],
      });
      setChatSession(session);
    };
    initChat();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]); // Scroll to bottom when messages update

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim() && chatSession) {
      const userMessage = { role: "user", content: prompt };
      setMessages((prev) => [...prev, userMessage]);
      setPrompt("");
      setIsTyping(true);

      try {
        const result = await chatSession.sendMessage(prompt);
        const assistantMessage = {
          role: "assistant",
          content: result.response.text(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-[#064469] text-white p-4 rounded-full shadow-lg hover:bg-[#0A5B8A] 
            transition-colors transform hover:scale-105 duration-200"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isChatOpen && (
        <div
          className="w-[380px] border border-[#064469] rounded-lg shadow-2xl bg-white overflow-hidden
          animate-slide-up"
          style={{
            maxHeight: "calc(100vh - 100px)",
            bottom: "1rem",
            right: "1rem",
          }}
        >
          <div className="bg-[#064469] p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Chat with AquaBot - AquaSol Assistant</h2>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4 bg-[#E6EEF2]">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-[#064469] text-white"
                        : "bg-white text-[#3A5A6D] shadow-md"
                    }`}
                    dangerouslySetInnerHTML={{ __html: md.render(message.content) }}
                  />
                </div>
              ))
            ) : (
              <p className="text-[#3A5A6D] text-center">
                Ask me about AquaSol's water solutions, products, or how we can help your community!
              </p>
            )}
            {isTyping && <div className="text-[#3A5A6D] italic">AquaBot is typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 bg-white flex items-center border-t border-[#E6EEF2]">
            <input
              type="text"
              name="prompt"
              placeholder="Ask about water solutions, products, or support..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-grow mr-2 p-2 border border-[#064469] rounded 
                focus:outline-none focus:ring-2 focus:ring-[#064469] 
                placeholder-[#3A5A6D]/60"
            />
            <button
              type="submit"
              className="bg-[#064469] text-white p-2 rounded hover:bg-[#0A5B8A] 
                transition-colors flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const styles = `
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-up {
    animation: slide-up 0.3s ease-out;
  }
`;

export default ChatBox;