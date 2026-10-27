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
} from 'lucide-react';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('Weekly');

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
            <button className="text-sm text-gray-400 hover:text-white">Agents</button>
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
              onClick={() => alert('Ranking page - Coming soon')}
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
    </div>
  );
}
