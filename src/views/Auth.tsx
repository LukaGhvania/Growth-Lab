import React, { useState } from 'react';
import { useStore } from '../store';
import { Leaf, LogIn, UserPlus } from 'lucide-react';

export function Auth() {
  const { login } = useStore();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name || (isLogin ? 'სტუდენტი' : 'ახალი მომხმარებელი'), role);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-primary-fixed-dim/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square rounded-full bg-secondary-fixed-dim/20 blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-surface-container-lowest p-8 sm:p-10 rounded-3xl soft-bloom border border-outline-variant z-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4">
            <Leaf size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold text-on-surface">Growth Lab</h2>
          <p className="text-sm font-medium text-on-surface-variant mt-2">
            {isLogin ? 'მოგესალმებით დაბრუნებისას' : 'შექმენით ახალი ანგარიში'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-on-surface ml-1">სახელი</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ნიკოლოზ ბერიძე"
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface ml-1">ელ. ფოსტა</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@school.ge"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-on-surface ml-1">პაროლი</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>

          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-on-surface ml-1">როლი</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${role === 'student' ? 'border-primary bg-primary-container/20 text-primary' : 'border-outline-variant text-on-surface-variant hover:border-outline'}`}
                >
                  მოსწავლე
                </button>
                <button
                  type="button"
                  onClick={() => setRole('teacher')}
                  className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${role === 'teacher' ? 'border-primary bg-primary-container/20 text-primary' : 'border-outline-variant text-on-surface-variant hover:border-outline'}`}
                >
                  მასწავლებელი
                </button>
              </div>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-surface-tint text-on-primary py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 mt-4 shadow-md active:scale-95"
          >
            {isLogin ? <LogIn size={18} /> : <UserPlus size={18} />}
            {isLogin ? 'ავტორიზაცია' : 'რეგისტრაცია'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-on-surface-variant">
            {isLogin ? 'არ გაქვთ ანგარიში?' : 'უკვე გაქვთ ანგარიში?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary font-bold hover:underline"
            >
              {isLogin ? 'რეგისტრაცია' : 'ავტორიზაცია'}
            </button>
          </p>
        </div>
      </div>
      
      {/* Subtle branding or notes */}
      <p className="absolute bottom-6 text-on-surface-variant text-xs font-semibold">
        Growth Lab Educational Platform © 2026
      </p>
    </div>
  );
}
