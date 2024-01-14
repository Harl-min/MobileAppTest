/* eslint-disable prettier/prettier */
import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userData from '../data/userdata';

export const useStore = create(
  persist(
    (set, get) => ({
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
      userData: userData, // Add userData state
      setUserData: (newUserData: any) =>
        set(
          produce((state) => {
            state.userData = newUserData;
          })
        ),
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
