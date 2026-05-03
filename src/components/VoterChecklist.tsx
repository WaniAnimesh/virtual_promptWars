import React, { useState } from 'react';
import { initialChecklist } from '../data/electionData';
import { Check, Info } from 'lucide-react';

export function VoterChecklist() {
  const [items, setItems] = useState(initialChecklist);

  const toggleItem = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const progress = Math.round((items.filter(i => i.done).length / items.length) * 100);

  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 items-start">
      <div className="p-6 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Voter Checklist</h3>
          <p className="text-sm text-[#6f6d68]">Track the practical steps most voters need before heading to the booth.</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center text-sm font-bold mb-2">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#01696f] transition-all duration-500 ease-in-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="flex gap-4 items-start py-4 border-b border-[#d4d1ca]/50 last:border-0 hover:bg-[#fbfbf9] px-2 -mx-2 rounded-lg transition-colors text-left group"
            >
              <div className={`w-6 h-6 mt-0.5 rounded-md flex items-center justify-center shrink-0 border transition-colors
                ${item.done 
                  ? 'bg-green-100 border-green-300 text-green-700' 
                  : 'bg-[#fbfbf9] border-[#d4d1ca] text-transparent group-hover:border-[#01696f]/40'}
              `}>
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <strong className={`block font-medium leading-snug mb-1 transition-colors ${item.done ? 'text-gray-500 line-through decoration-1' : 'text-[#28251d]'}`}>
                  {item.text}
                </strong>
                <p className="text-sm text-[#6f6d68]">
                  {item.done ? 'Completed.' : 'Pending.'}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm">
        <h3 className="text-xl font-bold mb-4">Why this matters</h3>
        <div className="space-y-4">
          <div className="flex gap-3 items-start p-4 bg-[#fbfbf9] rounded-xl border border-[#d4d1ca]/50">
             <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
             <div>
                <h4 className="font-bold text-sm mb-1">Prevent Election Day Surprises</h4>
                <p className="text-sm text-[#6f6d68]">Verifying that your name is on the Electoral Roll early prevents being turned away. A Voter ID alone is not enough.</p>
             </div>
          </div>
          <div className="flex gap-3 items-start p-4 bg-[#fbfbf9] rounded-xl border border-[#d4d1ca]/50">
             <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
             <div>
                <h4 className="font-bold text-sm mb-1">Changing Locations</h4>
                <p className="text-sm text-[#6f6d68]">Polling booths can change. Always verify your specific room/part number using the Voter Helpline App within a week of voting.</p>
             </div>
          </div>
          <div className="flex gap-3 items-start p-4 bg-[#fbfbf9] rounded-xl border border-[#d4d1ca]/50">
             <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
             <div>
                <h4 className="font-bold text-sm mb-1">Make a Plan</h4>
                <p className="text-sm text-[#6f6d68]">Decide what time you are voting and how you are getting there. Voters with a plan are significantly more likely to cast their ballot.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
