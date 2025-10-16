'use client';

import { AppShell } from '@/components/AppShell';
import { SidebarSources } from '@/components/SidebarSources';
import { InsightPanel } from '@/components/InsightPanel';
import { ChatThread } from '@/components/ChatThread';
import { PromptBar } from '@/components/PromptBar';

export default function Home() {
  return (
    <AppShell>
      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 flex-shrink-0 border-r border-[var(--border)] bg-[var(--panel)] hidden md:flex flex-col overflow-y-auto sidebar-scroll">
          <SidebarSources />
        </aside>

        {/* CENTER CHAT */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* CHAT THREAD */}
          <div className="flex-1 overflow-y-auto px-6 py-8 chat-scroll flex justify-center">
            <div className="w-full max-w-3xl">
              <ChatThread />
            </div>
          </div>

          {/* FLOATING PROMPT */}
          <div className="sticky bottom-6 w-full flex justify-center">
            <div className="w-full max-w-3xl px-6">
              <PromptBar />
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-80 flex-shrink-0 border-l border-[var(--border)] bg-[var(--panel)] hidden lg:flex flex-col overflow-y-auto sidebar-scroll">
          <InsightPanel />
        </aside>
      </div>
    </AppShell>
  );
}
