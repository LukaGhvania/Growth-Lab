import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Chatbot } from './components/Chatbot';
import { Auth } from './views/Auth';
import { Home } from './views/Home';
import { Simulation } from './views/Simulation';
import { Learning } from './views/Learning';
import { Quizzes } from './views/Quizzes';
import { Profile } from './views/Profile';
import { Teacher } from './views/Teacher';
import { useStore } from './store';
import { Bell, Settings, Search, Menu, LogOut, Moon, Sun } from 'lucide-react';

export default function App() {
  const { activeView, user, isAuthenticated, logout, theme, setTheme } = useStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const notifRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isAuthenticated) return <Auth />;

  const renderView = () => {
    switch (activeView) {
      case 'home': return <Home />;
      case 'simulation': return <Simulation />;
      case 'learning': return <Learning />;
      case 'quizzes': return <Quizzes />;
      case 'profile': return <Profile />;
      case 'teacher': return <Teacher />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar hidden on mobile for simplicity in this demo */}
      <div className="hidden lg:block w-[280px] shrink-0">
         <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Navbar */}
        <header className="h-[72px] bg-surface/90 backdrop-blur border-b border-outline-variant flex justify-between items-center px-4 md:px-8 z-10 shrink-0">
           <div className="flex items-center gap-4">
             <button className="lg:hidden text-on-surface-variant p-2 hover:bg-surface-container rounded-full">
               <Menu size={24} />
             </button>
             <h2 className="text-xl font-display font-bold text-primary hidden sm:block">
               {activeView === 'home' ? 'Plant Growth Simulator' : 
                activeView === 'simulation' ? 'სიმულაცია' :
                activeView === 'learning' ? 'სასწავლო ცენტრი' :
                activeView === 'quizzes' ? 'ქვიზები' :
                activeView === 'profile' ? 'პროფილი' : 'მასწავლებლის პანელი'}
             </h2>
           </div>

           <div className="flex items-center gap-2 sm:gap-4">
             {activeView !== 'home' && (
               <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant mr-4">
                 <Search size={18} className="text-on-surface-variant mr-2" />
                 <input 
                   type="text" 
                   placeholder="ძიება..." 
                   className="bg-transparent border-none outline-none text-sm text-on-surface placeholder:text-outline w-32 focus:w-48 transition-all"
                 />
               </div>
             )}

             {activeView === 'quizzes' && (
                <div className="hidden sm:flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border border-outline-variant mr-2">
                  <span className="material-symbols-outlined text-[#10B981] text-[18px]">eco</span>
                  <span className="text-sm font-bold text-on-surface">{user.points} BP</span>
                </div>
             )}

             {/* Notifications */}
             <div className="relative" ref={notifRef}>
               <button 
                 onClick={() => setShowNotifications(!showNotifications)}
                 className={`w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-full transition-colors ${showNotifications ? 'bg-surface-container-high text-primary' : ''}`}
               >
                 <Bell size={20} />
                 <span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full outline outline-2 outline-surface/90"></span>
               </button>
               
               {showNotifications && (
                 <div className="absolute right-0 top-12 w-80 bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant z-50 overflow-hidden transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-4 border-b border-surface-container-high flex justify-between items-center bg-surface-container-low">
                      <h3 className="font-bold text-on-surface">შეტყობინებები</h3>
                      <button className="text-xs font-semibold text-primary hover:underline">წაკითხულად მონიშვნა</button>
                    </div>
                    <div className="flex flex-col max-h-80 overflow-y-auto">
                      <div className="p-4 border-b border-surface-container-highest hover:bg-surface-container-high transition-colors cursor-pointer flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                           <span className="material-symbols-outlined text-[20px]">psychiatry</span>
                         </div>
                         <div>
                            <p className="text-sm font-semibold text-on-surface">ახალი ეტაპი!</p>
                            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">თქვენი მცენარე გადავიდა 'ყვავილობის' ეტაპზე.</p>
                            <p className="text-[10px] text-outline font-bold mt-2">2 წთ წინ</p>
                         </div>
                      </div>
                      <div className="p-4 hover:bg-surface-container-high transition-colors cursor-pointer flex gap-4 opacity-70">
                         <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                           <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                         </div>
                         <div>
                            <p className="text-sm font-semibold text-on-surface">ახალი ბეჯი მიღებულია</p>
                            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">გილოცავთ! თქვენ მიიღეთ 'სინათლის ოსტატი' ბეჯი.</p>
                            <p className="text-[10px] text-outline font-bold mt-2">1 დღის წინ</p>
                         </div>
                      </div>
                    </div>
                 </div>
               )}
             </div>

             {/* Settings */}
             <div className="relative" ref={settingsRef}>
               <button 
                 onClick={() => setShowSettings(!showSettings)}
                 className={`w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-full transition-colors ${showSettings ? 'bg-surface-container-high text-primary' : ''}`}
               >
                 <Settings size={20} />
               </button>
               
               {showSettings && (
                 <div className="absolute right-0 top-12 w-64 bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant z-50 overflow-hidden transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-4 border-b border-surface-container-high bg-surface-container-low">
                      <p className="text-sm font-bold text-on-surface">{user.name}</p>
                      <p className="text-xs font-semibold text-on-surface-variant capitalize">{user.role === 'teacher' ? 'მასწავლებელი' : 'მოსწავლე'}</p>
                    </div>
                    <div className="p-2 flex flex-col gap-1">
                      <div className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-high transition-colors text-sm font-medium text-on-surface cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                         <div className="flex items-center gap-3 pointer-events-none">
                           {theme === 'dark' ? <Moon size={18} className="text-on-surface-variant" /> : <Sun size={18} className="text-amber-500" />}
                           თემა
                         </div>
                         <button 
                           className="w-10 h-5 bg-surface-container-highest rounded-full relative flex items-center shadow-inner pointer-events-none"
                         >
                           <div className={`w-4 h-4 bg-primary text-on-primary rounded-full shadow-sm absolute transition-all duration-300 ${theme === 'dark' ? 'right-0.5' : 'left-0.5'}`}></div>
                         </button>
                      </div>
                      
                      <button 
                        onClick={logout}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-error-container text-error transition-colors text-sm font-bold mt-1"
                      >
                         <LogOut size={18} />
                         გასვლა
                      </button>
                    </div>
                 </div>
               )}
             </div>

             <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold border-2 border-primary-container ml-2 overflow-hidden cursor-pointer">
                {/* Fallback to initials if no image */}
                {user.name.charAt(0)}
             </div>
           </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
           {renderView()}
        </main>
      </div>

      <Chatbot />
    </div>
  );
}
