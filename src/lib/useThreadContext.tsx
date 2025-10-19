'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

export type Message = {
  role: 'user' | 'assistant';
  content: string | React.ReactNode;
  time?: string;
};

export type ThreadContextType = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sendQuery: (query: string) => Promise<void>;
};

const ThreadContext = createContext<ThreadContextType | undefined>(undefined);

export function ThreadProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: (
        <>
          <p>Hi, I’m ClaudIA. I can help you explore log insights in real-time.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              'Check service health',
              'Show me recent failures',
              'Compare latency by region',
              'List root causes',
            ].map((text) => (
              <button
                key={text}
                className="px-3 py-1 text-xs bg-[#1e2530] hover:bg-[#334155] rounded-md"
                onClick={() => sendQuery(text)}
              >
                {text}
              </button>
            ))}
          </div>
        </>
      ),
      time: 'Today 10:42 AM',
    },
  ]);

  const sendQuery = async (query: string) => {
    const userMessage = { role: 'user', content: query };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post('http://localhost:3031/search', { query });
      const logs = res.data.sentences;
      const assistantMessage = {
        role: 'assistant',
        content: logs && logs.length > 0 ? logs.join('\n\n') : 'No relevant logs found.',
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '❌ Error contacting backend.' },
      ]);
    }
  };

  return (
    <ThreadContext.Provider value={{ messages, setMessages, sendQuery }}>
      {children}
    </ThreadContext.Provider>
  );
}

export function useThreadContext() {
  const context = useContext(ThreadContext);
  if (!context) {
    throw new Error('useThreadContext must be used within a ThreadProvider');
  }
  return context;
}

