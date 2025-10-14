'use client';

import { Paperclip, Send } from 'lucide-react';
import { useRef, useEffect } from 'react';

export function PromptBar() {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = () => {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 200) + 'px';
    };
    handler();
    el.addEventListener('input', handler);
    return () => el.removeEventListener('input', handler);
  }, []);

  return (
    <form className="max-w-3xl mx-auto p-4">
      <div className="relative">
        <textarea
          ref={ref}
          rows={1}
          placeholder="Ask claudIA anything about your systems..."
          className="w-full pl-4 pr-12 py-3 bg-[#1e2530] border border-[var(--border)] rounded-lg text-sm text-white placeholder-[#6b7280] focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand resize-none"
          style={{ minHeight: 44, maxHeight: 200 }}
        />
        <div className="absolute right-3 bottom-3 flex gap-2">
          <button type="button" aria-label="Attach" className="text-[#9AA3AE] hover:text-white focus-ring">
            <Paperclip className="w-4 h-4" />
          </button>
          <button type="submit" className="text-white bg-brand hover:bg-[#0858B8] rounded-md p-1.5 focus-ring" aria-label="Send">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mt-2 text-xs text-[#9AA3AE]">
        <span>claudIA may produce inaccurate information. <button className="text-brand hover:opacity-80 underline">Learn more</button></span>
      </div>
    </form>
  )
}
