
import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Zap, 
  BrainCircuit, 
  TrendingUp, 
  Quote,
  AlertCircle,
  Cpu,
  Sparkles,
  ShieldCheck,
  MousePointer2,
  Lock,
  Globe,
  Coins
} from 'lucide-react';

const AFFILIATE_LINK = "https://warriorplus.com/o2/a/t4q2gmg/0";

const ScrollReveal: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={elementRef} className="scroll-reveal w-full">{children}</div>;
};

const Hero: React.FC = () => (
  <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 px-6 overflow-visible">
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-3d text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-blue-500/20 shadow-lg shadow-blue-500/10">
          <Sparkles size={14} className="animate-pulse" />
          <span>Next-Gen AI Protocol</span>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={150}>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter">
          Master the <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent glow-text">AI Economy</span>
        </h1>
      </ScrollReveal>
      
      <ScrollReveal delay={300}>
        <p className="text-base md:text-2xl text-slate-400 mb-10 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed px-4">
          The era of basic prompting is over. Discover the <span className="text-white font-semibold">proprietary frameworks</span> that elite earners use to turn ChatGPT into a high-yield revenue engine.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={450}>
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={() => window.open(AFFILIATE_LINK, '_blank')}
            className="group relative w-full sm:w-auto px-10 md:px-14 py-6 md:py-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl md:rounded-3xl font-black text-lg md:text-2xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3 md:gap-4 transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 border-t border-white/20"
          >
            <Zap size={24} className="fill-white" />
            GET FREE BLUEPRINT
            <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-slate-500 font-bold text-[10px] md:text-xs tracking-widest uppercase opacity-70">
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-blue-500" /> SECURE ACCESS</div>
            <div className="flex items-center gap-2"><Globe size={16} className="text-indigo-500" /> GLOBAL ACCESS</div>
            <div className="flex items-center gap-2"><Coins size={16} className="text-purple-500" /> $0 INITIAL COST</div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
  </section>
);

const BentoGrid: React.FC = () => (
  <section className="py-20 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter">Precision Engineering</h2>
          <p className="text-slate-400 text-base md:text-xl font-medium max-w-2xl mx-auto px-4">While others play with tools, we build income infrastructures.</p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-6 md:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Problem Card */}
          <ScrollReveal delay={100}>
            <div className="glass-3d p-8 md:p-10 rounded-[32px] h-full relative group overflow-hidden border-t border-red-500/20">
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Lock size={80} className="text-red-500" />
              </div>
              <AlertCircle className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">The Content Trap</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                If you don't know how to produce "Expert-Tier" outputs, your AI efforts are dead on arrival. We fix this instantly.
              </p>
            </div>
          </ScrollReveal>

          {/* Square Card 1 */}
          <ScrollReveal delay={200}>
            <div className="glass-3d p-8 md:p-10 rounded-[32px] h-full flex flex-col items-center text-center justify-center group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 italic">Zero Lag</h3>
              <p className="text-slate-500 font-semibold text-sm">Instant implementation for immediate market feedback.</p>
            </div>
          </ScrollReveal>

          {/* Square Card 2 */}
          <ScrollReveal delay={300}>
            <div className="glass-3d p-8 md:p-10 rounded-[32px] h-full flex flex-col items-center text-center justify-center group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 italic">Scale Up</h3>
              <p className="text-slate-500 font-semibold text-sm">Designed to scale from $1 to $10k+ with logic.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Improved Wide Banner Card */}
        <ScrollReveal delay={400}>
          <div className="glass-3d p-8 md:p-16 rounded-[32px] md:rounded-[48px] border-t border-blue-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex-1 w-full text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight break-normal">
                The Accelerator Blueprint
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {["Prompt Optimization", "Service Automation", "Client Sourcing", "Profit Retention"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 justify-center lg:justify-start">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} className="text-blue-500" />
                    </div>
                    <span className="text-white font-bold text-sm md:text-lg whitespace-nowrap">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-center gap-4 flex-shrink-0">
              <button 
                onClick={() => window.open(AFFILIATE_LINK, '_blank')}
                className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-white text-slate-950 rounded-2xl font-black text-lg md:text-xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 border-b-4 border-slate-200"
              >
                ACCESS PROTOCOL
                <ArrowRight size={24} />
              </button>
              <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] animate-pulse">Join the 2025 Cohort</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Testimonial: React.FC = () => (
  <section className="py-20 md:py-40 px-6">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="glass-3d p-8 md:p-20 rounded-[40px] md:rounded-[64px] text-center relative overflow-hidden border-indigo-500/20">
          <Quote size={100} className="absolute -top-6 -left-6 text-white/5 pointer-events-none hidden md:block" />
          <div className="relative z-10">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(i => (
                <Sparkles key={i} size={20} className="text-blue-500 fill-blue-500" />
              ))}
            </div>
            <p className="text-xl md:text-4xl text-white font-bold leading-snug mb-10 md:mb-12 italic tracking-tight">
              "This system bridged the gap for me. I went from zero to my first $1,000 month with AI-assisted services in weeks. Truly game-changing."
            </p>
            <div className="flex flex-col items-center gap-4">
              <img 
                src="https://i.pravatar.cc/150?img=33" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-500/50 shadow-xl" 
                alt="Sarah"
              />
              <div>
                <h4 className="text-white font-black text-lg md:text-xl uppercase tracking-tighter">Sarah J.</h4>
                <p className="text-blue-500 font-black text-[10px] md:text-xs uppercase tracking-widest">Elite Member • 2025 AI Cohort</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="py-20 md:py-40 px-6">
    <ScrollReveal>
      <div className="max-w-4xl mx-auto text-center glass-3d p-10 md:p-24 rounded-[40px] md:rounded-[64px] border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-transparent">
        <h2 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-10 tracking-tighter leading-[1.1]">Your Future Is Ready.</h2>
        <p className="text-slate-400 text-base md:text-2xl mb-10 md:mb-16 max-w-lg mx-auto font-medium">
          The window for AI dominance is wide open, but it won't be forever. Secure your free blueprint now.
        </p>
        <button 
          onClick={() => window.open(AFFILIATE_LINK, '_blank')}
          className="group relative w-full sm:w-auto px-10 md:px-16 py-6 md:py-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl md:rounded-[32px] font-black text-xl md:text-3xl shadow-[0_20px_60px_-10px_rgba(37,99,235,0.7)] flex items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95 mx-auto"
        >
          CLAIM FREE ACCESS
          <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform" />
        </button>
      </div>
    </ScrollReveal>
  </section>
);

const Footer: React.FC = () => (
  <footer className="pt-20 pb-12 px-6 border-t border-white/5 bg-slate-950/50 backdrop-blur-md overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-xl">
            <BrainCircuit size={24} className="text-white" />
          </div>
          <span className="font-black text-2xl text-white tracking-tighter">AI<span className="text-blue-500">WEALTH</span></span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <span className="block mb-4 font-black text-slate-400 text-[10px] uppercase tracking-[0.3em]">Transparency Policy</span>
          <p className="text-[10px] md:text-xs text-slate-600 font-semibold leading-relaxed uppercase tracking-wider">
            Affiliate Disclosure: We may earn a commission if you purchase through our link at no extra cost to you. 
            Digital business requires effort and skill. Results are not guaranteed and depend on your own implementation of these frameworks.
          </p>
        </div>
        <p className="mt-12 text-slate-900 font-black text-4xl sm:text-6xl md:text-[100px] leading-none select-none pointer-events-none tracking-tighter opacity-10 text-center uppercase">
          AIWEALTH MASTERY
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white">
      <main className="relative">
        <Hero />
        <BentoGrid />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
