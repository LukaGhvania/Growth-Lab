import { create } from 'zustand';
import { PlantState, UserState, ExperimentRecord, GrowthStage } from '../types';

export const STAGES: GrowthStage[] = [
  'Seed', 'Germination', 'Seedling', 'Young', 'Adult', 'Flowering', 'Wilting', 'Dead'
];

interface RootState {
  // Plant State
  plant: PlantState;
  setWaterLevel: (level: number) => void;
  setLightLevel: (level: number) => void;
  nextDay: () => void;
  resetSimulation: () => void;
  
  // User State
  user: UserState;
  addPoints: (amount: number) => void;
  awardBadge: (badgeId: string) => void;

  // App State
  activeView: 'home' | 'simulation' | 'learning' | 'quizzes' | 'profile' | 'teacher';
  setActiveView: (view: 'home' | 'simulation' | 'learning' | 'quizzes' | 'profile' | 'teacher') => void;

  isAuthenticated: boolean;
  login: (name: string, role: 'student' | 'teacher') => void;
  logout: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;

  // History
  experiments: ExperimentRecord[];
  saveExperiment: () => void;
}

const initialPlantState: PlantState = {
  id: '1',
  name: 'Phaseolus vulgaris',
  type: 'Bean',
  stage: 'Seed',
  health: 100,
  height: 0,
  leaves: 0,
  waterLevel: 50,
  lightLevel: 50,
  day: 1,
  photosynthesisEfficiency: 50,
};

export const useStore = create<RootState>((set, get) => ({
  plant: { ...initialPlantState },

  setWaterLevel: (level) => set((state) => ({ plant: { ...state.plant, waterLevel: level } })),
  setLightLevel: (level) => set((state) => ({ plant: { ...state.plant, lightLevel: level } })),

  nextDay: () => set((state) => {
    let p = { ...state.plant };
    
    if (p.stage === 'Dead') return state;

    p.day += 1;

    // Logic for growth
    const optimalWater = 60;
    const optimalLight = 70;
    
    const waterDiff = Math.abs(p.waterLevel - optimalWater);
    const lightDiff = Math.abs(p.lightLevel - optimalLight);

    // Photosynthesis drops if conditions are bad
    let pe = 100 - (waterDiff * 0.8) - (lightDiff * 0.8);
    p.photosynthesisEfficiency = Math.max(0, Math.min(100, pe));

    // Health change
    if (p.photosynthesisEfficiency < 30) {
       p.health -= 15;
    } else if (p.photosynthesisEfficiency < 50) {
       p.health -= 5;
    } else if (p.photosynthesisEfficiency > 70) {
       p.health = Math.min(100, p.health + 10);
    }

    if (p.health <= 0) {
      p.health = 0;
      p.stage = 'Dead';
      return { plant: p };
    }

    if (p.health < 30 && p.stage !== 'Seed' && p.stage !== 'Germination') {
       p.stage = 'Wilting';
    } else if (p.health >= 50 && p.stage === 'Wilting') {
       // recover to previous stage based on height? let's simplify for now
       p.stage = 'Adult'; 
    }

    // Growth progression
    if (p.health > 40 && p.stage !== 'Wilting' && p.stage !== 'Dead') {
       p.height += (p.photosynthesisEfficiency / 100) * 2; // up to 2cm per day
       
       if (p.day > 3 && p.stage === 'Seed') p.stage = 'Germination';
       if (p.day > 7 && p.stage === 'Germination') p.stage = 'Seedling';
       if (p.day > 12 && p.stage === 'Seedling') { p.stage = 'Young'; p.leaves += 2; }
       if (p.day > 20 && p.stage === 'Young') { p.stage = 'Adult'; p.leaves += 4; }
       if (p.day > 30 && p.stage === 'Adult' && p.health > 80) p.stage = 'Flowering';

       if (p.stage === 'Seedling' || p.stage === 'Young' || p.stage === 'Adult' || p.stage === 'Flowering') {
           if (p.day % 3 === 0) p.leaves += 1;
       }
    }

    p.height = parseFloat(p.height.toFixed(1));

    return { plant: p };
  }),

  resetSimulation: () => set({ plant: { ...initialPlantState } }),

  user: {
    name: 'ნიკოლოზ ბერიძე',
    role: 'student',
    points: 1250,
    badges: ['პირველი ყლორტი', 'სინათლის ოსტატი'],
  },
  
  addPoints: (amount) => set((state) => ({ user: { ...state.user, points: state.user.points + amount } })),
  awardBadge: (badge) => set((state) => ({ user: { ...state.user, badges: [...state.user.badges, badge] } })),

  activeView: 'home',
  setActiveView: (view) => set({ activeView: view }),

  isAuthenticated: false,
  login: (name, role) => set((state) => ({ 
    isAuthenticated: true, 
    user: { ...state.user, name, role },
    activeView: 'home'
  })),
  logout: () => set({ isAuthenticated: false, activeView: 'home' }),
  theme: 'light',
  setTheme: (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ theme });
  },

  experiments: [],
  saveExperiment: () => set((state) => {
    const p = state.plant;
    const newExp: ExperimentRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('ka-GE'),
      durationDays: p.day,
      finalHealth: p.health,
      finalHeight: p.height,
      waterCondition: p.waterLevel > 75 ? 'Wet' : p.waterLevel < 35 ? 'Dry' : 'Optimal',
      lightCondition: p.lightLevel > 75 ? 'Intense' : p.lightLevel < 35 ? 'Dim' : 'Optimal',
    };
    // Let's also award points for saving an experiment!
    const newPoints = state.user.points + 50;

    return { 
      experiments: [...state.experiments, newExp],
      user: { ...state.user, points: newPoints }
    };
  })
}));
