'use client';

import { RefreshCcw, Clock } from 'lucide-react';

const BORDER: Record<string, string> = {
  amber: 'border-amber-800/50',
  rose: 'border-rose-800/50',
};
const BADGE_BG: Record<string, string> = {
  amber: 'bg-amber-900/30',
  rose: 'bg-rose-900/30',
};
const BADGE_TEXT: Record<string, string> = {
  amber: 'text-amber-400',
  rose: 'text-rose-400',
};

export function InsightPanel() {
  const items = [
    { title: 'High API Latency', sub: 'checkout-api, us-east-1', badge: 'Investigating', color: 'amber' },
    { title: 'Database Connections', sub: 'prod-db, eu-central-1', badge: 'Critical', color: 'rose' },
  ] as const;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-[#9AA3AE] uppercase tracking-wider">Insights</h2>
        <button aria-label="Refresh insights" className="text-[#9AA3AE] hover:text-white focus-ring">
          <RefreshCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Active Incidents */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-medium text-[#9AA3AE] uppercase tracking-wider">Active Incidents</h3>
          <span className="text-xs bg-[#1e2530] text-white rounded-full px-2 py-0.5">{items.length}</span>
        </div>

        <div className="space-y-3">
          {items.map((it) => (
            <div key={it.title} className={`p-3 bg-[#1e2530] rounded-md border ${BORDER[it.color]}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">{it.title}</h4>
                  <p className="text-xs text-[#9AA3AE]">{it.sub}</p>
                </div>
                <span className={`text-xs px-1.5 py-0.5 rounded ${BADGE_BG[it.color]} ${BADGE_TEXT[it.color]}`}>
                  {it.badge}
                </span>
              </div>
              <div className="mt-2 flex items-center text-xs text-[#9AA3AE]">
                <Clock className="w-3 h-3 mr-1" />
                <span>Started recently</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggested Queries */}
      <section className="mb-6">
        <h3 className="text-xs font-medium text-[#9AA3AE] uppercase tracking-wider mb-2">Suggested Queries</h3>
        <div className="space-y-2">
          {['Show error rate by service', 'Compare CPU usage before/after deploy', 'Find anomalous payment transactions'].map((q) => (
            <button key={q} className="w-full text-left p-2 text-sm bg-[#1e2530] hover:bg-[#273041] rounded-md border border-[var(--border)]">
              {q}
            </button>
          ))}
        </div>
      </section>

      {/* Related Dashboards */}
      <section>
        <h3 className="text-xs font-medium text-[#9AA3AE] uppercase tracking-wider mb-2">Related Dashboards</h3>
        <div className="space-y-2">
          {['API Performance', 'Payment Processing'].map((d) => (
            <a key={d} href="#" className="block p-2 text-sm bg-[#1e2530] hover:bg-[#273041] rounded-md border border-[var(--border)] group">
              <div className="flex items-center justify-between">
                <span className="group-hover:text-brand">{d}</span>
                <span className="text-[#9AA3AE] group-hover:text-brand">↗</span>
              </div>
              <div className="mt-1 text-xs text-[#9AA3AE]">Sample details</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
