import React from 'react';
import { faqData } from '../data/electionData';
import { motion } from 'motion/react';
import { generateAssistantResponse } from '../services/geminiService';
import { Bot, Send, Loader2, User } from 'lucide-react';

export function AssistantChat() {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([
    { role: 'assistant', content: 'Hello. Ask me about registration, voting day, EVMs, timelines, or state-specific information in India (like Maharashtra or UP).' }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const endOfMessagesRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userPrompt = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userPrompt }]);
    setIsLoading(true);

    const response = await generateAssistantResponse(userPrompt);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-160px)] flex flex-col bg-[#f9f8f5] border border-[#d4d1ca] rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-[#d4d1ca] bg-white flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-[#01696f]/10 text-[#01696f] flex items-center justify-center">
               <Bot size={24} />
             </div>
             <div>
               <h3 className="text-lg font-bold">Election Assistant</h3>
               <p className="text-xs text-[#6f6d68]">Powered by Gemini</p>
             </div>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#f7f6f2]">
           {messages.map((msg, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
             >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-white border-[#d4d1ca] text-[#01696f]'
                    : 'bg-[#01696f] border-[#0c4e54] text-white'
                }`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`max-w-[80%] sm:max-w-[70%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-[#01696f] text-white rounded-tr-none' 
                    : 'bg-white border border-[#d4d1ca] text-[#28251d] rounded-tl-none shadow-sm'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{msg.content}</p>
                </div>
             </motion.div>
           ))}
           {isLoading && (
             <div className="flex justify-start gap-3 flex-row">
               <div className="w-10 h-10 rounded-full border bg-[#01696f] border-[#0c4e54] text-white shadow-sm flex items-center justify-center shrink-0">
                  <Bot size={20} />
               </div>
               <div className="bg-white border border-[#d4d1ca] p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-[#6f6d68]">
                 <Loader2 className="animate-spin" size={16} /> Thinking...
               </div>
             </div>
           )}
           <div ref={endOfMessagesRef} />
        </div>

        <form onSubmit={handleSend} className="p-4 bg-white border-t border-[#d4d1ca] flex gap-3 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g., Can I vote online in India?"
              className="flex-1 bg-[#f7f6f2] border border-[#d4d1ca] rounded-full px-5 py-3 outline-none focus:border-[#01696f] focus:ring-1 focus:ring-[#01696f] transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#01696f] hover:bg-[#0c4e54] text-white p-3 rounded-full disabled:opacity-50 transition-colors flex shrink-0"
            >
               <Send size={20} className={input.trim() && !isLoading ? 'translate-x-0.5 -translate-y-0.5' : ''} />
            </button>
        </form>
    </div>
  );
}
