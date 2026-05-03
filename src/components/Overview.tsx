import React, { useState } from 'react';
import { faqData } from '../data/electionData';
import { ArrowRight, Activity, CalendarCheck, HelpCircle, Users, X } from 'lucide-react';

interface OverviewProps {
  setActiveView: (view: string) => void;
}

export function Overview({ setActiveView }: OverviewProps) {
  const [selectedPersona, setSelectedPersona] = useState<number | null>(null);

  const personas = [
    {
      title: "First-Time Voter",
      desc: "Coming of age? Learn how to register and download your digital e-EPIC.",
      seed: "Bella",
      bg: "bg-blue-100",
      steps: [
        "Go to the official ECI Voters' Services Portal (voters.eci.gov.in) or download the Voter Helpline App.",
        "Sign up and fill out Form 6 for new voter registration.",
        "Upload proof of age and proof of address.",
        "Track your application status using the generated reference ID.",
        "Once approved, you can download your e-EPIC (digital Voter ID) from the portal."
      ]
    },
    {
      title: "Senior Citizen (85+)",
      desc: "Checking eligibility for the Home Voting (Postal Ballot) facility via Form 12D.",
      seed: "Oliver",
      bg: "bg-orange-100",
      steps: [
        "Ensure your name is correctly listed in the Electoral Roll.",
        "Within 5 days of the election notification, fill out Form 12D to opt for the postal ballot facility.",
        "The form is often distributed by Booth Level Officers (BLOs) to eligible voters, but can also be downloaded from the ECI website.",
        "Submit the completed form to the Returning Officer (RO).",
        "A polling team will visit your registered address on a pre-notified date to collect your vote securely."
      ]
    },
    {
      title: "Relocated Voter",
      desc: "Moved to a new city? Learn how to shift your constituency online with Form 8.",
      seed: "Aneka",
      bg: "bg-green-100",
      steps: [
        "Go to the ECI Voters' Services Portal or use the Voter Helpline App.",
        "Login with your credentials.",
        "Select Form 8 (used for shifting of residence).",
        "Choose 'Shifting of Residence' and indicate whether it is within the same assembly constituency or outside.",
        "Provide your new address details and upload a valid proof of the new address.",
        "Submit and track your application with the reference ID."
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 ">
      <div className="p-8 md:p-10 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 relative overflow-hidden">
        
        {/* Abstract background element */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#01696f]/5 rounded-full blur-3xl rounded-full" />
        
        <div className="flex-1 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#01696f]/10 text-[#01696f] text-xs font-bold uppercase tracking-wider mb-5">
            Election Process Assistant
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.1] mb-5 text-[#28251d]">
            Understand every stage before voting day.
          </h2>
          <p className="text-lg text-[#6f6d68] mb-8 max-w-prose">
            This dashboard breaks the election process into simple phases, highlights what voters usually need to do, and explains what happens behind the scenes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveView('timeline')}
              className="bg-[#01696f] hover:bg-[#0c4e54] text-white px-6 py-3 rounded-full text-base font-medium transition-colors flex items-center gap-2"
            >
              Explore timeline <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setActiveView('assistant')}
              className="bg-white border border-[#d4d1ca] hover:bg-gray-50 text-[#28251d] px-6 py-3 rounded-full text-base font-medium transition-colors"
            >
              Ask Assistant
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-[#d4d1ca] rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <CalendarCheck size={20} />
          </div>
          <h4 className="font-bold mb-2">Before the election</h4>
          <p className="text-sm text-[#6f6d68]">Ensure your name is on the Electoral Roll, download your e-EPIC, and confirm your polling booth.</p>
        </div>
        
        <div className="p-6 bg-white border border-[#d4d1ca] rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
            <Activity size={20} />
          </div>
          <h4 className="font-bold mb-2">On voting day</h4>
          <p className="text-sm text-[#6f6d68]">Bring your Voter ID, press the button on the EVM against your choice, and check the VVPAT slip.</p>
        </div>
        
        <div className="p-6 bg-white border border-[#d4d1ca] rounded-2xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
            <HelpCircle size={20} />
          </div>
          <h4 className="font-bold mb-2">After polling</h4>
          <p className="text-sm text-[#6f6d68]">EVMs are securely stored in strong rooms. Results are declared by the ECI after formal counting.</p>
        </div>
      </div>

      {/* Voter Personas Section with Avatars */}
      <div className="p-8 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-2 bg-[#01696f]/10 text-[#01696f] rounded-lg">
            <Users size={24} />
          </div>
          <h3 className="text-xl font-bold">Voter Profiles & Scenarios</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {personas.map((persona, idx) => (
            <div key={idx} className="p-6 bg-white border border-[#d4d1ca] rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
               <img 
                 src={`https://api.dicebear.com/7.x/notionists/svg?seed=${persona.seed}&backgroundColor=transparent`}
                 alt={persona.title}
                 className={`w-24 h-24 rounded-full mb-4 ${persona.bg} p-2 border border-[#d4d1ca] shadow-inner`}
               />
               <h4 className="font-bold text-lg mb-2 text-[#28251d]">{persona.title}</h4>
               <p className="text-sm text-[#6f6d68] mb-4 flex-1">{persona.desc}</p>
               <button 
                  onClick={() => setSelectedPersona(idx)}
                  className="mt-auto text-[#01696f] text-sm font-bold flex items-center gap-1 hover:underline group"
                >
                  View steps <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          ))}
        </div>
      </div>
      
       <div className="p-6 bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm">
        <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {faqData.slice(0,4).map((faq, idx) => (
             <div key={idx} className="p-4 bg-white border border-[#d4d1ca]/50 rounded-xl">
               <h4 className="font-bold text-sm mb-2">{faq.q}</h4>
               <p className="text-sm text-[#6f6d68]">{faq.a}</p>
             </div>
          ))}
        </div>
      </div>

      {/* Persona Steps Modal */}
      {selectedPersona !== null && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f9f8f5] w-full max-w-lg rounded-3xl shadow-xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-[#d4d1ca]">
              <div className="flex items-center gap-4">
                <img 
                   src={`https://api.dicebear.com/7.x/notionists/svg?seed=${personas[selectedPersona].seed}&backgroundColor=transparent`}
                   alt={personas[selectedPersona].title}
                   className={`w-12 h-12 rounded-full ${personas[selectedPersona].bg} p-1 border border-[#d4d1ca]`}
                 />
                <h3 className="text-xl font-bold">{personas[selectedPersona].title} Guide</h3>
              </div>
              <button 
                onClick={() => setSelectedPersona(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-[#28251d]"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 relative">
              <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-[#d4d1ca] z-0"></div>
              <div className="space-y-6 relative z-10">
                {personas[selectedPersona].steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#01696f] text-white flex items-center justify-center shrink-0 shadow-sm border border-[#0c4e54] text-sm font-bold">
                      {idx + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-[15px] leading-relaxed text-[#28251d]">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-[#d4d1ca] bg-[#fbfbf9] rounded-b-3xl">
               <button 
                onClick={() => setSelectedPersona(null)}
                className="w-full bg-[#01696f] hover:bg-[#0c4e54] text-white py-3 rounded-xl font-medium transition-colors"
               >
                 Got it
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
