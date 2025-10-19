'use client';

import { useThreadContext } from '@/lib/useThreadContext';
import { useEffect, useRef } from 'react';

export function ChatThread() {
  const { messages, sendQuery } = useThreadContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const quickQueries = [
    'Check system health',
    'Show recent errors',
    'Compare latency by region',
    'List root causes',
  ];

  const handleQuickQuery = (query: string) => {
    sendQuery(query);
  };

  return (
    <div
      ref={scrollRef}
      className="chat-scroll overflow-y-auto flex-1 px-4 pt-6 flex flex-col items-center bg-transparent"
    >
      <div className="w-full max-w-3xl flex flex-col gap-6 min-h-[80vh] pb-40 transition-all duration-300">
        {/* Empty state */}
        {messages.length === 0 && (
          <div className="text-center text-[#94a3b8] text-sm pt-32">
            Ask <span className="text-white font-medium">ClaudIA</span> anything about your
            infrastructure, systems, or performance.
          </div>
        )}

        {/* Intro assistant bubble */}
        {messages.length === 0 && (
          <div className="flex justify-start">
            <div className="rounded-3xl px-6 py-4 bg-[rgba(60,75,110,0.6)] border border-[rgba(78,136,255,0.25)] text-white backdrop-blur-md shadow-[0_0_20px_rgba(78,136,255,0.15)] transition-all duration-200">
              <p className="text-sm leading-relaxed">
                Hi, I’m <strong>ClaudIA</strong>. I can help you explore log insights in real-time.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {quickQueries.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickQuery(q)}
                    className="px-4 py-1.5 text-xs rounded-full bg-[#1e2530] hover:bg-[#334155] hover:text-white text-[#cbd5e1] transition-all duration-150 border border-transparent hover:border-[rgba(78,136,255,0.4)] shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Render dynamic messages */}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            } transition-all duration-200`}
          >
            <div
              className={`rounded-3xl px-5 py-3 max-w-[80%] text-sm leading-relaxed shadow-[0_4px_20px_rgba(0,0,0,0.25)] ${
                msg.role === 'user'
                  ? 'bg-[#4e88ff] text-white rounded-br-none shadow-[0_0_15px_rgba(78,136,255,0.4)]'
                  : 'bg-[rgba(53,63,89,0.65)] backdrop-blur-md text-white border border-[rgba(78,136,255,0.25)] rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

