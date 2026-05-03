import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Menu, X } from 'lucide-react';

// Lazy load components for code splitting & better efficiency
const Overview = React.lazy(() => import('./components/Overview').then(m => ({ default: m.Overview })));
const TimelineView = React.lazy(() => import('./components/TimelineView').then(m => ({ default: m.TimelineView })));
const VoterChecklist = React.lazy(() => import('./components/VoterChecklist').then(m => ({ default: m.VoterChecklist })));
const StateInfo = React.lazy(() => import('./components/StateInfo').then(m => ({ default: m.StateInfo })));
const AssistantChat = React.lazy(() => import('./components/AssistantChat').then(m => ({ default: m.AssistantChat })));

export default function App() {
  const [activeView, setActiveView] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <Overview setActiveView={setActiveView} />;
      case 'timeline':
        return <TimelineView />;
      case 'voter':
        return <VoterChecklist />;
      case 'state':
        return <StateInfo />;
      case 'assistant':
        return <AssistantChat />;
      default:
        return <Overview setActiveView={setActiveView} />;
    }
  };

  const pageTitle = React.useMemo(() => {
    const map: Record<string, string> = {
      overview: 'Overview',
      timeline: 'Election Timeline (India)',
      voter: 'Voter Checklist & Rules',
      state: 'State-Specific Rules',
      assistant: 'Ask Assistant'
    };
    return map[activeView] || 'Overview';
  }, [activeView]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f6f2] text-[#28251d]">
      <div className="hidden md:flex h-full">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </div>
      
      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/20" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-64 h-full bg-[#f9f8f5] flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
             <div className="p-4 flex justify-end">
               <button onClick={() => setMobileMenuOpen(false)} className="p-2"><X size={24} /></button>
             </div>
             <Sidebar activeView={activeView} setActiveView={(v) => { setActiveView(v); setMobileMenuOpen(false); }} />
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="flex-shrink-0 border-b border-[#d4d1ca] bg-[#f7f6f2]/80 backdrop-blur-md sticky top-0 z-20 px-6 py-4 flex items-center gap-4">
          <button className="md:hidden p-2 -ml-2 text-[#28251d]" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h2 className="text-xl md:text-2xl font-bold leading-tight">{pageTitle}</h2>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative custom-scrollbar">
          <React.Suspense fallback={
            <div className="flex h-full items-center justify-center font-medium text-[#6f6d68]">
              <div className="animate-pulse flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#01696f]"></div>
                Loading...
              </div>
            </div>
          }>
            {renderContent()}
          </React.Suspense>
        </div>
      </main>
    </div>
  );
}
