'use client';

import { MessageBubble } from './MessageBubble';

export function ChatThread() {
  return (
    <div className="chat-scroll overflow-y-auto flex-1 px-4 pb-28 flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-8">
        <MessageBubble role="assistant" time="Today, 10:42 AM">
          <p>
            Hello! I’m claudIA, your observability assistant. I can help you monitor systems,
            debug issues, and analyze performance data. What would you like to check today?
          </p>

          <div className="mt-3 space-y-3">
            <div className="p-3 bg-[#273041] rounded-md border border-[var(--border)]">
              <h4 className="text-sm font-medium text-white mb-1">Quick Actions</h4>
              <div className="flex flex-wrap gap-2">
                {['Check service health', 'Show recent errors', 'Analyze latency', 'Payment failures'].map(b => (
                  <button
                    key={b}
                    className="px-3 py-1 text-xs bg-[#1e2530] hover:bg-[#334155] rounded-md"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </MessageBubble>

        <MessageBubble role="user" time="Today, 10:43 AM">
          Show me the latency spikes in the last hour
        </MessageBubble>

        <MessageBubble role="assistant" time="Today, 10:43 AM">
          <p>
            I’ve analyzed the latency metrics across your services in the last hour.
            Here’s what I found:
          </p>

          <div className="mt-3 bg-[#273041] rounded-md border border-[var(--border)] overflow-hidden">
            <div className="p-3 border-b border-[var(--border)]">
              <h4 className="text-sm font-medium text-white">
                Latency Analysis (last 60 minutes)
              </h4>
            </div>
            <div className="p-3 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[#9AA3AE]">Average latency</p>
                <p className="text-white font-medium">142ms</p>
              </div>
              <div>
                <p className="text-[#9AA3AE]">Peak latency</p>
                <p className="text-white font-medium">
                  892ms <span className="text-rose-400">(+528%)</span>
                </p>
              </div>
              <div>
                <p className="text-[#9AA3AE]">Spike occurrences</p>
                <p className="text-white font-medium">8</p>
              </div>
              <div>
                <p className="text-[#9AA3AE]">Most affected service</p>
                <p className="text-white font-medium">checkout-api</p>
              </div>
            </div>
          </div>

          <div className="mt-3 bg-[#273041] rounded-md border border-[var(--border)] h-40 flex items-center justify-center text-[#9AA3AE]">
            <div className="text-center">
              <div className="mb-2">📈</div>
              <p>Latency over time (placeholder)</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-[#273041] rounded-md border border-[var(--border)]">
            <h4 className="text-sm font-medium text-white">Potential Issue Detected</h4>
            <p className="mt-1 text-sm text-[#d1d5db]">
              The latency spikes coincide with deployment #3421 to the checkout service.
              This version introduced changes to the payment processing logic.
            </p>
          </div>
        </MessageBubble>
      </div>
    </div>
  );
}

