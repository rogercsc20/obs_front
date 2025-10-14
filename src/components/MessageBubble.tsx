'use client';

export function MessageBubble({
  role,
  children,
  time
}: {
  role: 'assistant' | 'user';
  children: React.ReactNode;
  time?: string;
}) {
  const isUser = role === 'user';
  return (
    <div className={`max-w-3xl mx-auto ${isUser ? 'justify-end flex' : ''}`}>
      <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${isUser ? 'bg-[#273041]' : 'bg-brand'} flex items-center justify-center text-white`}>
          {isUser ? 'U' : 'AI'}
        </div>
        <div className="flex-1 min-w-0">
          <div className={`${isUser ? 'bg-brand' : 'bg-[#1e2530]'} rounded-lg p-4`}>
            <div className="text-white">{children}</div>
          </div>
          {time && (
            <div className={`mt-2 flex items-center text-xs text-[#9AA3AE] ${isUser ? 'justify-end' : ''}`}>
              <span>{time}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
