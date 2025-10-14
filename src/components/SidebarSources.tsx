'use client';

import { Plus, Search } from 'lucide-react';

export function SidebarSources() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-[#9AA3AE] uppercase tracking-wider">Sources</h2>
        <button aria-label="Add source" className="text-[#9AA3AE] hover:text-white focus-ring">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Filter sources..."
            className="w-full pl-8 pr-3 py-2 bg-[#1e2530] border border-[var(--border)] rounded-md text-sm text-white placeholder-[#6b7280] focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
          />
          <div className="absolute left-2.5 top-2.5 text-[#9AA3AE]">
            <Search className="w-4 h-4" />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-medium rounded-full bg-[#1e2530] text-white">Active</button>
          <button className="px-3 py-1 text-xs font-medium rounded-full bg-[#1e2530] text-[#9AA3AE] hover:text-white">All</button>
        </div>
      </div>

      <div className="space-y-1">
        {[
          { name: 'us-east-1', tag: 'AWS', status: 'ok' },
          { name: 'eu-central-1', tag: 'AWS', status: 'ok' },
          { name: 'prod-db', tag: 'PostgreSQL', status: 'warn' },
          { name: 'analytics', tag: 'Snowflake', status: 'ok' },
          { name: 'logging', tag: 'Elastic', status: 'ok' },
        ].map((s) => (
          <div key={s.name} className="p-2 rounded-md hover:bg-[#1e2530] cursor-pointer flex items-center justify-between">
            <div className="flex items-center">
              <span className={`w-2 h-2 rounded-full mr-3 ${s.status === 'ok' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span className="text-sm font-medium">{s.name}</span>
            </div>
            <span className="text-xs text-[#9AA3AE]">{s.tag}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
