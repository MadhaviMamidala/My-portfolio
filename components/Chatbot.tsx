'use client';

import { useState, useRef, useEffect } from 'react';
import { chatbotResponses } from '@/app/data';

type Message = {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: chatbotResponses.greeting[0],
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Greetings
    if (input.match(/\b(hello|hi|hey|greetings|good morning|good afternoon)\b/)) {
      return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
    }

    // Specific technologies
    if (input.match(/\b(langchain|lang chain)\b/)) {
      return chatbotResponses.langchain;
    }
    if (input.match(/\b(kubernetes|k8s|eks|aks)\b/)) {
      return chatbotResponses.kubernetes;
    }
    if (input.match(/\b(aws|amazon web services|cloud)\b/)) {
      return chatbotResponses.aws;
    }
    if (input.match(/\b(genai|gen ai|generative ai|gpt|llm|rag)\b/)) {
      return chatbotResponses.genai;
    }

    // Specific companies
    if (input.match(/\b(nike)\b/)) {
      return chatbotResponses.nike;
    }
    if (input.match(/\b(mount sinai|mountsinai|health|healthcare|hospital)\b/)) {
      return chatbotResponses.mountsinai;
    }
    if (input.match(/\b(flipkart|e-commerce|ecommerce)\b/)) {
      return chatbotResponses.flipkart;
    }

    // Projects
    if (input.match(/\b(rag chatbot|chatbot project)\b/)) {
      return chatbotResponses.rag;
    }
    if (input.match(/\b(project|projects)\b/)) {
      return chatbotResponses.projects;
    }

    // Certifications & Education
    if (input.match(/\b(certification|certifications|certified|cert|certs|education|degree|masters)\b/)) {
      return chatbotResponses.certifications;
    }

    // Achievements
    if (input.match(/\b(achievement|achievements|accomplishment|success|impact)\b/)) {
      return chatbotResponses.achievements;
    }

    // Skills - General
    if (input.match(/\b(skill|skills|tech|technology|stack|expertise|capable|capabilities)\b/)) {
      return chatbotResponses.skills;
    }

    // Experience - General
    if (input.match(/\b(experience|work|job|career|background|history)\b/)) {
      return chatbotResponses.experience;
    }

    // Contact
    if (input.match(/\b(contact|email|reach|connect|linkedin|phone|call|message)\b/)) {
      return chatbotResponses.contact;
    }

    // About / Who
    if (input.match(/\b(who|about|tell me|introduce)\b/)) {
      return chatbotResponses.experience;
    }

    // Default
    return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botMessage: Message = {
        text: getResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your experience",
    "Show me your projects",
    "How can I contact you?"
  ];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-cappuccino-50 to-cream-100 dark:from-espresso-700/20 dark:to-gray-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-espresso-500 animate-pulse-slow"></div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            AI Assistant
          </h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Ask me about Madhavi's work
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-espresso-500 text-white'
                  : 'bg-cappuccino-100 dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-cappuccino-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-espresso-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-espresso-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-espresso-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setInput(question)}
              className="text-xs px-3 py-1.5 rounded-full bg-cappuccino-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cappuccino-200 dark:hover:bg-espresso-700 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 rounded-xl bg-cappuccino-50 dark:bg-gray-800 border border-cappuccino-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-espresso-500 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-6 py-3 rounded-xl bg-espresso-500 text-white font-medium hover:bg-espresso-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
