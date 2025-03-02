import { create } from 'zustand';
import { getTeachers } from '../../../firebase';

export const useTeachers = create(set => ({
  teachers: [],
  loading: false,
  getTeachers: async () => {
    set({ loading: true });
    const teachers = await getTeachers();
    set({ teachers, loading: false });
  },
}));
