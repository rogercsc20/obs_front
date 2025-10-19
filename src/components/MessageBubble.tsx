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
    <div className="w-full flex flex-col">
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end relative group`}>
        <div
          className={[
            'px-5',
            'py-4',
            'text-[15px]',
            'font-medium',
            'leading-relaxed',
            'rounded-3xl',
            'max-w-[80%]',
            'break-words',
            'shadow-lg',
            'border',
            isUser
              ? 'bg-gradient-to-tr from-[#3292fe] to-[#175de9] text-white border-transparent'
              : 'bg-gradient-to-tr from-[#232940] to-[#353b55] text-[#e7eafd] border border-[rgba(255,255,255,0.12)]',
          ].join(' ')}
        >
          {children}
        </div>
        {/* Bubble tail pointer */}
        <span
          className={`absolute bottom-2 ${isUser ? 'right-4' : 'left-4'} w-0 h-0 
            border-t-[12px] border-t-[#175de9] 
            ${isUser ? 'border-r-[16px] border-r-transparent' : 'border-l-[16px] border-l-transparent'} 
            ${isUser ? 'hidden group-hover:block' : 'hidden group-hover:block'} 
          `}
          style={{
            // The tail matches the bubble color; adjust as preferred
            borderTopColor: isUser ? '#175de9' : '#353b55',
          }}
        />
      </div>

      {time && (
        <div
          className={`text-xs text-gray-500 ${
            isUser ? 'text-right pr-2 mt-1.5' : 'text-left pl-2 mt-1.5'
          }`}
        >
          {time}
        </div>
      )}
    </div>
  );
}

