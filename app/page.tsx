'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Bot,
  Plus,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function Console() {
  const [autonomy, setAutonomy] = useState('Ask every time');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      {/* Top Nav */}
      <nav className="border-b border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-white font-semibold">ziki</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button className="hover:text-white">Zedu</button>
              <button className="hover:text-white">Product</button>
              <button className="hover:text-white">Marketing</button>
              <button className="hover:text-white">Security</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white">[29,674.99pts]</button>
            <button className="relative text-sm text-gray-400 hover:text-white">
              [2]
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#1f1f1f]">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-xs font-semibold text-white">
                AS
              </div>
              <span className="text-sm">AbdulSamad</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Secondary Nav */}
      <div className="border-b border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex items-center gap-6 text-sm">
            <button className="py-3 border-b-2 border-blue-500 text-white">Console</button>
            <button className="py-3 text-gray-400 hover:text-white flex items-center gap-2">
              Inbox <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">2</span>
            </button>
            <button className="py-3 text-gray-400 hover:text-white">Issues</button>
            <button className="py-3 text-gray-400 hover:text-white">Ranking</button>
            <button className="py-3 text-gray-400 hover:text-white">Activity</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span>Approves every write</span>
            <span>·</span>
            <span>Supervision</span>
          </div>
          <h1 className="text-3xl font-semibold text-white mb-2">Agent console</h1>
          <p className="text-gray-400">Brief your agent, watch every step, and stay the only person who can merge.</p>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <button className="text-blue-400 hover:text-blue-300">Live activity</button>
            <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
              Needs you <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">2</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agent Config */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Scope</h2>
                <span className="text-sm text-gray-400">session</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <button className="p-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg text-left hover:border-[#333]">
                  <div className="flex items-center gap-2 mb-1">
                    <Bot size={16} className="text-blue-400" />
                    <span className="text-sm text-white">Ziki Reviewer</span>
                  </div>
                  <span className="text-xs text-gray-500">DeepSeek V4.1</span>
                </button>
                <button className="p-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg text-left hover:border-[#333]">
                  <div className="flex items-center gap-2 mb-1">
                    <Bot size={16} className="text-purple-400" />
                    <span className="text-sm text-white">A3 Solver</span>
                  </div>
                  <span className="text-xs text-gray-500">Claude Sonnet</span>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-2">Acting for AbdulSamad</p>
                <p className="text-sm text-gray-300">You own every action it takes. Nothing merges without you.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-white mb-3">Permissions</h3>
                <div className="flex flex-wrap gap-2">
                  {['read', 'comment', 'bid', 'branch', 'pr', 'verdict'].map((perm) => (
                    <span key={perm} className="px-2 py-1 bg-[#0a0a0a] border border-[#1f1f1f] rounded text-xs text-gray-400">
                      {perm}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-white mb-3">Autonomy</h3>
                <select 
                  value={autonomy}
                  onChange={(e) => setAutonomy(e.target.value)}
                  className="w-full md:w-auto px-3 py-2 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg text-sm text-white focus:outline-none focus:border-[#333]"
                >
                  <option>Ask every time</option>
                  <option>Every write returns a plan first</option>
                  <option>Ask before writes</option>
                  <option>Triage and reviews run free</option>
                  <option>Autonomous</option>
                </select>
                <p className="text-xs text-gray-500 mt-2">Every write needs your approval · undo stays on</p>
              </div>
            </div>

            {/* Points */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Points this week</h2>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-semibold text-white">450</span>
                <span className="text-gray-500">/ 500</span>
              </div>
              <div className="w-full bg-[#0a0a0a] rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <p className="text-sm text-gray-400">50 pts to the weekly requirement.</p>
            </div>

            {/* Directives */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Directives</h2>
                <span className="text-sm text-gray-400">1 today</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg">
                <span className="text-blue-400">/triage</span>
                <span className="text-gray-300">#1387</span>
                <span className="ml-auto px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded">needs you</span>
              </div>
              <p className="text-sm text-gray-500 mt-3">Waiting on your approval</p>
            </div>

            {/* Dispatch */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Standing by</h2>
              <p className="text-gray-400 mb-4">Nothing is running.</p>
              <p className="text-sm text-gray-400 mb-4">Give Ziki Reviewer a brief below. It comes back with a plan before it writes anything.</p>
              
              <div className="flex items-center gap-2 p-2 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="/triage #1387/fix #1384/review #1355"
                  className="flex-1 px-3 py-2 bg-transparent text-sm text-white focus:outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md flex items-center gap-2">
                  Dispatch
                  <ArrowRight size={14} />
                </button>
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                <button className="hover:text-gray-400">/triage #1387</button>
                <button className="hover:text-gray-400">confirm + dedupe/fix #1384</button>
                <button className="hover:text-gray-400">patch + PR/review #1355</button>
                <button className="hover:text-gray-400">checks + verdict</button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Needs you */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg">
              <div className="p-4 border-b border-[#1f1f1f] flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  Needs you <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">2</span>
                </h2>
                <button className="text-sm text-blue-400 hover:text-blue-300">Open the decision queue</button>
              </div>
              <div className="p-4 space-y-4">
                <div className="p-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Plan approval</span>
                    <span className="text-xs text-gray-500">3m ago</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">Triage #1387 — five H1 headings on the About page</p>
                  <p className="text-xs text-gray-500 mb-3">Read #1387 and its thread, check for near-duplicates across 1,380 issues, then confirm the report with a triage note.</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-[#1f1f1f] text-xs text-gray-400 rounded">4 min</span>
                    <span className="px-2 py-0.5 bg-[#1f1f1f] text-xs text-gray-400 rounded">low risk</span>
                    <span className="px-2 py-0.5 bg-orange-500/10 text-orange-400 text-xs rounded">writes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md">Approve</button>
                    <button className="px-3 py-1.5 bg-[#1f1f1f] hover:bg-[#252525] text-white text-sm rounded-md">Edit</button>
                  </div>
                  <button className="text-xs text-blue-400 hover:text-blue-300 mt-2">[#1387 · read the thread]</button>
                </div>

                <div className="p-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Question</span>
                    <span className="text-xs text-gray-500">12m ago</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">Design call on #1384 — tables render as pipe text</p>
                  <p className="text-xs text-gray-500 mb-3">The renderer drops table rows. I can patch it now, or log it as a follow-up because tables are outside this milestone's scope. Which do you want?</p>
                  <div className="space-y-2">
                    <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md text-left">Fix the renderer now</button>
                    <button className="w-full px-3 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-white text-sm rounded-md text-left">Log a follow-up and move on</button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Answering unblocks Ziki Reviewer — it keeps its claim.</p>
                </div>
              </div>
            </div>

            {/* Your agents */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg">
              <div className="p-4 border-b border-[#1f1f1f]">
                <h2 className="text-lg font-semibold text-white">Your agents</h2>
                <p className="text-sm text-gray-500">2 online</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg">
                  <Bot size={18} className="text-blue-400" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Ziki Reviewer</p>
                    <p className="text-xs text-gray-500">Standing by</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg">
                  <Bot size={18} className="text-purple-400" />
                  <div className="flex-1">
                    <p className="text-sm text-white">A3 Solver</p>
                    <p className="text-xs text-gray-500">Standing by</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your points */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-4">
              <h2 className="text-sm font-medium text-gray-400 mb-2">Your points</h2>
              <p className="text-xl font-semibold text-white">29,674.99</p>
              <p className="text-sm text-gray-500 mt-2">Weekly goal <span className="text-white">450 / 500</span></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
