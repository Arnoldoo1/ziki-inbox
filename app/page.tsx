'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
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
} from 'lucide-react';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('Weekly');
  const [view, setView] = useState<'original' | 'improved'>('improved');
  const [showFullExplanation, setShowFullExplanation] = useState(false);
  const [approved, setApproved] = useState(false);
  const [showDiff, setShowDiff] = useState(false);

  const toggleView = () => {
    setView((prev) => (prev === 'original' ? 'improved' : 'original'));
  };

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
              <Zap size={20} className="text-white" />
              <span className="text-white font-semibold text-lg">Ziki</span>
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
            <button className="flex items-center gap-1 text-sm hover:text-white">
              Agents <ChevronDown size={14} />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#1f1f1f]">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs font-semibold text-white">
                AN
              </div>
              <span className="text-sm">Arnold Nyamongo</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-6 py-6">
        <div className="mb-6">
          <div className="text-sm text-gray-400 mb-4">
            <span>Zedu</span> <span className="mx-1">{'>'}</span> <span className="text-white">Issues</span>
          </div>
          
          {/* Toggle Button */}
          <button
            onClick={toggleView}
            className="px-4 py-2 bg-[#111111] border border-[#1f1f1f] hover:bg-[#1f1f1f] text-white text-sm rounded-md transition-colors"
          >
            {view === 'original' ? 'Switch to Improved View' : 'Switch to Original View'}
          </button>
        </div>

        {/* Inbox Card */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-lg overflow-hidden">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-[#1f1f1f] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <span className="text-white font-medium">Sentinel</span>
              <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded border border-yellow-500/20">
                <Circle size={6} className="inline mr-1" fill="currentColor" /> Needs approval
              </span>
              <span className="text-gray-400 text-sm">#231</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-6 py-6">
            {view === 'original' ? (
              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                {paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            ) : (
              <div>
                <div className="mb-3">
                  <span className="text-xs tracking-wider text-gray-500 uppercase">TL;DR ACTION</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Action Required: Approve contrast fix for Issue #231
                </h2>
                <button
                  onClick={() => setShowFullExplanation((prev) => !prev)}
                  className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 mb-4 transition-colors"
                >
                  {showFullExplanation ? (
                    <>
                      <ChevronUp size={16} />
                      Hide full explanation
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show full explanation
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
            )}
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
