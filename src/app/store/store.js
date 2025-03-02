import { create } from 'zustand';
import { getTeachers } from '../../../firebase';

export const useTeachers = create(set => ({
  teachers: [],
  loading: false,
  getAllTeachers: async () => {
    const res = await getTeachers();
    set({ teachers: res });
  },
}));
