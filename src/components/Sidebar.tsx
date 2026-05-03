import { Compass, Calendar as CalendarIcon, CheckSquare, MessageSquare, MapPin } from 'lucide-react';
import React from 'react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Compass },
    { id: 'timeline', label: 'Timeline', icon: CalendarIcon },
    { id: 'voter', label: 'Voter Checklist', icon: CheckSquare },
    { id: 'state', label: 'State Info', icon: MapPin },
    { id: 'assistant', label: 'Ask Assistant', icon: MessageSquare },
  ];

  return (
    <aside className={`w-72 bg-[#f9f8f5] border-r border-[#d4d1ca] h-full flex flex-col p-6 flex-shrink-0`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 p-2 rounded-xl bg-[#01696f]/10 text-[#01696f] flex items-center justify-center">
          <Compass size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight">Election Compass</h1>
          <p className="text-xs text-[#6f6d68]">Interactive process guide</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wider text-[#6f6d68] mb-2 font-medium">Sections</div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 w-full text-left font-medium
              ${activeView === item.id 
                ? 'bg-[#01696f]/10 text-[#28251d] shadow-[inset_0_0_0_1px_rgba(1,105,111,0.22)]' 
                : 'text-[#6f6d68] hover:bg-[#01696f]/5 hover:text-[#28251d]'
              }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 rounded-xl border border-[#d4d1ca] bg-[#fbfbf9]/50 shadow-sm text-sm">
        <div className="text-xs uppercase tracking-wider text-[#6f6d68] mb-2 font-medium">How to use</div>
        <p className="text-[#6f6d68]">
          Pick an election stage, review the explanation, and switch to the voter checklist for next steps.
        </p>
      </div>
    </aside>
  );
}
