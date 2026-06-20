import React from 'react';
import { Download, Users, TrendingUp, CheckSquare, AlertTriangle, ArrowRight } from 'lucide-react';

export function Teacher() {

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-on-surface mb-2">მასწავლებლის პანელი</h2>
          <p className="text-on-surface-variant font-medium">კლასის 8B მიმოხილვა • შემოდგომის სემესტრი</p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl flex items-center gap-2 hover:-translate-y-0.5 transition-all shadow-md font-semibold text-sm w-full sm:w-auto justify-center">
          <Download size={18} />
          <span>რეპორტის გადმოწერა</span>
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest rounded-2xl p-6 soft-bloom border border-outline-variant">
           <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-primary-container text-on-primary-container rounded-xl">
               <Users size={20} />
             </div>
             <span className="text-[10px] font-bold text-surface-tint bg-primary-fixed-dim/20 px-2.5 py-1 rounded-full">+2 ამ კვირაში</span>
           </div>
           <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">სულ მოსწავლე</p>
           <h3 className="text-3xl font-display font-bold text-on-surface">24</h3>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 soft-bloom border border-outline-variant">
           <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-secondary-fixed text-on-secondary-fixed rounded-xl">
               <TrendingUp size={20} />
             </div>
           </div>
           <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">საშუალო პროგრესი</p>
           <h3 className="text-3xl font-display font-bold text-on-surface">78%</h3>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 soft-bloom border border-outline-variant">
           <div className="flex justify-between items-start mb-4">
             <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl">
               <CheckSquare size={20} />
             </div>
           </div>
           <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">ჩაბარებული ქვიზები</p>
           <h3 className="text-3xl font-display font-bold text-on-surface">142</h3>
        </div>

        <div className="bg-error-container/20 rounded-2xl p-6 soft-bloom border border-error-container relative overflow-hidden">
           <div className="absolute -right-4 -top-4 w-24 h-24 bg-error-container rounded-full opacity-50 blur-xl"></div>
           <div className="flex justify-between items-start mb-4 relative z-10">
             <div className="p-3 bg-error text-on-error rounded-xl shadow-sm">
               <AlertTriangle size={20} />
             </div>
           </div>
           <p className="text-xs font-bold text-error uppercase tracking-wider mb-1 relative z-10">ყურადღება ესაჭიროება</p>
           <h3 className="text-3xl font-display font-bold text-error relative z-10">3 <span className="text-sm font-medium text-error-container/80">მოსწავლეს</span></h3>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Simple Chart visualization */}
         <div className="lg:col-span-2 bg-surface-container-lowest rounded-3xl soft-bloom p-8 border border-outline-variant flex flex-col">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-xl font-display font-bold text-on-surface">საერთო პროგრესი</h3>
               <select className="bg-surface-container-low border-none rounded-xl text-sm font-semibold text-on-surface py-2 pl-4 pr-8 outline-none focus:ring-2 focus:ring-primary">
                 <option>ბოლო 30 დღე</option>
                 <option>ამ კვირაში</option>
               </select>
            </div>
            
            <div className="flex-1 relative min-h-[250px] w-full flex items-end justify-between pt-8 border-b-2 border-surface-container-highest pb-2 px-8">
               <div className="flex flex-col items-center group w-full">
                  <div className="w-12 sm:w-16 h-[40%] bg-surface-container-highest rounded-t-xl relative transition-all duration-300 group-hover:bg-primary-container/20">
                     <div className="absolute bottom-0 w-full bg-primary-fixed-dim h-full opacity-80 rounded-t-xl"></div>
                  </div>
                  <span className="text-xs font-bold mt-3 text-on-surface-variant">კვ 1</span>
               </div>
               <div className="flex flex-col items-center group w-full">
                  <div className="w-12 sm:w-16 h-[60%] bg-surface-container-highest rounded-t-xl relative transition-all duration-300 group-hover:bg-primary-container/20">
                     <div className="absolute bottom-0 w-full bg-primary h-full opacity-90 rounded-t-xl"></div>
                  </div>
                  <span className="text-xs font-bold mt-3 text-on-surface-variant">კვ 2</span>
               </div>
               <div className="flex flex-col items-center group w-full">
                  <div className="w-12 sm:w-16 h-[55%] bg-surface-container-highest rounded-t-xl relative transition-all duration-300 group-hover:bg-primary-container/20">
                     <div className="absolute bottom-0 w-full bg-primary-fixed-dim h-full opacity-80 rounded-t-xl"></div>
                  </div>
                  <span className="text-xs font-bold mt-3 text-on-surface-variant">კვ 3</span>
               </div>
               <div className="flex flex-col items-center group w-full">
                  <div className="w-12 sm:w-16 h-[85%] bg-surface-container-highest rounded-t-xl relative transition-all duration-300 group-hover:bg-primary-container/20">
                     <div className="absolute bottom-0 w-full bg-primary-container h-full opacity-90 rounded-t-xl shadow-lg"></div>
                  </div>
                  <span className="text-xs font-bold mt-3 text-primary">კვ 4</span>
               </div>
            </div>
         </div>

         {/* Hardest Topics */}
         <div className="lg:col-span-1 bg-surface-container-lowest rounded-3xl soft-bloom p-8 border border-outline-variant flex flex-col">
            <h3 className="text-xl font-display font-bold text-on-surface mb-8">რთული თემები</h3>
            
            <div className="space-y-6 flex-1">
               <div>
                  <div className="flex justify-between items-end mb-2">
                     <span className="text-sm font-semibold text-on-surface">ფოტოსინთეზის ციკლი</span>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-error">65% შეცდომა</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                     <div className="bg-error h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between items-end mb-2">
                     <span className="text-sm font-semibold text-on-surface">ნიადაგის PH ბალანსი</span>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-tertiary">42% შეცდომა</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                     <div className="bg-tertiary h-2 rounded-full" style={{width: '42%'}}></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between items-end mb-2">
                     <span className="text-sm font-semibold text-on-surface">წყლის მიწოდება</span>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-outline">20% შეცდომა</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                     <div className="bg-outline-variant h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
               </div>
            </div>
            
            <button className="w-full mt-8 py-3 border-2 border-secondary text-secondary rounded-xl font-semibold hover:bg-secondary-fixed/50 transition-colors">
               სრული ანალიტიკა
            </button>
         </div>
      </div>

      {/* Student List Table */}
      <div className="bg-surface-container-lowest rounded-3xl soft-bloom p-8 border border-outline-variant overflow-x-auto">
         <div className="flex justify-between items-center mb-8 min-w-[600px]">
            <h3 className="text-xl font-display font-bold text-on-surface">მოსწავლეების სტატისტიკა</h3>
         </div>
         <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
               <tr className="border-b-2 border-surface-container-highest text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  <th className="pb-4 pl-4">მოსწავლე</th>
                  <th className="pb-4">პროგრესი</th>
                  <th className="pb-4">სიმულაციის დონე</th>
                  <th className="pb-4 text-right pr-4">სტატუსი</th>
               </tr>
            </thead>
            <tbody className="text-sm text-on-surface">
               <tr className="border-b border-surface-container hover:bg-surface-container-low transition-colors">
                  <td className="py-4 pl-4 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold">ა.მ</div>
                     <span className="font-semibold text-base">ანა მ.</span>
                  </td>
                  <td className="py-4">
                     <div className="flex items-center gap-3">
                        <span className="font-bold">95%</span>
                        <div className="w-32 bg-surface-container rounded-full h-2">
                           <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                        </div>
                     </div>
                  </td>
                  <td className="py-4 text-on-surface-variant font-medium">ყვავილობა</td>
                  <td className="py-4 text-right pr-4">
                     <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider bg-primary-fixed/30 px-3 py-1 rounded-full">
                        <Award size={14} /> ლიდერი
                     </span>
                  </td>
               </tr>
               <tr className="border-b border-surface-container hover:bg-surface-container-low transition-colors bg-error-container/10">
                  <td className="py-4 pl-4 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold">ლ.ტ</div>
                     <span className="font-semibold text-base">ლუკა ტ.</span>
                  </td>
                  <td className="py-4">
                     <div className="flex items-center gap-3">
                        <span className="font-bold text-error">35%</span>
                        <div className="w-32 bg-error-container rounded-full h-2">
                           <div className="bg-error h-2 rounded-full w-[35%]"></div>
                        </div>
                     </div>
                  </td>
                  <td className="py-4 text-on-surface-variant font-medium">თესლი</td>
                  <td className="py-4 text-right pr-4">
                     <button className="inline-flex items-center gap-1.5 text-error text-xs font-bold uppercase tracking-wider hover:underline">
                        მიწერა <ArrowRight size={14} />
                     </button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>

    </div>
  );
}
