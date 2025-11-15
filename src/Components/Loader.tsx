import React, { useState, useEffect } from 'react';

export default function Loader() {
  // const [progress, setProgress] = useState(0);
  // const [isComplete, setIsComplete] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress(prev => {
  //       if (prev >= 100) {
  //         clearInterval(interval);
  //         setTimeout(() => setIsComplete(true), 500);
  //         return 100;
  //       }
  //       return prev + 2;
  //     });
  //   }, 30);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    // <div className="relative flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
    //   {/* Animated background grid */}
    //   <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
      
    //   {/* Glowing orbs */}
    //   <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
    //   <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

    //   {/* Main content */}
    //   <div className="relative z-10 flex flex-col items-center gap-12">
    //     {/* Logo/Icon with animation */}
    //     <div className="relative">
    //       <div className="absolute inset-0 bg-gradient-to-r #171d22 #171d22 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
    //       <div className="relative">
    //         <svg 
    //           className="w-24 h-24 #171d22 animate-[spin_3s_ease-in-out_infinite]" 
    //           viewBox="0 0 24 24" 
    //           fill="none" 
    //           stroke="currentColor" 
    //           strokeWidth="1.5"
    //         >
    //           <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
    //           <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
    //           <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
    //         </svg>
    //       </div>
    //     </div>

    //     {/* Welcome text with fade-in animation */}
    //     <div className={`text-center space-y-3 transition-all duration-1000 ${isComplete ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
    //       <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r bg-slate-800 bg-slate-800 bg-slate-800 bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto]">
    //         Bahja Moncef
    //       </h1>
    //       <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wider">
    //         Portfolio
    //       </p>
    //     </div>

    //     {/* Progress bar */}
    //     <div className="w-64 md:w-96 space-y-3">
    //       <div className="relative h-1 bg-slate-800 rounded-full overflow-hidden">
    //         <div 
    //           className="absolute inset-y-0 left-0 bg-gradient-to-r bg-slate-800 bg-slate-800 rounded-full transition-all duration-300 ease-out"
    //           style={{ width: `${progress}%` }}
    //         >
    //           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
    //         </div>
    //       </div>
          
    //       {/* Progress percentage */}
    //       <div className="flex justify-between items-center text-sm">
    //         <span className="bg-slate-800 font-mono">Loading...</span>
    //         <span className="bg-slate-800 font-mono font-semibold">{progress}%</span>
    //       </div>
    //     </div>

    //     {/* Loading dots */}
    //     <div className="flex gap-2">
    //       <div className="w-2 h-2 bg-slate-800 rounded-full animate-bounce"></div>
    //       <div className="w-2 h-2 bg-slate-800 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
    //       <div className="w-2 h-2 bg-slate-800 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    //     </div>
    //   </div>

    //   <style>{`
    //     @keyframes gradient {
    //       0%, 100% {
    //         background-position: 0% 50%;
    //       }
    //       50% {
    //         background-position: 100% 50%;
    //       }
    //     }
        
    //     @keyframes shimmer {
    //       0% {
    //         transform: translateX(-100%);
    //       }
    //       100% {
    //         transform: translateX(100%);
    //       }
    //     }
    //   `}</style>
    // </div>

    <div>

    </div>
  );
}