'use client';

export function MessageBubble({
  role,
  children,
  time,
}: {
  role: 'assistant' | 'user';
  children: React.ReactNode;
  time?: string;
}) {
  const isUser = role === 'user';

  return (
    <div className="w-full">
      {/* Align vertically so timestamps stay closer */}
      <div
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end`}
      >
        <div
          className={[
            'rounded-2xl',
            'px-4',
            'py-3',
            'text-sm',
            'leading-relaxed',
            'border',
            isUser
              ? 'bg-[#0A6DE6] text-white border-transparent'
              : 'bg-[#1E2530] text-[var(--text)] border-[var(--border)]',
            'max-w-full',
          ].join(' ')}
        >
          {children}
        </div>
      </div>

      {time && (
        <div
          className={`text-xs text-gray-500 ${
            isUser ? 'text-right pr-1 mt-1.5' : 'text-left pl-1 mt-1.5'
          }`}
        >
          {time}
        </div>
      )}
    </div>
  );
}
