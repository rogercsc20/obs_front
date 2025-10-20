'use client';

import { useState, useRef } from 'react';
import { useThreadContext } from '@/lib/useThreadContext';

export default function PromptBar() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const { sendQuery } = useThreadContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!query.trim() || loading) return;
    setLoading(true);
    try {
      await sendQuery(query);
    } finally {
      setQuery('');
      setLoading(false);
      if (inputRef.current) {
        inputRef.current.focus()
        inputRef.current.setSelectionRange(0,0);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="backdrop-blur-md bg-[rgba(46,58,89,0.3)] border border-transparent shadow-[0_0_20px_rgba(100,149,237,0.25)] rounded-2xl mx-4 mb-4 px-4 py-3 flex items-center gap-3 transition-all duration-200">
      <input
        ref={inputRef}
        className="flex-grow bg-transparent text-white placeholder-[#CBD5E1] border border-[#334155] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4e88ff]"
        placeholder="Ask ClaudIA anything about your infrastructure..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <button
        className="bg-[var(--brand)] text-white font-medium px-4 py-2 rounded-md transition-all duration-300 shadow-[0_0_10px_rgba(0,71,171,0.3)] hover:shadow-[0_0_20px_rgba(0,71,171,0.6)] hover:scale-[1.02] disabled:opacity-50"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? '...' : 'Send'}
      </button>
    </div>
  );
}

