import React from 'react';
import { Home, FlaskConical, BookOpen, User, Users, GraduationCap, LayoutDashboard } from 'lucide-react';
import { useStore } from '../store';
import { cn } from '../lib/utils';

export function Sidebar() {
  const { activeView, setActiveView, user } = useStore();

  const navItems = [
    { id: 'home', icon: Home, label: 'მთავარი' },
    { id: 'simulation', icon: FlaskConical, label: 'სიმულაცია' },
    { id: 'learning', icon: BookOpen, label: 'სასწავლო ცენტრი' },
    { id: 'quizzes', icon: GraduationCap, label: 'ქვიზები' },
    { id: 'profile', icon: User, label: 'პროფილი' },
  ];

  if (user.role === 'teacher') {
    navItems.push({ id: 'teacher', icon: LayoutDashboard, label: 'მასწავლებლის პანელი' });
  }

  return (
    <aside className="w-[280px] h-screen fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col p-4 z-20">
      <div className="flex items-center gap-3 mb-8 px-2 mt-4">
        <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
          <FlaskConical size={20} />
        </div>
        <div>
          <h1 className="text-[14px] font-bold text-primary">Growth Lab</h1>
          <p className="text-[12px] text-on-surface-variant">Expert Mentor</p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 flex-grow">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as any)}
              className={cn(
                "flex items-center gap-3 rounded-full px-4 py-3 my-1 transition-all duration-200 text-left",
                isActive 
                  ? "bg-primary text-on-primary font-semibold" 
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              )}
            >
              <Icon size={20} />
              <span className="text-[14px] leading-tight">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  );
}
