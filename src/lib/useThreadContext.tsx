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
  // Start with just one assistant message to maintain "landing state"
  const [messages, setMessages] = useState<Message[]>([]);

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

