'use client';

import { useState } from 'react';
import {
  Zap,
  ChevronDown,
  Bot,
  Circle,
  Check,
  FileDiff,
} from 'lucide-react';

export default function Home() {
  const [view, setView] = useState<'original' | 'improved'>('original');
  const [showFullExplanation, setShowFullExplanation] = useState(false);

  const toggleView = () => {
    setView((prev) => (prev === 'original' ? 'improved' : 'original'));
  };

  const paragraphs = [
    "The current color palette used for interactive elements in the navigation and action components fails to meet the WCAG 2.1 AA minimum contrast ratio of 4.5:1 against the background surfaces. Specifically, the secondary button text and disabled state indicators blend with their container backgrounds, making them difficult to distinguish for users with low vision or color perception deficiencies.",
    "Our analysis indicates that the contrast issue is most prominent on the 'Approve' and 'Reject' action row within agent-generated issue cards. When rendered on the #161b22 card background, the existing text color (#7d8590) yields a calculated contrast ratio of only 3.8:1, falling short of the accessibility threshold and creating potential compliance concerns for enterprise deployments.",
    "To remediate this, we propose updating the affected text and icon colors to #c9d1d9 for body content and utilizing the primary accent #3b82f6 for actionable elements with sufficient background differentiation. This change is isolated to the agent inbox component styles and should not introduce regressions to other dashboard modules.",
  ];

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: '#0d1117', color: '#c9d1d9' }}
    >
      {/* Top Nav Bar */}
      <nav
        className="flex items-center justify-between px-6 py-3 border-b"
        style={{ borderColor: '#30363d', backgroundColor: '#0d1117' }}
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-white" />
            <span className="text-white font-semibold text-lg">Ziki</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Zedu <ChevronDown size={16} />
            </button>
            <button className="hover:text-white transition-colors">Product</button>
            <button className="hover:text-white transition-colors">Marketing</button>
            <button className="hover:text-white transition-colors">Security</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm border hover:bg-[#161b22] transition-colors"
            style={{ borderColor: '#30363d' }}
          >
            Agents <ChevronDown size={16} />
          </button>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
              style={{ backgroundColor: '#238636' }}
            >
              AN
            </div>
            <span className="text-sm hidden sm:block">Arnold Nyamongo</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </nav>

      {/* Main Area */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <span>Zedu</span> <span className="mx-1">{'>'}</span>{' '}
          <span className="text-white">Issues</span>
        </div>

        {/* Toggle Switch */}
        <div className="mb-6">
          <button
            onClick={toggleView}
            className="px-4 py-2 rounded-md text-sm border transition-colors hover:bg-[#161b22]"
            style={{ borderColor: '#30363d', backgroundColor: '#161b22' }}
          >
            {view === 'original'
              ? 'View: Original Ziki (Before)'
              : 'View: My Improvement (After)'}
          </button>
        </div>

        {/* Inbox Card */}
        <div
          className="rounded-lg border overflow-hidden"
          style={{ backgroundColor: '#161b22', borderColor: '#30363d' }}
        >
          {/* Card Header */}
          <div
            className="px-6 py-4 border-b flex items-center justify-between flex-wrap gap-3"
            style={{ borderColor: '#30363d' }}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-white" />
                <span className="text-white font-medium">Sentinel</span>
                <span
                  className="px-1.5 py-0.5 text-xs rounded border"
                  style={{ borderColor: '#30363d', color: '#8b949e' }}
                >
                  AGENT
                </span>
              </div>
              <span style={{ color: '#8b949e' }}>#231</span>
              <span
                className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border"
                style={{
                  borderColor: '#d29922',
                  color: '#d29922',
                  backgroundColor: 'rgba(210, 153, 34, 0.1)',
                }}
              >
                <Circle size={6} fill="#d29922" /> Needs approval
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-6 py-5">
            {view === 'original' ? (
              <div>
                <div className="space-y-4 text-sm leading-relaxed">
                  {paragraphs.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
                <div className="mt-4">
                  <button
                    className="text-xs px-2 py-1 rounded hover:bg-[#0d1117] transition-colors"
                    style={{ color: '#8b949e' }}
                  >
                    ⚡ Show TL;DR
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-3">
                  <span
                    className="text-xs tracking-wider"
                    style={{ color: '#8b949e' }}
                  >
                    TL;DR ACTION
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Action Required: Approve contrast fix for Issue #231
                </h2>
                <button
                  onClick={() => setShowFullExplanation((prev) => !prev)}
                  className="flex items-center gap-1 text-sm mb-4 hover:underline transition-all"
                  style={{ color: '#3b82f6' }}
                >
                  <span
                    className={`transition-transform duration-200 ${
                      showFullExplanation ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                  {showFullExplanation
                    ? '⌃ Hide full explanation'
                    : '⌄ Show full explanation'}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    showFullExplanation
                      ? 'max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-4 text-sm leading-relaxed pt-2">
                    {paragraphs.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div
            className="px-6 py-4 border-t flex justify-end gap-3"
            style={{ borderColor: '#30363d' }}
          >
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm border hover:bg-[#0d1117] transition-colors"
              style={{ borderColor: '#30363d' }}
            >
              <FileDiff size={16} />
              View Diff
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#3b82f6' }}
            >
              <Check size={16} />
              Approve fix
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
