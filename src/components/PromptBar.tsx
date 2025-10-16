'use client';

import { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';
import axios from 'axios';

export function PromptBar() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim() || loading) return;
    setLoading(true);

    try {
      //  Call router API
      const res = await axios.post('http://localhost:3031/search', { query });

      console.log('✅ API response:', res.data);

      // later lift this to ChatThread to display new messages
      // For now, just log

      setQuery('');
    } catch (err) {
      console.error('❌ API error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
      <div className="flex items-center w-full max-w-3xl px-4">
        <button className="text-[#9AA3AE] hover:text-white mr-2">
          <Paperclip className="w-4 h-4" />
        </button>

        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask claudIA anything about your systems..."
            className="w-full bg-transparent border border-[#3a3f4b] rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={loading}
          className={`ml-3 p-2 rounded-full transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : 'bg-[#3b82f6] hover:bg-[#2563eb]'
          }`}
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

