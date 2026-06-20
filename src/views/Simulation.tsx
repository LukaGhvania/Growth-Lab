import React from 'react';
import { useStore } from '../store';
import { Droplet, Sun, Settings, FlaskConical, Save } from 'lucide-react';

export function Simulation() {
  const { plant, setWaterLevel, setLightLevel, nextDay, resetSimulation, saveExperiment } = useStore();

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
      
      {/* Left Stage: Plant Visualization & Vitals */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Canvas */}
        <div className="bg-surface-container-lowest rounded-2xl soft-bloom border border-outline-variant flex-1 min-h-[400px] lg:min-h-[500px] relative overflow-hidden flex flex-col items-center justify-end pb-8">
           <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-50 z-0 pointer-events-none"></div>
           
           {/* Simple SVG Plant representation based on stage */}
           <div className="z-10 relative transition-transform duration-1000 origin-bottom" style={{ transform: `scale(${0.5 + (plant.height / 100)})`}}>
              <svg width="200" height="300" viewBox="0 0 200 300" className={`drop-shadow-lg transition-colors duration-1000 ${plant.health < 30 ? 'hue-rotate-30 saturate-50' : ''}`}>
                 {/* Stem */}
                 {plant.stage !== 'Seed' && (
                    <path d="M100 280 L100 50" fill="none" stroke={plant.health > 40 ? "#2D5A27" : "#5a5a27"} strokeWidth="8" strokeLinecap="round" className="transition-all duration-1000"/>
                 )}
                 {/* Leaves */}
                 {plant.leaves > 0 && <path d="M100 200 Q 60 180 40 220 Q 80 250 100 200" fill={plant.health > 40 ? "#10B981" : "#b9b940"} className="transition-all duration-1000"/>}
                 {plant.leaves > 1 && <path d="M100 150 Q 140 130 160 170 Q 120 200 100 150" fill={plant.health > 40 ? "#10B981" : "#b9b940"} className="transition-all duration-1000"/>}
                 {plant.leaves > 2 && <path d="M100 100 Q 60 80 40 120 Q 80 150 100 100" fill={plant.health > 40 ? "#10B981" : "#b9b940"} className="transition-all duration-1000"/>}
                 
                 {/* Flower */}
                 {plant.stage === 'Flowering' && <circle cx="100" cy="50" r="15" fill="#ffb0cc" className="animate-pulse" />}

                 {/* Pot/Dirt */}
                 {plant.stage === 'Seed' && <circle cx="100" cy="285" r="5" fill="#8B4513" />}
                 <path d="M60 280 L140 280 L130 300 L70 300 Z" fill="#71314c" />
                 <rect x="55" y="275" width="90" height="5" rx="2" fill="#a1d494" />
              </svg>
           </div>

           {/* Env Overlays */}
           <div className="absolute top-4 left-4 z-20 flex gap-2">
             <div className="bg-surface/90 backdrop-blur px-3 py-1.5 rounded-full border border-outline-variant flex items-center gap-1.5 shadow-sm">
               <Droplet size={14} className="text-secondary" />
               <span className="text-xs font-semibold text-on-surface">{plant.waterLevel > 75 ? 'ჭარბი' : plant.waterLevel < 35 ? 'მშრალი' : 'ოპტიმალური'}</span>
             </div>
             <div className="bg-surface/90 backdrop-blur px-3 py-1.5 rounded-full border border-outline-variant flex items-center gap-1.5 shadow-sm">
               <Sun size={14} className="text-amber-500" />
               <span className="text-xs font-semibold text-on-surface">{plant.lightLevel > 75 ? 'ჭარბი' : plant.lightLevel < 35 ? 'მცირე' : 'ოპტიმალური'}</span>
             </div>
           </div>

           {/* Day Counter */}
           <div className="absolute top-4 right-4 z-20 bg-surface/90 backdrop-blur px-4 py-2 rounded-full border border-outline-variant shadow-sm text-sm font-bold text-primary">
              დღე {plant.day}
           </div>
        </div>

        {/* Vitals Bar */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 soft-bloom border border-outline-variant flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="flex gap-8 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">ჯანმრთელობა</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    <span className={`text-2xl font-display font-bold ${plant.health < 40 ? 'text-error' : 'text-on-surface'}`}>{plant.health}%</span>
                  </div>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">სიმაღლე</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">straighten</span>
                    <span className="text-2xl font-display font-bold text-on-surface">{plant.height}cm</span>
                  </div>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">ფოთლები</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span>
                    <span className="text-2xl font-display font-bold text-on-surface">{plant.leaves}</span>
                  </div>
               </div>
            </div>

            <div className="w-full sm:w-64">
               <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span className="text-on-surface">ეტაპი: {
                    {
                      'Seed': 'თესლი', 'Germination': 'გაღივება', 'Seedling': 'ნერგი', 
                      'Young': 'ახალგაზრდა', 'Adult': 'ზრდასრული', 'Flowering': 'ყვავილობა', 
                      'Wilting': 'ჭკნობა', 'Dead': 'მკვდარი'
                    }[plant.stage]
                  }</span>
               </div>
               <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${plant.health < 40 ? 'bg-error' : 'bg-gradient-to-r from-primary-container to-[#10B981]'}`}
                    style={{ width: `${plant.photosynthesisEfficiency}%`}}
                  ></div>
               </div>
               <p className="text-[10px] text-on-surface-variant mt-1 text-right">ფოტოსინთეზის ეფექტურობა</p>
            </div>
        </div>
      </div>

      {/* Right Control Panel */}
      <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
        <div className="bg-surface-container-lowest rounded-2xl soft-bloom border border-outline-variant overflow-hidden">
           <div className="h-24 bg-surface-container-low flex items-center justify-center border-b border-outline-variant">
              <FlaskConical size={32} className="text-primary opacity-30" />
           </div>
           <div className="p-6">
              <h3 className="text-xl font-display font-bold text-on-surface mb-2">ლაბორატორიის მართვა</h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">დაარეგულირეთ გარემო პირობები და დააკვირდით მცენარის მეტაბოლურ ცვლილებებს.</p>
              
              <div className="space-y-6">
                 {/* Water Control */}
                 <div className="space-y-3">
                   <div className="flex justify-between items-center">
                     <label className="text-sm font-semibold text-on-surface flex items-center gap-2">
                       <Droplet size={16} className="text-secondary" />
                       წყალი 
                     </label>
                     <span className="text-xs bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded font-semibold">{plant.waterLevel}%</span>
                   </div>
                   <input 
                     type="range" min="0" max="100" 
                     value={plant.waterLevel}
                     onChange={(e) => setWaterLevel(parseInt(e.target.value))}
                     className="w-full"
                   />
                   <div className="flex justify-between text-xs text-on-surface-variant">
                     <span>მშრალი</span>
                     <span>ჭაობი</span>
                   </div>
                 </div>
                 
                 <hr className="border-outline-variant" />

                 {/* Light Control */}
                 <div className="space-y-3">
                   <div className="flex justify-between items-center">
                     <label className="text-sm font-semibold text-on-surface flex items-center gap-2">
                       <Sun size={16} className="text-amber-500" />
                       განათება
                     </label>
                     <span className="text-xs bg-surface-container-high text-on-surface px-2 py-0.5 rounded font-semibold">{plant.lightLevel}%</span>
                   </div>
                   <input 
                     type="range" min="0" max="100" 
                     value={plant.lightLevel}
                     onChange={(e) => setLightLevel(parseInt(e.target.value))}
                     className="w-full"
                   />
                   <div className="flex justify-between text-xs text-on-surface-variant">
                     <span>ბნელი</span>
                     <span>მწველი</span>
                   </div>
                 </div>

              </div>
           </div>
           <div className="p-4 bg-surface-bright border-t border-outline-variant flex gap-2">
              <button 
                onClick={nextDay}
                disabled={plant.stage === 'Dead'}
                className="flex-1 bg-primary text-on-primary font-semibold py-3 rounded-xl hover:-translate-y-0.5 transition-transform shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                შემდეგი დღე
              </button>
              <button 
                onClick={resetSimulation}
                className="w-12 h-12 bg-surface-container-high text-on-surface rounded-xl flex items-center justify-center hover:bg-surface-variant transition-colors shrink-0"
                title="თავიდან დაწყება"
              >
                <Settings size={20} />
              </button>
           </div>
        </div>

        {/* Advanced Actions */}
        <button 
          onClick={saveExperiment}
          className="bg-surface-container-lowest rounded-xl soft-bloom border border-outline-variant p-5 flex items-center justify-between hover:border-primary transition-colors group cursor-pointer"
        >
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Save size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-on-surface">ექსპერიმენტის შენახვა</h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5">+50 ქულა</p>
              </div>
           </div>
           <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
        </button>

      </div>
    </div>
  );
}
