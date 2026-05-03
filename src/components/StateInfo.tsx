import React, { useState } from 'react';
import { stateData } from '../data/electionData';
import { Map, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function StateInfo() {
  const [selectedStateCode, setSelectedStateCode] = useState(stateData[0].code);

  const selectedState = stateData.find(s => s.code === selectedStateCode) || stateData[0];

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <div className="p-6 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm">
         <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">State-Specific Information</h3>
              <p className="text-sm text-[#6f6d68]">Election rules vary widely by state. Select a state to view its guidelines.</p>
            </div>
            
            <div className="relative">
              <select
                aria-label="Select State"
                value={selectedStateCode}
                onChange={(e) => setSelectedStateCode(e.target.value)}
                className="appearance-none bg-white border border-[#d4d1ca] rounded-xl pl-4 pr-10 py-3 font-medium outline-none focus:ring-2 focus:ring-[#01696f]"
              >
                {stateData.map(s => (
                  <option key={s.code} value={s.code}>{s.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
         </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={selectedState.code}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
           className="p-8 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm relative overflow-hidden"
        >
           <Map size={180} className="absolute -bottom-10 -right-10 text-[#01696f]/5" />
           
           <h2 className="text-3xl font-bold mb-8 relative z-10">{selectedState.name} Rules</h2>
           
           <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              <div className="flex flex-col bg-white p-5 rounded-xl border border-[#d4d1ca]/50 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6f6d68] mb-2">Registration</span>
                <p className="font-medium">{selectedState.registrationDeadline}</p>
              </div>
              
              <div className="flex flex-col bg-white p-5 rounded-xl border border-[#d4d1ca]/50 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6f6d68] mb-2">Early Voting</span>
                <p className="font-medium">{selectedState.earlyVoting}</p>
              </div>

              <div className="flex flex-col bg-white p-5 rounded-xl border border-[#d4d1ca]/50 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6f6d68] mb-2">ID Requirements</span>
                <p className="font-medium">{selectedState.idRequirements}</p>
              </div>

              <div className="flex flex-col bg-white p-5 rounded-xl border border-[#d4d1ca]/50 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6f6d68] mb-2">Absentee Voting</span>
                <p className="font-medium">{selectedState.absenteeVoting}</p>
              </div>
           </div>

           <div className="mt-8 pt-6 border-t border-[#d4d1ca] relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#6f6d68]">Please verify all information with the official state election office.</p>
              <a 
                href={selectedState.officialResource} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#01696f] hover:bg-[#0c4e54] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
              >
                Official State Resource <ExternalLink size={16} />
              </a>
           </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
