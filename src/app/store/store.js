import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useStore = create(set => ({
  teachers: [],
  setTeachers: data => set({ teachers: data }),
}));

const useUser = create(
  devtools(
    persist(
      (set, get) => ({
        name: '',
        email: '',
        id: '',
        token: '',
        favorites: [],
        orders: [],

        setUser: data =>
          set({
            name: data.name || get().name,
            email: data.email || get().email,
            id: data.id || get().id,
            token: data.token || get().token,
            favorites: data.favorites || get().favorites,
            orders: data.orders || get().orders,
          }),

        removeUser: () =>
          set({
            name: '',
            email: '',
            id: '',
            token: '',
            favorites: [],
            orders: [],
          }),

        setFavorites: data => set({ favorites: data }),
      }),
      { name: 'user-storage' }
    )
  )
);

export { useStore, useUser };
