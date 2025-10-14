'use client';

import { Bell, ChevronDown } from 'lucide-react';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white p-2 rounded">
        Skip to content
      </a>
      <header className="border-b border-[var(--border)] bg-[var(--panel)]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo + nav */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="w-7 h-7 flex items-center justify-center text-brand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="21.17" y1="8" x2="4.83" y2="8"></line>
                    <line x1="21.17" y1="16" x2="4.83" y2="16"></line>
                    <line x1="12" y1="21.17" x2="12" y2="2.83"></line>
                  </svg>
                </div>
                <span className="ml-2 font-semibold text-lg">claudIA</span>
              </div>
              <nav className="hidden md:flex gap-1">
                <a className="px-3 py-2 text-sm font-medium rounded-md bg-[#1e2530] text-white" href="#">Console</a>
                <a className="px-3 py-2 text-sm font-medium rounded-md text-[#9AA3AE] hover:text-white hover:bg-[#1e2530]" href="#">Projects</a>
                <a className="px-3 py-2 text-sm font-medium rounded-md text-[#9AA3AE] hover:text-white hover:bg-[#1e2530]" href="#">Settings</a>
              </nav>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <button aria-label="Notifications" className="p-2 rounded-full hover:bg-[#1e2530] text-[#9AA3AE] hover:text-white focus-ring">
                <Bell className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 text-sm font-medium hover:bg-[#1e2530] rounded-full p-1 pr-2 focus-ring" aria-label="Profile menu">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">AN</div>
                <span className="hidden md:inline">Adrian Najera</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div id="main">{children}</div>
    </div>
  )
}
