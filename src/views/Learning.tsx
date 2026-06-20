import React from 'react';
import { Play } from 'lucide-react';

export function Learning() {
  const modules = [
    {
      id: 1,
      title: 'ფოტოსინთეზი',
      description: 'გაიგეთ, როგორ გარდაქმნიან მცენარეები სინათლის ენერგიას თვის გამოსაკვებად.',
      progress: 45,
      icon: 'sunny'
    },
    {
      id: 2,
      title: 'სასიცოცხლო ციკლი',
      description: 'მიყევით მცენარის განვითარებას თესლიდან სრულყოფილ ორგანიზმად.',
      progress: 0,
      icon: 'psychiatry'
    },
    {
      id: 3,
      title: 'მცენარის ანატომია',
      description: 'შეისწავლეთ სტრუქტურული ნაწილები: ფესვები, ღეროები და ფოთლები.',
      progress: 0,
      icon: 'account_tree'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-display font-bold text-primary">სასწავლო ცენტრი</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          გამოიკვლიეთ ინტერაქტიული მოდულები და ლამაზი ილუსტრაციები მცენარეთა სიცოცხლის ფარული მექანიზმების გასაგებად.
        </p>
      </div>

      {/* Hero Module */}
      <section className="w-full rounded-3xl bg-surface-container-lowest border border-outline-variant soft-bloom overflow-hidden flex flex-col md:flex-row relative">
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold w-max mb-6">
            <span className="material-symbols-outlined text-[16px]">touch_app</span>
            ინტერაქტიული გზამკვლევი
          </div>
          <h3 className="text-4xl font-display font-bold text-on-surface mb-4">ფოთლების საიდუმლო ცხოვრება</h3>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
             ჩაიძირეთ ფოთლის მიკროსკოპულ სამყაროში. იმოქმედეთ სტომატებთან, ქლოროპლასტებთან და უყურეთ ენერგიის გარდაქმნის ჯადოსნურ პროცესს.
          </p>
          <button className="bg-primary-container text-on-primary rounded-xl px-6 py-3 font-semibold w-max hover:bg-primary transition-colors duration-200 shadow-sm flex items-center gap-2">
            დაწყება
            <Play size={16} />
          </button>
        </div>
        
        <div className="md:w-1/2 min-h-[300px] bg-gradient-to-br from-primary-fixed to-surface-container relative flex items-center justify-center p-8">
           <svg viewBox="0 0 200 200" className="w-full max-w-[250px] drop-shadow-2xl opacity-90">
              <path d="M100 10 Q190 50 190 150 Q100 190 10 150 Q10 50 100 10" fill="#2d5a27" />
              <path d="M100 15 Q180 50 180 145 Q100 180 20 145 Q20 50 100 15" fill="#a1d494" />
              <line x1="100" y1="15" x2="100" y2="180" stroke="#154212" strokeWidth="2" />
              <line x1="100" y1="50" x2="160" y2="40" stroke="#154212" strokeWidth="1" />
              <line x1="100" y1="90" x2="170" y2="90" stroke="#154212" strokeWidth="1" />
              <line x1="100" y1="130" x2="150" y2="150" stroke="#154212" strokeWidth="1" />
              <line x1="100" y1="60" x2="40" y2="50" stroke="#154212" strokeWidth="1" />
              <line x1="100" y1="100" x2="30" y2="110" stroke="#154212" strokeWidth="1" />
           </svg>
        </div>
      </section>

      {/* Modules Grid */}
      <div>
        <h3 className="text-2xl font-display font-bold text-on-surface mb-6">ძირითადი საგნები</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules.map(mod => (
            <div key={mod.id} className="bg-surface-container-lowest rounded-2xl border border-outline-variant soft-bloom overflow-hidden flex flex-col group hover:border-primary transition-colors duration-300 cursor-pointer">
               <div className="h-40 bg-surface-container-high relative flex items-center justify-center">
                 <span className="material-symbols-outlined text-[64px] text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {mod.icon}
                 </span>
               </div>
               <div className="p-6 flex flex-col flex-1">
                 <div className="flex items-center gap-2 text-primary mb-3">
                   <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>{mod.icon}</span>
                   <span className="text-[10px] font-bold uppercase tracking-wider">მოდული {mod.id}</span>
                 </div>
                 <h4 className="text-xl font-display font-bold text-on-surface mb-2">{mod.title}</h4>
                 <p className="text-sm text-on-surface-variant mb-6 flex-1">{mod.description}</p>
                 
                 <div className="w-full h-1.5 bg-surface-container rounded-full mb-4 overflow-hidden">
                    <div className="h-full bg-primary-container rounded-full" style={{ width: `${mod.progress}%` }}></div>
                 </div>
                 <button className={`w-full font-semibold rounded-xl py-2.5 transition-colors ${mod.progress > 0 ? 'border-2 border-secondary text-secondary hover:bg-secondary-fixed' : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'}`}>
                    {mod.progress > 0 ? 'გაგრძელება' : 'დაწყება'}
                 </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
