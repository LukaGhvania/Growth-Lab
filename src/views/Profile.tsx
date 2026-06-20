import React from 'react';
import { useStore } from '../store';
import { FlaskConical, Award, Droplet, Sun, Lock } from 'lucide-react';

export function Profile() {
  const { user, experiments } = useStore();

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Profile Info Header */}
      <div className="bg-surface-container-lowest rounded-3xl soft-bloom p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-outline-variant">
         <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-container shrink-0 bg-secondary-fixed flex items-center justify-center text-4xl font-display font-bold text-on-secondary-fixed">
            {user.name.charAt(0)}
         </div>
         <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-on-surface mb-2">{user.name}</h2>
            <p className="text-lg text-primary font-medium mb-6">ახალბედა ბოტანიკოსი • მე-8 კლასი</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-semibold text-on-surface-variant flex items-center gap-2">
                 <span className="material-symbols-outlined text-[18px]">psychology</span>
                 36 სთ სწავლა
               </span>
               <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-semibold text-on-surface-variant flex items-center gap-2">
                 <span className="material-symbols-outlined text-[18px] text-[#10B981]">local_fire_department</span>
                 12 დღიანი სერია
               </span>
            </div>
         </div>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-3xl soft-bloom p-8 flex flex-col items-center justify-center text-center border border-outline-variant">
               <div className="w-16 h-16 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-4">
                 <FlaskConical size={32} />
               </div>
               <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">ექსპერიმენტები</p>
               <p className="text-4xl font-display font-bold text-on-surface">{experiments.length}</p>
            </div>
            
            <div className="bg-surface-container-lowest rounded-3xl soft-bloom p-8 flex flex-col items-center justify-center text-center border border-outline-variant">
               <div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-4">
                 <Award size={32} />
               </div>
               <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">საშუალო ქულა</p>
               <p className="text-4xl font-display font-bold text-on-surface">92%</p>
            </div>
         </div>

         <div className="lg:col-span-2 bg-surface-container-lowest rounded-3xl soft-bloom p-8 border border-outline-variant">
            <div className="flex justify-between items-end mb-8">
               <h3 className="text-2xl font-display font-bold text-on-surface">ბეჯების კოლექცია</h3>
               <button className="text-primary font-bold hover:underline">ყველას ნახვა</button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {/* Badge 1 */}
               <div className="flex flex-col items-center text-center p-4 bg-surface rounded-2xl border-2 border-primary-container">
                  <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4">
                     <span className="material-symbols-outlined text-[32px]">emoji_nature</span>
                  </div>
                  <p className="text-sm font-semibold text-on-surface leading-tight">პირველი ყლორტი</p>
               </div>
               {/* Badge 2 */}
               <div className="flex flex-col items-center text-center p-4 bg-surface rounded-2xl border-2 border-primary-container">
                  <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                     <Sun size={32} />
                  </div>
                  <p className="text-sm font-semibold text-on-surface leading-tight">სინათლის ოსტატი</p>
               </div>
               {/* Badge 3 */}
               <div className="flex flex-col items-center text-center p-4 bg-surface rounded-2xl border-2 border-outline-variant opacity-50 grayscale">
                  <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-4">
                     <Droplet size={32} />
                  </div>
                  <p className="text-sm font-semibold text-on-surface leading-tight">წყლის დამზოგავი</p>
               </div>
               {/* Badge 4 */}
               <div className="flex flex-col items-center text-center p-4 bg-surface rounded-2xl border-2 border-outline-variant bg-surface-container-low opacity-50">
                  <div className="w-16 h-16 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center mb-4">
                     <Lock size={32} />
                  </div>
                  <p className="text-sm font-semibold text-on-surface-variant leading-tight">გენეტიკოსი</p>
               </div>
            </div>
         </div>
      </div>

      {/* History Timeline */}
      <div className="bg-surface-container-lowest rounded-3xl soft-bloom p-8 md:p-10 border border-outline-variant">
         <h3 className="text-2xl font-display font-bold text-on-surface mb-10">ზრდის ისტორია</h3>
         
         <div className="relative">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-outline-variant"></div>
            
            <div className="flex flex-col gap-10">
               {experiments.slice().reverse().map((exp, idx) => (
                 <div key={exp.id} className="relative pl-16">
                   <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest shadow-sm z-10"></div>
                   <p className="text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wider">{exp.date}</p>
                   <h4 className="text-lg font-bold text-on-surface mb-2">ექსპერიმენტი: {exp.durationDays} დღიანი ზრდა</h4>
                   <p className="text-on-surface-variant flex items-center gap-4">
                     <span>ჯანმრთელობა: <strong>{exp.finalHealth}%</strong></span>
                     <span>|</span>
                     <span>სიმაღლე: <strong>{exp.finalHeight}cm</strong></span>
                   </p>
                   <div className="mt-3 flex gap-2">
                     <span className="text-xs bg-surface-container-high px-2 py-1 rounded-md text-on-surface-variant border border-outline-variant">
                        სინათლე: {exp.lightCondition}
                     </span>
                     <span className="text-xs bg-surface-container-high px-2 py-1 rounded-md text-on-surface-variant border border-outline-variant">
                        წყალი: {exp.waterCondition}
                     </span>
                   </div>
                 </div>
               ))}
               
               {experiments.length === 0 && (
                 <div className="pl-16">
                   <p className="text-on-surface-variant">ჯერ არ გაქვთ შენახული ექსპერიმენტები. სცადეთ სიმულატორი!</p>
                 </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
