'use client';

import { Bell, ChevronDown } from 'lucide-react';
import { ChatThread } from './ChatThread';
import { SidebarSources } from './SidebarSources';
import { InsightPanel } from './InsightPanel';
import PromptBar from './PromptBar';
import { useThreadContext } from '@/lib/useThreadContext';

export function AppShell() {
  const { messages } = useThreadContext();

  // Determines if only the intro assistant message is present (landing state)
  const isLandingState = messages.length === 0;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 h-16 border-b border-[var(--border)] bg-[var(--panel)]/80 backdrop-blur-md px-4 shadow-md flex items-center justify-between">
        {/* LOGO + NAV */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="w-7 h-7 flex items-center justify-center text-brand">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" y1="8" x2="4.83" y2="8" />
                <line x1="21.17" y1="16" x2="4.83" y2="16" />
                <line x1="12" y1="21.17" x2="12" y2="2.83" />
              </svg>
            </div>
            <span className="ml-2 font-semibold text-lg">claudIA</span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-1.5">
            {['Console', 'Projects', 'Settings'].map((link, i) => (
              <a
                key={link}
                href="#"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  i === 0
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-[#9AA3AE] hover:text-white hover:bg-[#1e2530]'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="p-2 rounded-full hover:bg-[#1e2530] text-[#9AA3AE] hover:text-white focus-ring"
          >
            <Bell className="w-4 h-4" />
          </button>
          <button
            className="flex items-center gap-2 text-sm font-medium hover:bg-[#1e2530] rounded-full p-1 pr-2 focus-ring"
            aria-label="Profile menu"
          >
            <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">
              AN
            </div>
            <span className="hidden md:inline">Adrian Najera</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="flex flex-1 overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 border-r border-[var(--border)] bg-[var(--panel)] sidebar-scroll overflow-y-auto">
          <SidebarSources />
        </aside>

        {/* CENTER CONTENT */}
        <section className="relative flex flex-col flex-1 min-h-0 overflow-hidden">
          {isLandingState ? (
            // -- LANDING: centered welcome and prompt bar --
            <div className="flex flex-col items-center justify-center h-full w-full px-0">
              <div className="w-full flex flex-col items-center gap-6">
                <div className="text-center">
                  <h1 className="text-4xl font-semibold text-white mb-3">
                    Hey Adrian, can I help you troubleshoot?
                  </h1>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-xl">
                  <PromptBar />
                </div>
               </div>
              </div>
            </div>
          ) : (
            // -- CHAT MODE: scrollable thread + sticky prompt bar at the absolute bottom --
            <>
              <div className="flex-1 min-h-0 overflow-y-auto chat-scroll px-0 pt-6 flex flex-col bg-transparent pb-28">
                <ChatThread />
              </div>
              <div className="absolute bottom-0 left-0 right-0 pb-6 flex justify-center bg-gradient-to-t from-[#101116]/80 to-transparent pointer-events-none z-20">
                <div className="w-full px-6 pointer-events-auto">
                  <PromptBar />
                </div>
              </div>
            </>
          )}
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="w-80 border-l border-[var(--border)] bg-[var(--panel)] sidebar-scroll overflow-y-auto">
          <InsightPanel />
        </aside>
      </main>
    </div>
  );
}

