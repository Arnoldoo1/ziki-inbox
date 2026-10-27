'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Plus,
  Bell,
  Zap,
  FileText,
  User,
  TrendingUp,
  Bot,
  Clock,
  Check,
  FileDiff,
  Circle,
  ChevronUp,
} from 'lucide-react';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('Weekly');
  const [showFullExplanation, setShowFullExplanation] = useState(false);
  const [approved, setApproved] = useState(false);
  const [showDiff, setShowDiff] = useState(false);

  const handleApprove = () => {
    setApproved(true);
    setTimeout(() => setApproved(false), 2000);
  };

  const handleViewDiff = () => {
    setShowDiff(true);
  };

  const paragraphs = [
    "The current color palette used for interactive elements in the navigation and action components fails to meet the WCAG 2.1 AA minimum contrast ratio of 4.5:1 against the background surfaces. Specifically, the secondary button text and disabled state indicators blend with their container backgrounds, making them difficult to distinguish for users with low vision or color perception deficiencies.",
    "Our analysis indicates that the contrast issue is most prominent on the 'Approve' and 'Reject' action row within agent-generated issue cards. When rendered on the #161b22 card background, the existing text color (#7d8590) yields a calculated contrast ratio of only 3.8:1, falling short of the accessibility threshold and creating potential compliance concerns for enterprise deployments.",
    "To remediate this, we propose updating the affected text and icon colors to #c9d1d9 for body content and utilizing the primary accent #3b82f6 for actionable elements with sufficient background differentiation. This change is isolated to the agent inbox component styles and should not introduce regressions to other dashboard modules.",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      {/* Top Nav */}
      <nav className="border-b border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-white font-semibold">ziki</span>
              <span className="text-xs text-gray-500">Active workspace</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button className="flex items-center gap-1 hover:text-white">
                Zedu <ChevronDown size={14} />
              </button>
              <button className="hover:text-white">Product</button>
              <button className="hover:text-white">Marketing</button>
              <button className="hover:text-white">Security</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
              Agents <ChevronDown size={14} />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#1f1f1f]">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs font-semibold text-white">
                AN
              </div>
              <span className="text-sm">Arnold Nyamongo</span>
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-white">719.82</span>
              <span className="text-gray-400">pts</span>
              <span className="text-gray-500">of 500, 0 solved, 100%.</span>
              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="text-blue-400 hover:text-blue-300"
              >
                Open Ranking
              </button>
            </div>
            <button className="relative">
              <Bell size={18} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-white mb-1">Welcome back, Arnold</h1>
          <p className="text-gray-400">Issues, votes and your points for Ziki at a glance.</p>
        </div>

        <button 
          onClick={() => alert('Create new issue - Coming soon')}
          className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md flex items-center gap-2 transition-colors"
        >
          <Plus size={16} />
          New issue
        </button>

        {/* Inbox Card */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg overflow-hidden mb-6 max-w-[800px]">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-[#1f1f1f] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <span className="text-white font-medium">Sentinel</span>
              <span className="px-2 py-0.5 bg-[#1f1f1f] text-xs text-gray-400 rounded border border-[#1f1f1f]">
                AGENT
              </span>
              <span className="text-gray-400 text-sm">#231</span>
              <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20 flex items-center gap-1">
                <Circle size={6} fill="currentColor" /> Needs approval
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-6 py-6">
            <div className="mb-3">
              <span className="text-xs tracking-wider text-gray-500 uppercase">TL;DR ACTION</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
              Action Required: Approve contrast fix for Issue #231
            </h2>
            
            {/* Agent Reasoning & Confidence */}
            <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg p-4 mb-4 flex items-start justify-between gap-3">
              <p className="text-sm text-gray-300 flex-1">
                I tried fixing the contrast using 3 different CSS approaches, but all failed the accessibility test.
              </p>
              <span className="px-2 py-0.5 bg-red-500/10 text-red-400 text-xs rounded-full border border-red-500/20 whitespace-nowrap">
                [Confidence: Low]
              </span>
            </div>
            
            <button
              onClick={() => setShowFullExplanation((prev) => !prev)}
              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 mb-4 transition-colors"
            >
              {showFullExplanation ? (
                <>
                  <ChevronUp size={16} />
                  Hide full technical explanation
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Show full technical explanation
                </>
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                showFullExplanation
                  ? 'max-h-[1000px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-4 text-sm leading-relaxed text-gray-300 pt-2">
                {paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-6 py-4 border-t border-[#1f1f1f] flex justify-end gap-3">
            <button
              onClick={handleViewDiff}
              className="flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] hover:bg-[#252525] text-white text-sm rounded-md transition-colors"
            >
              <FileDiff size={16} />
              View Diff
            </button>
            <button
              onClick={handleApprove}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
            >
              <Check size={16} />
              {approved ? 'Approved!' : 'Approve fix'}
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Points</span>
              <TrendingUp size={16} className="text-green-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-semibold text-white">719.82</span>
            </div>
            <p className="text-xs text-gray-500">500 to go</p>
            <p className="text-xs text-gray-500">500 required this week</p>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Created by me</span>
              <FileText size={16} className="text-gray-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-semibold text-white">3</span>
              <span className="text-xs text-green-400">+3</span>
            </div>
            <p className="text-xs text-gray-500">in the last 30 days</p>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Assigned to me</span>
              <User size={16} className="text-gray-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-semibold text-white">1</span>
              <span className="text-xs text-red-400">0</span>
            </div>
            <p className="text-xs text-gray-500">high priority</p>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Resolved issues</span>
              <Clock size={16} className="text-gray-400" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-semibold text-white">0</span>
            </div>
            <p className="text-xs text-gray-500">0% of issues assigned to me</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Issues Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg">
              <div className="p-4 border-b border-[#1f1f1f] flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Issues assigned to me</h2>
                <span className="text-sm text-gray-500">1 issue · sorted by top votes</span>
                <button 
                  onClick={() => alert('All issues page - Coming soon')}
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  View all issues
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1f1f1f]">
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Votes</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Issue</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Type</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Priority</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Status</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Stage</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Reported</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1f1f1f] hover:bg-[#0a0a0a]">
                      <td className="p-3">
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-white">6</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div>
                          <div className="text-sm text-white mb-1">Low contrast on the "View all channels" button in the sidebar</div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>#231</span>
                            <span>·</span>
                            <span>2 comments</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-[#1f1f1f] text-xs text-gray-300 rounded">Fix</span>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded">Medium</span>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">In progress</span>
                      </td>
                      <td className="p-3 text-sm text-gray-400">—</td>
                      <td className="p-3 text-sm text-gray-400">Oct 18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 text-center text-sm text-gray-500">Showing 1 issue</div>
            </div>

            {/* Points Chart */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg mt-6">
              <div className="p-4 border-b border-[#1f1f1f]">
                <h2 className="text-lg font-semibold text-white">Your points</h2>
                <p className="text-sm text-gray-500">Points earned each week, last 8 weeks · 500 pts required, more is welcome</p>
                <div className="flex items-center gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-gray-400">500 reached</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#1f1f1f] rounded"></div>
                    <span className="text-gray-400">Below 500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-1 bg-yellow-400"></div>
                    <span className="text-gray-400">Weekly requirement · 500 pts</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <button className="px-3 py-1 bg-[#1f1f1f] text-white rounded">All dates</button>
                  <button className="px-3 py-1 hover:bg-[#1f1f1f] text-gray-400 rounded">Daily</button>
                  <button className="px-3 py-1 hover:bg-[#1f1f1f] text-gray-400 rounded">Weekly</button>
                  <button className="px-3 py-1 hover:bg-[#1f1f1f] text-gray-400 rounded">Monthly</button>
                  <button className="px-3 py-1 hover:bg-[#1f1f1f] text-gray-400 rounded">Yearly</button>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-semibold text-white">719.82</span>
                  <span className="text-sm text-gray-400">pts in this range</span>
                </div>
                <div className="h-48 flex items-end gap-2">
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#1f1f1f] rounded-t" style={{ height: '20%' }}></div>
                    <span className="text-xs text-gray-500">7 Sept</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#1f1f1f] rounded-t" style={{ height: '10%' }}></div>
                    <span className="text-xs text-gray-500">14 Sept</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#1f1f1f] rounded-t" style={{ height: '15%' }}></div>
                    <span className="text-xs text-gray-500">21 Sept</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#1f1f1f] rounded-t" style={{ height: '12%' }}></div>
                    <span className="text-xs text-gray-500">28 Sept</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#1f1f1f] rounded-t" style={{ height: '18%' }}></div>
                    <span className="text-xs text-gray-500">5 Oct</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#1f1f1f] rounded-t" style={{ height: '25%' }}></div>
                    <span className="text-xs text-gray-500">12 Oct</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-blue-500 rounded-t" style={{ height: '90%' }}></div>
                    <span className="text-xs text-white">+219.82</span>
                    <span className="text-xs text-white">719.82</span>
                    <span className="text-xs text-gray-500">19 Oct</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-[#1f1f1f] rounded-t" style={{ height: '5%' }}></div>
                    <span className="text-xs text-gray-500">26 Oct</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Your agents */}
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg">
              <div className="p-4 border-b border-[#1f1f1f] flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Your agents</h2>
                <span className="text-sm text-gray-500">2</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1f1f1f]">
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Agent</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Status</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Current activity</th>
                      <th className="text-left p-3 text-xs font-medium text-gray-400">Last seen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1f1f1f]">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Bot size={16} className="text-blue-400" />
                          <span className="text-sm text-white">Sentinel</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="text-xs text-gray-500">Offline</span>
                      </td>
                      <td className="p-3 text-xs text-gray-500">No recent activity</td>
                      <td className="p-3 text-xs text-gray-500">2 days ago</td>
                    </tr>
                    <tr>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Bot size={16} className="text-purple-400" />
                          <span className="text-sm text-white">Big Pickle</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="text-xs text-gray-500">Offline</span>
                      </td>
                      <td className="p-3 text-xs text-gray-500">No recent activity</td>
                      <td className="p-3 text-xs text-gray-500">4 days ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Diff Modal */}
      {showDiff && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setShowDiff(false)}>
          <div
            className="bg-[#111111] border border-[#1f1f1f] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#1f1f1f] flex items-center justify-between">
              <h3 className="text-white font-medium">Diff - Issue #231</h3>
              <button onClick={() => setShowDiff(false)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div>
                <div className="text-sm font-medium mb-2 text-red-400">- Removed</div>
                <pre className="text-xs bg-[#0a0a0a] p-3 rounded overflow-x-auto">
                  <code>{`- color: #7d8590;
- background: rgba(125, 133, 144, 0.1);`}</code>
                </pre>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-green-400">+ Added</div>
                <pre className="text-xs bg-[#0a0a0a] p-3 rounded overflow-x-auto">
                  <code>{`+ color: #c9d1d9;
+ background: rgba(201, 209, 217, 0.1);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
