'use client';

import { Paperclip, Send } from 'lucide-react';

export function PromptBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-3xl flex justify-center z-50">
      <div className="flex w-full items-center gap-3 px-4">
        <Paperclip className="w-5 h-5 text-[#9AA3AE] cursor-pointer hover:text-white transition" />

        <input
          type="text"
          placeholder="Ask claudIA anything about your systems..."
          className="flex-1 bg-transparent text-sm text-white placeholder-[#9AA3AE] border border-[#2c3440] hover:border-[#3f4b5a] focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)] rounded-xl px-4 py-2 outline-none transition-all backdrop-blur-sm"
        />

        <button className="p-2 rounded-full bg-brand hover:bg-blue-600 transition">
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

