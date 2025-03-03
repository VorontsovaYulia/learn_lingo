import { create } from 'zustand';

const useStore = create(set => ({
  teachers: [],
  setTeachers: data => set({ teachers: data }),
}));

export default useStore;
