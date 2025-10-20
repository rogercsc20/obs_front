'use client';

import { useThreadContext } from '@/lib/useThreadContext';
import { MessageBubble } from './MessageBubble';
import { useEffect, useRef } from 'react';

export function ChatThread() {
  const { messages } = useThreadContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      className="chat-scroll flex-1 h-full overflow-y-auto px-64 pb-20 pt-12 flex flex-col items-center"
    >
      <div className="w-full flex flex-col gap-4 pb-12">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role} time={msg.time}>
            {msg.content}
          </MessageBubble>
        ))}
      </div>
    </div>
  );
}

