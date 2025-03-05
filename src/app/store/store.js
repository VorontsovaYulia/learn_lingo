import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      set => ({
        teachers: [],
        setTeachers: data => set({ teachers: data }),
      }),
      {
        name: 'teachers-storage',
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'TeachersStore' }
  )
);

const useUser = create(
  devtools(
    persist(
      set => ({
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
      }),
      {
        name: 'user-storage',
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'UserStore' }
  )
);

export { useStore, useUser };
