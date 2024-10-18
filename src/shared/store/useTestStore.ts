import { create } from 'zustand';

interface TestStore {
  tests: any[];
  setTests: (tests: any[]) => void;
}

export const useTestStore = create<TestStore>((set) => ({
  tests: [],
  setTests: (tests) => set({ tests }),
}));
