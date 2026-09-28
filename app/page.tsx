'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  LockKeyhole,
  MessageSquareText,
  MoreHorizontal,
  Phone,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const recentReplies = [
  { date: 'Today, Sep 28', time: '7:42 AM', text: 'I got the contract back and cleared the follow-up tasks.', status: 'Encrypted' },
  { date: 'Yesterday, Sep 27', time: '7:38 AM', text: 'A focused day. I made space for the thing I kept postponing.', status: 'Encrypted' },
  { date: 'Sep 26', time: '7:41 AM', text: 'The conversation went better than expected.', status: 'Encrypted' },
]

export default function Page() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [enabled, setEnabled] = useState(true)
  const [showFullQuestion, setShowFullQuestion] = useState(false)

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#16202c]">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <aside className="hidden w-[242px] flex-col border-r border-[#e4e7eb] bg-white px-5 py-7 lg:flex">
          <div className="flex items-center gap-2.5 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#d9f5e8] text-[#13734b]"><MessageSquareText size={17} strokeWidth={2.3} /></div>
            <span className="text-[17px] font-semibold tracking-[-0.02em]">Daily Signal</span>
          </div>
          <div className="mt-12 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b95a1]">Workspace</div>
          <nav className="mt-3 space-y-1">
            {['Overview', 'Question schedule', 'Reply archive'].map((item) => (
              <button key={item} onClick={() => setActiveTab(item)} className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition ${activeTab === item ? 'bg-[#eef8f2] text-[#13734b]' : 'text-[#62707e] hover:bg-[#f6f7f9]'}`}>
                {item === 'Overview' ? <Sparkles size={15} className="mr-3" /> : item === 'Question schedule' ? <Clock3 size={15} className="mr-3" /> : <LockKeyhole size={15} className="mr-3" />}
                {item}
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-xl border border-[#dfeee5] bg-[#f2faf5] p-4">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#13734b]"><ShieldCheck size={15} /> Private by design</div>
            <p className="mt-2 text-[11px] leading-5 text-[#668073]">Your replies are encrypted before they leave the app.</p>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-[#e4e7eb] bg-white px-6 sm:px-10">
            <div className="lg:hidden flex items-center gap-2 font-semibold"><div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#d9f5e8] text-[#13734b]"><MessageSquareText size={17} /></div> Daily Signal</div>
            <div className="hidden text-[13px] text-[#84909d] lg:block">Personal workspace <span className="mx-2">/</span> <span className="text-[#354150]">Overview</span></div>
            <div className="flex items-center gap-4"><div className="hidden items-center gap-2 text-[12px] text-[#667382] sm:flex"><span className="h-2 w-2 rounded-full bg-[#33b978]" /> All systems operational</div><button className="flex items-center gap-2 rounded-lg border border-[#e0e4e8] px-3 py-2 text-[12px] font-medium text-[#455361]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d9e7f8] text-[10px] font-semibold text-[#35618e]">JD</span> Jordan <ChevronDown size={14} /></button></div>
          </header>

          <div className="mx-auto max-w-[1120px] px-6 py-9 sm:px-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#778493]">Monday, September 28, 2026</p><h1 className="mt-2 text-[30px] font-semibold tracking-[-0.04em] text-[#17212c]">Good morning, Jordan.</h1><p className="mt-2 text-[14px] text-[#74818e]">Your daily check-in is on track.</p></div><button className="flex w-fit items-center gap-2 rounded-lg bg-[#173c30] px-4 py-2.5 text-[12px] font-semibold text-white shadow-sm hover:bg-[#225743]"><Plus size={15} /> New question</button></div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[#e2e6e9] bg-white p-5"><div className="flex items-center justify-between"><span className="text-[12px] text-[#7e8995]">Next question</span><Clock3 size={16} className="text-[#a4afb9]" /></div><p className="mt-3 text-[24px] font-semibold tracking-[-0.04em]">Tomorrow, 7:30 AM</p><p className="mt-1 text-[12px] text-[#88939e]">America / New York</p></div>
              <div className="rounded-xl border border-[#e2e6e9] bg-white p-5"><div className="flex items-center justify-between"><span className="text-[12px] text-[#7e8995]">Response streak</span><Sparkles size={16} className="text-[#c69345]" /></div><p className="mt-3 text-[24px] font-semibold tracking-[-0.04em]">12 days</p><p className="mt-1 text-[12px] text-[#88939e]">Your longest yet</p></div>
              <div className="rounded-xl border border-[#e2e6e9] bg-white p-5"><div className="flex items-center justify-between"><span className="text-[12px] text-[#7e8995]">Privacy status</span><LockKeyhole size={16} className="text-[#3aa978]" /></div><p className="mt-3 text-[24px] font-semibold tracking-[-0.04em]">Encrypted</p><p className="mt-1 text-[12px] text-[#88939e]">AES-256 at rest</p></div>
            </div>

            <div className="mt-7 grid gap-5 xl:grid-cols-[1.35fr_0.8fr]">
              <div className="rounded-xl border border-[#e2e6e9] bg-white"><div className="flex items-center justify-between border-b border-[#edf0f2] px-6 py-5"><div><h2 className="text-[15px] font-semibold">Today&apos;s question</h2><p className="mt-1 text-[12px] text-[#89949f]">Sent via SMS to <span className="font-medium text-[#53616f]">+1 (•••) •••-0184</span></p></div><span className="rounded-full bg-[#eaf8f0] px-2.5 py-1 text-[10px] font-semibold text-[#218258]">Delivered</span></div><div className="px-6 py-6"><div className="rounded-lg bg-[#f7f8fa] p-5 text-[17px] leading-7 tracking-[-0.01em] text-[#26323e]">What is one thing you want to make space for today?</div><div className="mt-5 flex items-center justify-between"><div className="flex items-center gap-2 text-[12px] text-[#8a949e]"><Check size={15} className="text-[#38a874]" /> Reply received at 7:42 AM</div><button onClick={() => setShowFullQuestion(!showFullQuestion)} className="flex items-center gap-1 text-[12px] font-semibold text-[#287b59]">{showFullQuestion ? 'Hide details' : 'View details'} <ArrowUpRight size={13} /></button></div>{showFullQuestion && <div className="mt-4 border-t border-[#edf0f2] pt-4 text-[12px] text-[#74818e]">The reply is encrypted client-side and stored privately. Only you can access your archive.</div>}</div></div>

              <div className="rounded-xl border border-[#e2e6e9] bg-white"><div className="border-b border-[#edf0f2] px-6 py-5"><h2 className="text-[15px] font-semibold">Delivery settings</h2><p className="mt-1 text-[12px] text-[#89949f]">Your daily check-in preferences</p></div><div className="space-y-5 px-6 py-6"><div className="flex items-center justify-between"><div><p className="text-[13px] font-medium">Daily questions</p><p className="mt-1 text-[11px] text-[#8a949e]">Every day at 7:30 AM</p></div><button aria-label="Toggle daily questions" onClick={() => setEnabled(!enabled)} className={`relative h-6 w-11 rounded-full transition ${enabled ? 'bg-[#35a873]' : 'bg-[#c6cdd3]'}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${enabled ? 'left-6' : 'left-1'}`} /></button></div><div className="flex items-center justify-between border-t border-[#edf0f2] pt-5"><div><p className="text-[13px] font-medium">Phone number</p><p className="mt-1 text-[11px] text-[#8a949e]">+1 (•••) •••-0184</p></div><Phone size={16} className="text-[#9aa5af]" /></div><button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#dfe4e8] py-2.5 text-[12px] font-semibold text-[#53616e] hover:bg-[#f8f9fa]">Manage schedule <ArrowUpRight size={13} /></button></div></div>
            </div>

            <div className="mt-7 rounded-xl border border-[#e2e6e9] bg-white"><div className="flex items-center justify-between border-b border-[#edf0f2] px-6 py-5"><div><h2 className="text-[15px] font-semibold">Recent replies</h2><p className="mt-1 text-[12px] text-[#89949f]">Your private reflection archive</p></div><button className="text-[#8d98a3]"><MoreHorizontal size={18} /></button></div><div className="divide-y divide-[#edf0f2]">{recentReplies.map((reply) => <div key={reply.date} className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-start gap-4"><div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf8f2] text-[#3aa274]"><LockKeyhole size={13} /></div><div className="min-w-0"><p className="truncate text-[13px] text-[#344250]">{reply.text}</p><p className="mt-1 text-[11px] text-[#98a1aa]">{reply.date} <span className="mx-1">·</span> {reply.time}</p></div></div><span className="ml-11 w-fit text-[10px] font-semibold text-[#4b9c76]">{reply.status}</span></div>)}</div><div className="border-t border-[#edf0f2] px-6 py-4"><button className="flex items-center gap-2 text-[12px] font-semibold text-[#287b59]">View all replies <ArrowUpRight size={13} /></button></div></div>
            <p className="mt-8 flex items-center justify-center gap-2 text-center text-[11px] text-[#9aa3ac]"><ShieldCheck size={13} /> End-to-end encrypted workspace <span className="hidden sm:inline">·</span> Your data is never sold or used for training</p>
          </div>
        </section>
      </div>
    </main>
  )
}
