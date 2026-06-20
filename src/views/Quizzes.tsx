import React, { useState } from 'react';
import { useStore } from '../store';
import { HelpCircle, ArrowRight, Award } from 'lucide-react';

export function Quizzes() {
  const { addPoints } = useStore();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock single question for now
  const question = {
    title: 'ფოტოსინთეზის საფუძვლები',
    module: 'მოდული 2-ის შეფასება',
    text: 'მცენარის უჯრედის რომელი ორგანელაა ძირითადად პასუხისმგებელი სინათლის ენერგიის ქიმიურ ენერგიად გარდაქმნაზე?',
    options: [
      { id: 1, text: 'მიტოქონდრია', isCorrect: false },
      { id: 2, text: 'ქლოროპლასტი', isCorrect: true },
      { id: 3, text: 'ბირთვი', isCorrect: false },
      { id: 4, text: 'ენდოპლაზმური ბადე', isCorrect: false },
    ]
  };

  const handleSubmit = () => {
    if (selectedOption !== null && !isSubmitted) {
      setIsSubmitted(true);
      const isCorrect = question.options.find(o => o.id === selectedOption)?.isCorrect;
      if (isCorrect) {
        addPoints(100);
      }
    } else if (isSubmitted) {
       // next question logic here
       setIsSubmitted(false);
       setSelectedOption(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 w-full animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl soft-bloom flex flex-col sm:flex-row sm:items-end justify-between gap-6 border border-outline-variant">
         <div>
            <h2 className="text-3xl font-display font-bold text-primary mb-2">{question.title}</h2>
            <p className="text-on-surface-variant font-medium">{question.module}</p>
         </div>
         <div className="text-left sm:text-right">
            <span className="text-3xl font-display font-bold text-secondary block">1,250 <span className="text-sm text-on-surface-variant font-normal">ქულა</span></span>
            <span className="text-xs text-outline flex items-center sm:justify-end gap-1 mt-1">
               <Award size={14} /> მიმდინარე ქულა
            </span>
         </div>
      </div>

      {/* Progress */}
      <div className="w-full px-2">
         <div className="flex justify-between mb-2 text-xs font-semibold text-on-surface-variant">
           <span>კითხვა 3 / 10</span>
           <span>30% დასრულებული</span>
         </div>
         <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden flex gap-1">
            <div className="h-full bg-primary rounded-full w-[10%]"></div>
            <div className="h-full bg-primary rounded-full w-[10%]"></div>
            <div className="h-full bg-[#10B981] rounded-full w-[10%] animate-pulse"></div>
            <div className="h-full bg-surface-container-high rounded-full w-[10%]"></div>
            <div className="h-full bg-surface-container-high rounded-full w-[10%]"></div>
            <div className="h-full bg-surface-container-high rounded-full w-[10%]"></div>
            <div className="h-full bg-surface-container-high rounded-full w-[10%]"></div>
            <div className="h-full bg-surface-container-high rounded-full w-[10%]"></div>
            <div className="h-full bg-surface-container-high rounded-full w-[10%]"></div>
            <div className="h-full bg-surface-container-high rounded-full w-[10%]"></div>
         </div>
      </div>

      {/* Question Card */}
      <div className="bg-surface-container-lowest rounded-[2rem] deep-shadow overflow-hidden flex flex-col md:flex-row border border-surface-container">
         
         <div className="md:w-5/12 bg-surface-container-low p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-surface-container rounded-tl-[2rem] md:rounded-bl-[2rem]">
            <div className="w-full aspect-square rounded-2xl overflow-hidden relative soft-bloom mb-6 bg-primary-container flex items-center justify-center p-8">
                {/* SVG representing a leaf cross-section loosely */}
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-90 drop-shadow-md">
                   <rect x="10" y="30" width="80" height="40" rx="10" fill="#a1d494" />
                   <circle cx="30" cy="50" r="8" fill="#154212" />
                   <circle cx="50" cy="50" r="8" fill="#154212" />
                   <circle cx="70" cy="50" r="8" fill="#154212" />
                </svg>
            </div>
            <p className="text-xs font-semibold text-on-surface-variant text-center px-4 leading-relaxed">სურათი 3.1: ფოთლის განივი ჭრილი მიკროსკოპის ქვეშ.</p>
         </div>

         <div className="md:w-7/12 p-8 sm:p-10 flex flex-col bg-surface-container-lowest">
            <h3 className="text-2xl font-display font-semibold text-on-surface mb-8 leading-relaxed">
               {question.text}
            </h3>
            
            <div className="space-y-4 flex-1">
               {question.options.map((opt, index) => {
                 const letter = String.fromCharCode(65 + index);
                 const isSelected = selectedOption === opt.id;
                 let stateClass = "border-outline-variant bg-surface-bright hover:border-primary-container";
                 let ringClass = "border-outline-variant text-on-surface-variant group-hover:border-primary-container";
                 
                 if (isSelected) {
                   stateClass = "border-primary bg-surface-container-low";
                   ringClass = "bg-primary border-primary text-on-primary";
                 }

                 if (isSubmitted) {
                    if (opt.isCorrect) {
                      stateClass = "border-[#10B981] bg-[#10B981]/10";
                      ringClass = "bg-[#10B981] border-[#10B981] text-white";
                    } else if (isSelected && !opt.isCorrect) {
                      stateClass = "border-error bg-error-container/30";
                      ringClass = "bg-error border-error text-white";
                    }
                 }

                 return (
                   <button
                     key={opt.id}
                     onClick={() => !isSubmitted && setSelectedOption(opt.id)}
                     disabled={isSubmitted}
                     className={`w-full p-4 rounded-2xl border-2 flex items-center gap-5 transition-all duration-200 text-left group ${stateClass}`}
                   >
                     <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${ringClass}`}>
                        {letter}
                     </div>
                     <span className={`text-base font-medium flex-1 ${isSubmitted && opt.isCorrect ? 'text-[#10B981]' : 'text-on-surface'}`}>{opt.text}</span>
                     
                     {isSubmitted && opt.isCorrect && (
                       <span className="material-symbols-outlined text-[#10B981]">check_circle</span>
                     )}
                     {isSubmitted && isSelected && !opt.isCorrect && (
                       <span className="material-symbols-outlined text-error">cancel</span>
                     )}
                   </button>
                 )
               })}
            </div>

            <div className="mt-10 pt-6 border-t border-surface-container flex flex-col sm:flex-row justify-between items-center gap-4">
               <button className="text-on-surface-variant hover:text-primary text-sm font-semibold px-4 py-2 rounded-xl hover:bg-surface-container-low transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto justify-center">
                 <HelpCircle size={18} /> მინიშნება (-50 ქულა)
               </button>
               
               <button 
                 onClick={handleSubmit}
                 disabled={selectedOption === null}
                 className="bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
               >
                 {isSubmitted ? 'შემდეგი კითხვა' : 'პასუხის დადასტურება'} 
                 <ArrowRight size={18} />
               </button>
            </div>
         </div>

      </div>
    </div>
  );
}
