'use client';

import { AppShell } from '@/components/AppShell';
import { SidebarSources } from '@/components/SidebarSources';
import { InsightPanel } from '@/components/InsightPanel';
import { ChatThread } from '@/components/ChatThread';
import { PromptBar } from '@/components/PromptBar';

export default function Home() {
  return (
    <AppShell>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-[var(--border)] bg-[var(--panel)] hidden md:block overflow-y-auto">
          <SidebarSources />
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            <ChatThread />
          </div>
          <div className="border-t border-[var(--border)] bg-[var(--panel)]">
            <PromptBar />
          </div>
        </main>

        <aside className="w-80 border-l border-[var(--border)] bg-[var(--panel)] hidden lg:block overflow-y-auto">
          <InsightPanel />
        </aside>
      </div>
    </AppShell>
  );
}
