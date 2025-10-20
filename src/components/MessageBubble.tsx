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
    <div
      className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'} my-3 transition-all duration-300 ease-out transform ${
        isUser ? 'translate-y-1 opacity-100' : 'translate-y-1 opacity-100'
      }`}
    >
      <div
        className={`max-w-3xl rounded-xl border border-[var(--border)] px-4 py-4 leading-relaxed shadow-sm ${
          isUser
            ? 'bg-[var(--brand)] text-white rounded-br-none shadow-lg' // use FICO blue from theme
            : 'bg-[#273041] text-[#d1d5db] rounded-bl-none'
        }`}
      >
        <div className="text-[15px] break-words">{children}</div>

        {time && (
          <div
            className={`text-xs mt-2 ${
              isUser ? 'text-white/70 text-right' : 'text-gray-400 text-left'
            }`}
          >
            {time}
          </div>
        )}
      </div>
    </div>
  );
}

