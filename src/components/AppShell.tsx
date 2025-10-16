'use client';

import { Bell, ChevronDown } from 'lucide-react';
import { ChatThread } from './ChatThread';
import { SidebarSources } from './SidebarSources';
import { InsightPanel } from './InsightPanel';
import { PromptBar } from './PromptBar';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--panel)]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo + Nav */}
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

              {/* Nav */}
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

            {/* Right Controls */}
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
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main id="main" className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-[var(--border)] bg-[var(--panel)] sidebar-scroll overflow-y-auto">
          <SidebarSources />
        </aside>

        {/* Center Chat */}
        <section className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 chat-scroll overflow-y-auto">
            <ChatThread />
          </div>
          <PromptBar />
        </section>

        {/* Right Insights */}
        <aside className="w-80 border-l border-[var(--border)] bg-[var(--panel)] sidebar-scroll overflow-y-auto">
          <InsightPanel />
        </aside>
      </main>
    </div>
  );
}

