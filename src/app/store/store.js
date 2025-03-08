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
      (set, get) => ({
        name: '',
        email: '',
        id: '',
        token: '',
        favorites: [],
        orders: [],
        loading: true,

        setUser: data =>
          set({
            name: data.name || get().name,
            email: data.email || get().email,
            id: data.id || get().id,
            token: data.token || get().token,
            favorites: data.favorites || get().favorites,
            orders: data.orders || get().orders,
            loading: false,
          }),
        setFavorites: teacherId => {
          const { favorites } = get();
          const { teachers } = useStore.getState();

          const teacher = teachers.find(el => el.id === teacherId);
          if (!teacher) return;

          const isFavorite = favorites.some(fav => fav.id === teacherId);
          set({
            favorites: isFavorite
              ? favorites.filter(fav => fav.id !== teacherId)
              : [...favorites, teacher],
          });
        },

        removeUser: () =>
          set({
            name: '',
            email: '',
            id: '',
            token: '',
            favorites: [],
            orders: [],
            loading: false,
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
