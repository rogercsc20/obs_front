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
    <div className="w-full flex justify-center items-center my-1">
      <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"} max-w-3xl`}>
        {isUser ? (
          <span
            className={[
              "rounded-full px-5 py-2",
              "bg-[#23272f] text-white shadow-sm",
              "inline-block",
              "text-right text-[15px] leading-relaxed break-words",
              "border border-white/5",
              "max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl",
              "min-w-[48px]"
            ].join(' ')}
            style={{ wordBreak: 'break-word' }}
          >
            {children}
          </span>
        ) : (
          <span
            className={[
              "inline-block",
              "text-left text-[15px] text-[var(--text)] leading-relaxed break-words",
              "max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl",
              "w-auto"
            ].join(' ')}
            style={{ wordBreak: 'break-word' }}
          >
            {children}
          </span>
        )}
      </div>
      {time && (
        <div className="w-full text-xs text-gray-500 text-center mt-1">{time}</div>
      )}
    </div>
  );
}

