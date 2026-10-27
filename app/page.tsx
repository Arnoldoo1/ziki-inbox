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
  X,
  Stars,
  ArrowUpRight,
  FileEdit,
  UserCheck,
  CheckCircle,
  Wifi,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  MessageCircle,
  Layers,
  Award,
  Calendar,
  PartyPopper,
  Bot as BotIcon,
  Terminal,
  ArrowRight,
  User as UserIcon,
} from 'lucide-react';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('Weekly');
  const [showFullExplanation, setShowFullExplanation] = useState(false);
  const [approved, setApproved] = useState(false);
  const [showDiff, setShowDiff] = useState(false);
  const [showNewIssueModal, setShowNewIssueModal] = useState(false);
  const [showAgentsDropdown, setShowAgentsDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [voteCount, setVoteCount] = useState(6);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [showAgentsList, setShowAgentsList] = useState(true);
  const [sentinelStatus, setSentinelStatus] = useState({ status: '💤 Offline · Snoozing', activity: 'No recent activity', online: false });
  const [coddyStatus, setCoddyStatus] = useState({ status: '💤 Offline · Dreaming of Code', activity: 'No recent activity', online: false });
  const [toasts, setToasts] = useState<{ id: number, msg: string }[]>([]);

  const triggerToast = (msg: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2800);
  };

  const toggleUpvote = () => {
    if (isUpvoted) {
      setVoteCount(v => v - 1);
      setIsUpvoted(false);
      triggerToast('Vote removed (-1)');
    } else {
      setVoteCount(v => v + 1);
      setIsUpvoted(true);
      triggerToast('🚀 Upvoted issue #231! Thanks for contributing');
    }
  };

  const handleApprove = () => {
    setApproved(true);
    triggerToast('✅ Issue #231 approved!');
    setTimeout(() => setApproved(false), 3000);
  };

  const pingAgent = (agent: 'sentinel' | 'coddy') => {
    if (agent === 'sentinel') {
      setSentinelStatus({ status: '⚡ Online · Responsive ⚡', activity: 'Acked ping just now', online: true });
      triggerToast('⚡ Sentinel is awake! +5 Spark XP earned');
    } else {
      setCoddyStatus({ status: '⚡ Online · Responsive ⚡', activity: 'Acked ping just now', online: true });
      triggerToast('⚡ coddy is awake! +5 Spark XP earned');
    }
  };

  const pingAllAgents = () => {
    pingAgent('sentinel');
    setTimeout(() => pingAgent('coddy'), 250);
  };

  const paragraphs = [
    "The current color palette used for interactive elements in the navigation and action components fails to meet the WCAG 2.1 AA minimum contrast ratio of 4.5:1 against the background surfaces. Specifically, the secondary button text and disabled state indicators blend with their container backgrounds, making them difficult to distinguish for users with low vision or color perception deficiencies.",
    "Our analysis indicates that the contrast issue is most prominent on the 'Approve' and 'Reject' action row within agent-generated issue cards. When rendered on the #161b22 card background, the existing text color (#7d8590) yields a calculated contrast ratio of only 3.8:1, falling short of the accessibility threshold and creating potential compliance concerns for enterprise deployments.",
    "To remediate this, we propose updating the affected text and icon colors to #c9d1d9 for body content and utilizing the primary accent #3b82f6 for actionable elements with sufficient background differentiation. This change is isolated to the agent inbox component styles and should not introduce regressions to other dashboard modules.",
  ];

  return (
    <div className="bg-background font-body text-on-surface antialiased min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed relative overflow-x-hidden">
      {/* Whimsical Atmospheric Glow Orbs & Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-primary-fixed/25 blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/4 -right-28 w-[450px] h-[450px] rounded-full bg-secondary-fixed/30 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-tertiary-fixed/25 blur-3xl animate-float-gentle"></div>
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary-container/15 blur-2xl"></div>
        <span className="absolute top-28 left-[12%] text-secondary animate-float-gentle text-lg select-none opacity-60">✦</span>
        <span className="absolute top-44 right-[16%] text-primary-container animate-float-slow text-sm select-none opacity-70">★</span>
        <span className="absolute top-[60%] left-[8%] text-tertiary animate-float-slow text-base select-none opacity-50">✧</span>
        <span className="absolute top-[75%] right-[10%] text-secondary text-sm animate-float-gentle select-none opacity-65">✦</span>
        <span className="absolute top-[35%] left-[25%] text-primary animate-twinkle text-xs select-none">✨</span>
        <span className="absolute top-[15%] right-[35%] text-tertiary animate-twinkle text-sm select-none" style={{ animationDelay: '0.8s' }}>⭐</span>
        <span className="absolute bottom-[40%] right-[25%] text-secondary animate-twinkle text-xs select-none" style={{ animationDelay: '1.2s' }}>✦</span>
        <span className="absolute top-[85%] left-[20%] text-primary-container animate-twinkle text-sm select-none" style={{ animationDelay: '1.6s' }}>🌟</span>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] border-b border-surface-container-high/40">
        <div className="h-20 w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(250,128,114,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Zap className="text-on-primary text-xl" size={20} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline text-xl text-on-surface tracking-tight group-hover:text-primary transition-colors">Ziki</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] uppercase tracking-wider font-bold">Agent</span>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex items-center bg-surface-container-low p-1 rounded-full">
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-sm shadow-[0_2px_6px_0_rgba(42,37,51,0.04)] font-semibold">Product</button>
              <button className="px-3.5 py-1.5 rounded-full text-on-surface-variant font-label-md text-sm hover:text-on-surface transition-colors">Marketing</button>
              <button className="px-3.5 py-1.5 rounded-full text-on-surface-variant font-label-md text-sm hover:text-on-surface transition-colors">Security</button>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1 bg-surface-container-low px-2 py-1.5 rounded-full">
            <a className="px-4 py-2 rounded-full text-on-surface-variant font-label-lg text-sm transition-all hover:text-on-surface" href="#">Console</a>
            <a className="px-4 py-2 rounded-full bg-surface-container-lowest text-primary shadow-[0_2px_8px_rgba(42,37,51,0.06)] font-bold font-label-lg text-sm transition-all" href="#">Inbox</a>
            <a className="px-4 py-2 rounded-full text-on-surface-variant font-label-lg text-sm transition-all hover:text-on-surface" href="#">Issues</a>
            <a className="px-4 py-2 rounded-full text-on-surface-variant font-label-lg text-sm transition-all hover:text-on-surface" href="#">Ranking</a>
            <a className="px-4 py-2 rounded-full text-on-surface-variant font-label-lg text-sm transition-all hover:text-on-surface" href="#">Activity</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary-container/30 text-on-tertiary-container ring-1 ring-tertiary/20">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-md text-sm font-bold">Live Agent</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant shadow-[0_4px_12px_-2px_rgba(250,128,114,0.25)] transition-transform hover:scale-105 cursor-pointer">
              <Stars className="text-primary" size={16} />
              <span className="font-headline-sm text-base text-primary font-bold">29,674.99</span>
              <span className="font-label-sm text-xs text-on-surface-variant">pts</span>
            </div>
            <button className="relative w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-on-surface shadow-[0_2px_6px_0_rgba(42,37,51,0.04)] transition-all hover:scale-105 active:scale-95">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-xs flex items-center justify-center shadow-[0_2px_8px_rgba(162,61,52,0.35)] animate-bounce" style={{ animationDuration: '2.8s' }}>2</span>
            </button>
            <div className="relative">
              <button onClick={() => setShowUserDropdown(!showUserDropdown)} className="flex items-center gap-2 pl-1 cursor-pointer">
                <div className="relative group">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-primary-fixed">
                    <UserIcon className="text-on-primary" size={18} />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-tertiary ring-2 ring-surface"></span>
                </div>
                <div className="hidden 2xl:flex flex-col text-left">
                  <span className="font-label-md text-sm text-on-surface leading-tight font-semibold">AbdulSamad</span>
                  <span className="font-label-sm text-xs text-on-surface-variant leading-tight">Senior Operative</span>
                </div>
                <ChevronDown size={14} className="text-on-surface-variant hidden 2xl:block" />
              </button>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-surface-container-high rounded-lg shadow-xl z-50">
                  <div className="py-1">
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low">Profile</button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low">Settings</button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low">Logout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-background relative z-10">
        <div className="flex flex-col w-full">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 flex flex-col gap-8">
            {/* Top Welcome Banner */}
            <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative">
              <div className="flex items-start sm:items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-primary-container via-secondary-fixed to-tertiary-fixed p-1 shadow-[0_12px_28px_rgba(250,128,114,0.35)] animate-mascot cursor-pointer group hover:scale-110 transition-transform" onClick={() => triggerToast('✨ Ziki Spark Mascot says: You are doing AMAZING today! Keep shining! 🌟')}>
                    <div className="w-full h-full rounded-[1.3rem] bg-surface-container-lowest flex items-center justify-center relative overflow-hidden">
                      <span className="text-3xl select-none group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">🦊</span>
                      <span className="absolute -top-1 -right-1 text-xs animate-bounce">✨</span>
                      <span className="absolute -bottom-1 -left-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">💫</span>
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-full bg-gradient-to-r from-tertiary to-tertiary-container text-on-tertiary font-label-sm text-[10px] font-bold shadow-sm animate-wiggle">LVL 4 ✨</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className="font-headline text-3xl md:text-4xl text-on-surface tracking-tight font-extrabold flex items-center gap-2">
                      Welcome back, Arnold
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-secondary-fixed to-primary-fixed text-on-secondary-fixed text-base select-none shadow-[0_4px_12px_rgba(227,199,254,0.5)] animate-bounce hover:scale-125 transition-transform" style={{ animationDuration: '2.2s' }}>✨</span>
                    </h1>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary-fixed to-secondary-fixed text-on-primary-fixed-variant font-label-sm text-xs font-bold shadow-[0_2px_10px_rgba(250,128,114,0.2)] hover:scale-110 hover:shadow-[0_4px_16px_rgba(250,128,114,0.35)] transition-all cursor-pointer" onClick={() => triggerToast('🔥 Amazing! 5-day streak maintained! +50 Spark XP earned!')}>
                      <span className="animate-bounce-slow">🔥</span>
                      <span>5-Day Streak</span>
                      <span className="text-on-surface-variant font-medium">·</span>
                      <span className="text-tertiary font-bold">+50 Spark XP today</span>
                      <span className="animate-pulse">⚡</span>
                    </div>
                  </div>
                  <p className="font-body text-on-surface-variant font-medium flex items-center gap-2 flex-wrap">
                    <span>Issues, votes, and your weekly telemetry points for Ziki at a glance.</span>
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                    <span className="text-tertiary font-semibold hidden sm:inline">Telemetry sync healthy ⚡</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button onClick={() => setShowNewIssueModal(true)} className="group shimmer-btn relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-on-primary font-label-lg text-sm shadow-[0_10px_24px_-4px_rgba(162,61,52,0.45)] hover:shadow-[0_14px_32px_-4px_rgba(162,61,52,0.6)] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 transition-all duration-200">
                  <Plus size={18} className="transition-transform group-hover:rotate-180 duration-300" />
                  <span className="font-bold tracking-tight">New issue</span>
                  <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping"></span>
                  <span className="absolute -top-1 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                </button>
              </div>
            </section>

            {/* Stat Metric Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="group relative p-6 rounded-lg bg-surface-container-lowest/90 backdrop-blur-xl border border-surface-container-high/60 shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] hover:shadow-[0_20px_38px_-8px_rgba(250,128,114,0.32)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary-fixed/30 blur-2xl group-hover:bg-primary-fixed/55 group-hover:scale-125 transition-all duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary text-sm font-bold shadow-sm group-hover:rotate-12 transition-transform duration-300">
                      <Award size={16} />
                    </span>
                    <span className="font-label-lg text-sm text-on-surface-variant font-semibold">Points</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary-fixed/40 text-primary font-bold">🏆 Rank #4</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-200">
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 relative z-10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl md:text-5xl text-on-surface tracking-tight group-hover:text-primary transition-colors">719.82</span>
                    <span className="font-label-sm text-xs text-on-surface-variant font-bold uppercase tracking-wider">pts</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-xs font-bold shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      500 to go
                    </span>
                    <span className="font-label-sm text-xs text-on-surface-variant font-medium">500 req/week</span>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-lg bg-surface-container-lowest/90 backdrop-blur-xl border border-surface-container-high/60 shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] hover:shadow-[0_20px_38px_-8px_rgba(101,178,150,0.32)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-tertiary-fixed/35 blur-2xl group-hover:bg-tertiary-fixed/60 group-hover:scale-125 transition-all duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary text-sm font-bold shadow-sm group-hover:rotate-12 transition-transform duration-300">
                      <FileEdit size={16} />
                    </span>
                    <span className="font-label-lg text-sm text-on-surface-variant font-semibold">Created by me</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-tertiary-container/20 text-on-tertiary-container font-bold">✨ active</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-tertiary hover:text-on-tertiary transition-all duration-200">
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 relative z-10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline text-3xl text-on-surface tracking-tight group-hover:text-tertiary transition-colors">3</span>
                    <span className="font-label-sm text-xs text-on-surface-variant font-medium">tickets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/20 text-on-tertiary-container font-label-md text-xs font-bold shadow-sm">
                      <TrendingUp size={12} />
                      +3 last 30d
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-lg bg-surface-container-lowest/90 backdrop-blur-xl border border-surface-container-high/60 shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] hover:shadow-[0_20px_38px_-8px_rgba(227,199,254,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-secondary-fixed/40 blur-2xl group-hover:bg-secondary-fixed/65 group-hover:scale-125 transition-all duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center text-secondary text-sm font-bold shadow-sm group-hover:rotate-12 transition-transform duration-300">
                      <UserCheck size={16} />
                    </span>
                    <span className="font-label-lg text-sm text-on-surface-variant font-semibold">Assigned to me</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">🎯 On track</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all duration-200">
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 relative z-10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline text-3xl text-on-surface tracking-tight group-hover:text-secondary transition-colors">1</span>
                    <span className="font-label-sm text-xs text-on-surface-variant font-medium">active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-md text-xs font-bold shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      0 high priority
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 rounded-lg bg-surface-container-lowest/90 backdrop-blur-xl border border-surface-container-high/60 shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] hover:shadow-[0_20px_38px_-8px_rgba(157,132,183,0.28)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-surface-container-highest/40 blur-2xl group-hover:bg-surface-container-highest/70 group-hover:scale-125 transition-all duration-500"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant text-sm font-bold shadow-sm group-hover:rotate-12 transition-transform duration-300">
                      <CheckCircle size={16} />
                    </span>
                    <span className="font-label-lg text-sm text-on-surface-variant font-semibold">Resolved issues</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">🏁 Sprint 42</span>
                    <button className="w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container-highest transition-all duration-200">
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 relative z-10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline text-3xl text-on-surface tracking-tight">0</span>
                    <span className="font-label-sm text-xs text-on-surface-variant font-medium">completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-xs">
                      <div className="w-3.5 h-3.5">
                        <svg viewBox="0 0 36 36">
                          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" opacity="0.25" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="5"></path>
                        </svg>
                      </div>
                      0% assigned resolved
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Issues Assigned to Me */}
            <section className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h2 className="font-headline text-xl md:text-2xl text-on-surface tracking-tight font-bold">Issues assigned to me</h2>
                  <span className="px-3 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-xs font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    1 issue · sorted by top votes
                  </span>
                </div>
                <button className="inline-flex items-center gap-1.5 text-primary hover:text-on-primary-fixed-variant font-label-lg text-sm font-bold transition-all group">
                  <span>View all issues</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full bg-surface-container-lowest/95 backdrop-blur-xl rounded-lg shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] border border-surface-container-high/60 p-2 sm:p-3 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[760px]">
                    <thead>
                      <tr className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider border-b border-surface-container-high/60">
                        <th className="py-3.5 px-4 w-24">Votes</th>
                        <th className="py-3.5 px-4">Issue</th>
                        <th className="py-3.5 px-4 w-28">Type</th>
                        <th className="py-3.5 px-4 w-32">Priority</th>
                        <th className="py-3.5 px-4 w-36">Status</th>
                        <th className="py-3.5 px-4 w-24 text-center">Stage</th>
                        <th className="py-3.5 px-4 w-28 text-right">Reported</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="group hover:bg-surface-container-low/70 transition-colors duration-200 rounded-xl">
                        <td className="py-3.5 px-4 align-middle">
                          <button onClick={toggleUpvote} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${isUpvoted ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'} hover:bg-primary-fixed hover:text-on-primary-fixed-variant active:scale-90 transition-all duration-150 font-label-md text-xs font-bold shadow-sm`}>
                            <ChevronUpIcon size={14} className="transition-transform group-hover:-translate-y-0.5" />
                            <span>{voteCount}</span>
                          </button>
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-secondary-fixed/60 flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                              <Layers size={18} />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-body text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                                Low contrast on the "View all channels" button in the ...
                              </span>
                              <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant">
                                <span className="font-bold text-on-surface">#231</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <MessageCircle size={12} />
                                  2 comments
                                </span>
                                <span>•</span>
                                <span className="text-tertiary font-medium">UI / Contrast audit</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-xs font-semibold inline-flex items-center gap-1">
                            <span>🔧</span> Fix
                          </span>
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-md text-xs font-bold">
                            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                            Medium
                          </span>
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-xs font-bold shadow-[0_2px_8px_rgba(227,199,254,0.35)]">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            In progress
                          </span>
                        </td>
                        <td className="py-3.5 px-4 align-middle text-center text-on-surface-variant font-body text-sm">—</td>
                        <td className="py-3.5 px-4 align-middle text-right font-label-md text-xs text-on-surface-variant font-medium">Oct 18</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Your Points Section */}
            <section className="flex flex-col gap-4">
              <div className="w-full bg-surface-container-lowest/95 backdrop-blur-xl rounded-lg p-6 sm:p-8 shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] border border-surface-container-high/60 flex flex-col gap-8 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <h2 className="font-headline text-xl md:text-2xl text-on-surface tracking-tight font-bold">Your points</h2>
                      <span className="px-3 py-1 rounded-full bg-tertiary-container/30 text-on-tertiary-container font-label-sm text-xs font-extrabold flex items-center gap-1.5 shadow-sm animate-bounce" style={{ animationDuration: '2.6s' }}>
                        <span>🚀</span> Goal Achieved!
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-semibold">
                        ✨ +219.82 surplus
                      </span>
                    </div>
                    <p className="font-body text-on-surface-variant">
                      Points earned each week, last 8 weeks · <span className="text-on-surface font-semibold">500 pts required</span>, more is always welcome.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-between lg:justify-end">
                    <div className="flex items-center gap-2">
                      <button className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-xs hover:bg-surface-container-high transition-colors font-medium">
                        <Calendar size={14} className="text-on-surface-variant" />
                        <span>All dates</span>
                        <ChevronDownIcon size={12} />
                      </button>
                      <div className="flex items-center bg-surface-container-low p-1 rounded-full text-on-surface-variant">
                        <button onClick={() => setTimeRange('Daily')} className={`px-3 py-1 rounded-full font-label-md text-xs ${timeRange === 'Daily' ? 'bg-surface-container-lowest text-primary font-bold shadow-[0_2px_8px_rgba(42,37,51,0.06)]' : 'hover:text-on-surface transition-colors'}`}>Daily</button>
                        <button onClick={() => setTimeRange('Weekly')} className={`px-3.5 py-1 rounded-full font-label-md text-xs ${timeRange === 'Weekly' ? 'bg-surface-container-lowest text-primary font-bold shadow-[0_2px_8px_rgba(42,37,51,0.06)]' : 'hover:text-on-surface transition-colors'}`}>Weekly</button>
                        <button onClick={() => setTimeRange('Monthly')} className={`px-3 py-1 rounded-full font-label-md text-xs ${timeRange === 'Monthly' ? 'bg-surface-container-lowest text-primary font-bold shadow-[0_2px_8px_rgba(42,37,51,0.06)]' : 'hover:text-on-surface transition-colors'}`}>Monthly</button>
                        <button onClick={() => setTimeRange('Yearly')} className={`px-3 py-1 rounded-full font-label-md text-xs ${timeRange === 'Yearly' ? 'bg-surface-container-lowest text-primary font-bold shadow-[0_2px_8px_rgba(42,37,51,0.06)]' : 'hover:text-on-surface transition-colors'}`}>Yearly</button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pl-2 group cursor-pointer" onClick={() => triggerToast('🌟 Incredible work! Top tier ranking this week.')}>
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-[0_4px_16px_rgba(250,128,114,0.35)] group-hover:scale-110 transition-transform">
                        <PartyPopper size={24} />
                      </div>
                      <div className="flex flex-col text-right">
                        <div className="flex items-baseline gap-1 justify-end">
                          <span className="font-headline text-2xl md:text-3xl text-primary tracking-tight font-extrabold group-hover:scale-105 transition-transform">719.82</span>
                          <span className="font-label-sm text-xs text-on-surface-variant font-bold">pts</span>
                        </div>
                        <span className="font-label-sm text-xs text-on-surface-variant">in selected range</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-5 text-on-surface-variant font-label-sm text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary-container shadow-[0_2px_6px_rgba(250,128,114,0.4)]"></span>
                    <span className="font-semibold text-on-surface">500 reached</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-surface-container-highest"></span>
                    <span>Below 500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-0.5 border-t-2 border-dashed border-outline-variant"></span>
                    <span>Weekly requirement (500 pts)</span>
                  </div>
                </div>
                <div className="relative w-full pt-10 pb-4">
                  <div className="absolute left-0 right-0 top-[38%] flex items-center pointer-events-none z-10">
                    <div className="w-full border-t-2 border-dashed border-primary/30"></div>
                    <span className="shrink-0 ml-3 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-xs font-bold shadow-sm flex items-center gap-1">
                      <span>🎯</span> 500 pts target
                    </span>
                  </div>
                  <div className="grid grid-cols-8 gap-2 sm:gap-4 md:gap-6 items-end h-64 pt-6">
                    {[{d:'7 Sept',h:'44%'},{d:'14 Sept',h:'44%'},{d:'21 Sept',h:'44%'},{d:'28 Sept',h:'44%'},{d:'5 Oct',h:'44%'},{d:'12 Oct',h:'44%'},{d:'19 Oct',h:'48%',hero:true},{d:'26 Oct',h:'44%'}].map((bar, i) => (
                      <div key={i} className="group flex flex-col items-center h-full justify-end cursor-pointer relative z-20" onClick={() => bar.hero ? triggerToast('🎉 719.82 PTS: Peak milestone unlocked (+219.82 surplus!)') : triggerToast(`📊 ${bar.d}: 0 points recorded`)}>
                        {bar.hero && (
                          <div className="mb-1.5 flex flex-col items-center group-hover:scale-110 transition-transform">
                            <div className="flex items-center gap-1">
                              <span className="text-xs select-none animate-bounce" style={{ animationDuration: '1.5s' }}>🎉</span>
                              <span className="px-2.5 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-xs font-extrabold shadow-[0_4px_12px_rgba(21,107,83,0.35)] ring-2 ring-tertiary-fixed/50">+219.82</span>
                              <span className="text-xs select-none animate-bounce" style={{ animationDuration: '1.8s' }}>✨</span>
                            </div>
                            <span className="font-label-md text-xs font-bold text-on-surface mt-0.5">719.82</span>
                          </div>
                        )}
                        {!bar.hero && (
                          <span className="font-label-sm text-xs text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity mb-2 font-bold">0 pts</span>
                        )}
                        <div className={`w-full max-w-[${bar.hero ? '44px' : '42px'}] h-${bar.hero ? '48' : '44'} rounded-full ${bar.hero ? 'bg-gradient-to-b from-primary-container via-primary-container to-primary shadow-[0_12px_28px_rgba(250,128,114,0.5)] ring-4 ring-primary-fixed' : 'bg-surface-container-low'} flex flex-col justify-end p-1 transition-all group-hover:scale-110 ${bar.hero ? 'group-hover:shadow-[0_16px_36px_rgba(250,128,114,0.65)]' : 'group-hover:bg-surface-container'} flex flex-col justify-between items-center py-2 relative`}>
                          {bar.hero && <span className="w-2.5 h-2.5 rounded-full bg-on-primary animate-ping"></span>}
                          {bar.hero && <TrendingUp className="text-on-primary" size={16} />}
                          {!bar.hero && <div className="w-full h-2 rounded-full bg-surface-container-high"></div>}
                        </div>
                        <span className={`mt-3 font-label-sm text-xs ${bar.hero ? 'font-extrabold text-primary' : 'text-on-surface-variant group-hover:text-on-surface font-medium'} truncate max-w-full text-center flex items-center justify-center gap-0.5`}>
                          <span>{bar.d}</span>
                          {bar.hero && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Your Agents Section */}
            <section className="flex flex-col gap-4">
              <div className="w-full bg-surface-container-lowest/95 backdrop-blur-xl rounded-lg p-6 sm:p-8 shadow-[0_8px_24px_-4px_rgba(157,132,183,0.12)] border border-surface-container-high/60 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="font-headline text-xl md:text-2xl text-on-surface tracking-tight font-bold">Your agents</h2>
                    <span className="w-7 h-7 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs flex items-center justify-center font-bold shadow-sm">2</span>
                    <span className="hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-xs font-semibold">
                      🤖 Autonomous fleet ready
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={pingAllAgents} className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-xs font-semibold transition-all flex items-center gap-1.5">
                      <Wifi size={14} />
                      <span>Ping Fleet</span>
                    </button>
                    <button onClick={() => setShowAgentsList(!showAgentsList)} className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors">
                      <ChevronUpIcon size={18} className={`transition-transform duration-300 ${!showAgentsList ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
                {showAgentsList && (
                  <div className="overflow-x-auto transition-all duration-300">
                    <table className="w-full text-left min-w-[620px]">
                      <thead>
                        <tr className="text-on-surface-variant font-label-sm text-xs uppercase tracking-wider border-b border-surface-container-high/60">
                          <th className="py-3 px-4">Agent</th>
                          <th className="py-3 px-4 w-44">Status & Mood</th>
                          <th className="py-3 px-4">Current Activity</th>
                          <th className="py-3 px-4 w-36 text-right">Last Seen</th>
                          <th className="py-3 px-4 w-28 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y-0">
                        <tr className="group hover:bg-surface-container-low/70 transition-colors duration-200">
                          <td className="py-4 px-4 align-middle">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-2xl bg-secondary-container/50 flex items-center justify-center text-secondary relative group-hover:scale-105 transition-all shadow-sm">
                                <BotIcon size={24} />
                                <span className="absolute -bottom-1 -right-1 text-xs">🥒</span>
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                  <span className="font-headline-sm text-base text-on-surface font-bold">Sentinel</span>
                                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-bold">Big Pickle</span>
                                </div>
                                <span className="font-label-sm text-xs text-on-surface-variant">Core watchdog operative</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 align-middle">
                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-md text-xs font-semibold ${sentinelStatus.online ? 'bg-tertiary-container/30 text-on-tertiary-container font-bold' : 'bg-surface-container text-on-surface-variant'}`}>
                              {sentinelStatus.online && <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>}
                              <span>{sentinelStatus.status}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 align-middle font-body text-sm text-on-surface-variant">
                            {sentinelStatus.activity}
                          </td>
                          <td className="py-4 px-4 align-middle text-right font-label-md text-xs text-on-surface-variant font-medium">3 days ago</td>
                          <td className="py-4 px-4 align-middle text-right">
                            <button onClick={() => pingAgent('sentinel')} className="px-3.5 py-1.5 rounded-full bg-surface-container-low hover:bg-primary-fixed hover:text-on-primary-fixed-variant active:scale-95 text-on-surface font-label-sm text-xs font-bold transition-all shadow-sm">
                              Ping
                            </button>
                          </td>
                        </tr>
                        <tr className="group hover:bg-surface-container-low/70 transition-colors duration-200">
                          <td className="py-4 px-4 align-middle">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-2xl bg-tertiary-container/30 flex items-center justify-center text-tertiary relative group-hover:scale-105 transition-all shadow-sm">
                                <Terminal size={24} />
                                <span className="absolute -bottom-1 -right-1 text-xs">⚡</span>
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                  <span className="font-headline-sm text-base text-on-surface font-bold">coddy</span>
                                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-container font-label-sm text-xs font-bold">Autopilot</span>
                                </div>
                                <span className="font-label-sm text-xs text-on-surface-variant">Code analyzer daemon</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 align-middle">
                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-md text-xs font-semibold ${coddyStatus.online ? 'bg-tertiary-container/30 text-on-tertiary-container font-bold' : 'bg-surface-container text-on-surface-variant'}`}>
                              {coddyStatus.online && <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>}
                              <span>{coddyStatus.status}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 align-middle font-body text-sm text-on-surface-variant">
                            {coddyStatus.activity}
                          </td>
                          <td className="py-4 px-4 align-middle text-right font-label-md text-xs text-on-surface-variant font-medium">4 days ago</td>
                          <td className="py-4 px-4 align-middle text-right">
                            <button onClick={() => pingAgent('coddy')} className="px-3.5 py-1.5 rounded-full bg-surface-container-low hover:bg-primary-fixed hover:text-on-primary-fixed-variant active:scale-95 text-on-surface font-label-sm text-xs font-bold transition-all shadow-sm">
                              Ping
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </section>

            {/* Floating Vibe Check & Fun Widgets */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
              <div className="p-2 rounded-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_8px_24px_rgba(157,132,183,0.25)] border border-surface-container-high flex items-center gap-2 px-4 py-2 hover:scale-110 hover:rotate-2 transition-all cursor-pointer group" onClick={() => triggerToast('💫 Vibe Level: 200% Whimsical & Synchronized!')}>
                <span className="animate-spin text-sm" style={{ animationDuration: '8s' }}>✨</span>
                <span className="font-label-sm text-xs text-on-surface font-bold">Vibe Check</span>
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span className="absolute -top-1 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">💚</span>
              </div>
              <div className="p-2 rounded-full bg-gradient-to-r from-secondary-fixed to-primary-fixed/50 backdrop-blur-xl shadow-[0_8px_24px_rgba(227,199,254,0.35)] border border-secondary/30 flex items-center gap-2 px-3 py-1.5 hover:scale-110 transition-all cursor-pointer" onClick={() => triggerToast('🎨 Theme: Sparkle Mode Activated!')}>
                <span className="text-sm animate-bounce" style={{ animationDuration: '1.5s' }}>🎭</span>
                <span className="font-label-sm text-xs text-on-secondary-fixed font-bold">Sparkle Mode</span>
              </div>
            </div>

            {/* Toast Container */}
            <div className="fixed bottom-20 right-6 z-50 flex flex-col gap-2 pointer-events-none">
              {toasts.map(toast => (
                <div key={toast.id} className="toast-enter pointer-events-auto px-4 py-2.5 rounded-full bg-on-surface text-surface font-label-md text-xs font-semibold shadow-xl flex items-center gap-2 border border-surface/20">
                  <span>✨</span>
                  <span>{toast.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-low mt-16 py-10 relative z-10 border-t border-surface-container-high/40">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <Zap size={14} />
            </div>
            <span className="font-label-md text-xs text-on-surface-variant">© 2025 Ziki Agent Workspace. Joyful telemetry and operational sync.</span>
          </div>
          <div className="flex items-center gap-6 font-label-md text-xs text-on-surface-variant">
            <a className="hover:text-on-surface transition-colors" href="#">Security Protocols</a>
            <a className="hover:text-on-surface transition-colors" href="#">Agent Docs</a>
            <a className="hover:text-on-surface transition-colors" href="#">Telemetry Status</a>
          </div>
        </div>
      </footer>

      {/* Diff Modal */}
      {showDiff && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowDiff(false)}>
          <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-surface-container-high flex items-center justify-between">
              <h3 className="text-on-surface font-medium">Diff - Issue #231</h3>
              <button onClick={() => setShowDiff(false)} className="text-on-surface-variant hover:text-on-surface transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div>
                <div className="text-sm font-medium mb-2 text-error">- Removed</div>
                <pre className="text-xs bg-surface-container p-3 rounded overflow-x-auto border border-surface-container-high">
                  <code>{`- color: #7d8590;\n- background: rgba(125, 133, 144, 0.1);`}</code>
                </pre>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-tertiary">+ Added</div>
                <pre className="text-xs bg-surface-container p-3 rounded overflow-x-auto border border-surface-container-high">
                  <code>{`+ color: #c9d1d9;\n+ background: rgba(201, 209, 217, 0.1);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Issue Modal */}
      {showNewIssueModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowNewIssueModal(false)}>
          <div className="bg-surface-container-lowest border border-surface-container-high rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-surface-container-high flex items-center justify-between">
              <h3 className="text-on-surface font-medium">Create New Issue</h3>
              <button onClick={() => setShowNewIssueModal(false)} className="text-on-surface-variant hover:text-on-surface transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="text-sm text-on-surface-variant mb-2 block">Title</label>
                <input type="text" className="w-full px-3 py-2 bg-surface-container border border-surface-container-high rounded-md text-on-surface focus:outline-none focus:border-primary" placeholder="Enter issue title" />
              </div>
              <div>
                <label className="text-sm text-on-surface-variant mb-2 block">Description</label>
                <textarea className="w-full px-3 py-2 bg-surface-container border border-surface-container-high rounded-md text-on-surface focus:outline-none focus:border-primary h-24" placeholder="Describe the issue"></textarea>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowNewIssueModal(false)} className="flex-1 px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface text-sm rounded-md transition-colors">
                  Cancel
                </button>
                <button onClick={() => { setShowNewIssueModal(false); triggerToast('Issue created successfully!'); }} className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-on-primary text-sm rounded-md transition-colors">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
