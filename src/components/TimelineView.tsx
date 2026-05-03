import React from 'react';
import { electionStages } from '../data/electionData';
import { motion } from 'motion/react';
import { Landmark, FileSignature, Megaphone, Vote, CheckSquare } from 'lucide-react';

export function TimelineView() {
  const [activeStage, setActiveStage] = React.useState(0);
  const stageIcons = React.useMemo(() => [Landmark, FileSignature, Megaphone, Vote, CheckSquare], []);

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6">
      <div className="p-6 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Election Timeline</h3>
            <p className="text-sm text-[#6f6d68]">Click any phase to see what it means and what to watch for.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {electionStages.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(i)}
                className={`px-3 py-1 rounded-full border text-sm font-medium transition-colors ${
                  activeStage === i
                    ? 'bg-[#01696f] text-white border-[#01696f]'
                    : 'bg-[#fbfbf9] border-[#d4d1ca] text-[#6f6d68] hover:bg-[#01696f]/10'
                }`}
              >
                {stage.short}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {electionStages.map((stage, i) => {
            const Icon = stageIcons[i];
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(i)}
                className={`text-left relative p-5 border rounded-xl transition-all duration-200 flex flex-col items-start
                  ${activeStage === i 
                    ? 'bg-[#01696f]/10 border-[#01696f]/40 shadow-sm -translate-y-1' 
                    : 'bg-[#fbfbf9] border-[#d4d1ca] hover:-translate-y-1 hover:shadow-md'
                  }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm mb-3
                  ${activeStage === i ? 'bg-[#01696f] text-white' : 'bg-white border border-[#d4d1ca] text-[#01696f]'}
                `}>
                  <Icon size={20} />
                </div>
                <h4 className="font-bold mb-2 leading-tight">{stage.title}</h4>
                <p className="text-sm text-[#6f6d68] line-clamp-3">{stage.intro}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
         <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm"
         >
            <h3 className="text-xl font-bold mb-3">{electionStages[activeStage].title}</h3>
            <p className="text-[#6f6d68] mb-6">{electionStages[activeStage].explainer}</p>
            
            <div className="flex flex-col gap-4">
              {electionStages[activeStage].details.map((detail, idx) => (
                <div key={idx} className="p-4 bg-[#fbfbf9] border border-[#d4d1ca]/50 rounded-xl">
                  <h4 className="font-bold text-sm mb-1">{detail.title}</h4>
                  <p className="text-sm text-[#6f6d68]">{detail.text}</p>
                </div>
              ))}
            </div>
         </motion.div>

         <motion.div
            key={`actions-${activeStage}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm"
         >
            <h3 className="text-xl font-bold mb-6">What voters should do</h3>
            <div className="flex flex-col">
              {electionStages[activeStage].voterActions.map((action, idx) => (
                <div key={idx} className="flex gap-4 items-start py-4 border-b border-[#d4d1ca]/50 last:border-0">
                  <div className="w-5 h-5 mt-0.5 rounded-md bg-[#01696f]/10 text-[#01696f] flex items-center justify-center shrink-0 border border-[#01696f]/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong className="block text-[#28251d] font-medium leading-snug mb-1">{action}</strong>
                    <p className="text-sm text-[#6f6d68]">Helpful during the <em className="not-italic font-medium text-[#01696f]">{electionStages[activeStage].short.toLowerCase()}</em> phase.</p>
                  </div>
                </div>
              ))}
            </div>
         </motion.div>
      </div>
    </div>
  );
}
