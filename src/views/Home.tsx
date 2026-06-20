import React from 'react';
import { useStore } from '../store';

export function Home() {
  const { setActiveView } = useStore();

  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 auto-rows-max">
      {/* Text Content */}
      <div className="flex-1 max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest text-primary text-sm font-semibold">
          <span className="material-symbols-outlined text-[18px]">eco</span>
          <span>ბიოლოგიის ახალი ერა</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-display font-bold text-on-surface leading-tight">
          მცენარის ზრდის <span className="text-primary">სიმულატორი</span>
        </h2>
        
        <p className="text-lg text-on-surface-variant leading-relaxed">
          ინტერაქტიული პლატფორმა ბიოლოგიის შესასწავლად. აღმოაჩინეთ მცენარეთა სიცოცხლის ციკლი, მართეთ გარემო პირობები და დააკვირდით ზრდის პროცესს რეალურ დროში, თანამედროვე ციფრულ გარემოში.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => setActiveView('simulation')}
            className="bg-primary text-on-primary hover:bg-surface-tint hover:-translate-y-0.5 transition-all duration-200 rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <span className="material-symbols-outlined">play_arrow</span>
            ექსპერიმენტის დაწყება
          </button>
          
          <button 
            onClick={() => setActiveView('learning')}
            className="bg-surface-container-lowest text-secondary border-2 border-secondary hover:bg-secondary-fixed transition-all duration-200 rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-2 active:scale-95"
          >
            გაიგე მეტი
          </button>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant mt-8">
          <div>
            <p className="text-3xl font-display font-bold text-primary">50+</p>
            <p className="text-xs font-semibold text-on-surface-variant mt-1 uppercase tracking-wider">სახეობა</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-primary">10k</p>
            <p className="text-xs font-semibold text-on-surface-variant mt-1 uppercase tracking-wider">სტუდენტი</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-primary">99%</p>
            <p className="text-xs font-semibold text-on-surface-variant mt-1 uppercase tracking-wider">სიზუსტე</p>
          </div>
        </div>
      </div>
      
      {/* Visual content placeholder to mimic the design */}
      <div className="flex-1 w-full relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-150">
         <div className="relative w-full aspect-square max-w-lg mx-auto bg-surface-container-lowest rounded-[2rem] border border-outline-variant soft-bloom overflow-hidden flex flex-col">
            <div className="h-12 bg-surface-container-low flex items-center px-4 border-b border-outline-variant justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error-container"></div>
                <div className="w-3 h-3 rounded-full bg-surface-variant"></div>
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim"></div>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Monstera Deliciosa</span>
            </div>
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-surface to-surface-container relative">
                {/* SVG Mock of a plant */}
                <svg width="200" height="300" viewBox="0 0 200 300" className="drop-shadow-2xl">
                   <path d="M100 280 Q 90 150 120 50" fill="none" stroke="#2d5a27" strokeWidth="8" strokeLinecap="round"/>
                   <path d="M100 200 Q 60 180 40 220 Q 80 250 100 200" fill="#10B981" />
                   <path d="M110 120 Q 160 100 180 140 Q 140 170 110 120" fill="#10B981" />
                   <path d="M95 280 L 105 280 L 130 300 L 70 300 Z" fill="#71314c" />
                </svg>

                {/* Floating UI Elements */}
                <div className="absolute top-8 left-8 bg-surface/80 backdrop-blur-md rounded-xl p-3 border border-outline-variant flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                     <span className="material-symbols-outlined text-secondary text-sm">water_drop</span>
                   </div>
                   <div>
                     <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">ტენიანობა</p>
                     <p className="text-sm font-semibold text-on-surface">65%</p>
                   </div>
                </div>

                <div className="absolute bottom-12 right-8 bg-surface/80 backdrop-blur-md rounded-xl p-3 border border-outline-variant flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary text-sm">light_mode</span>
                   </div>
                   <div>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">განათება</p>
                      <p className="text-sm font-semibold text-on-surface">800 Lux</p>
                   </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
