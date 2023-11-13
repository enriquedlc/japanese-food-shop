import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useJapaneseFoodStore = create(
  persist((set, get) => ({}), {
    name: "japanese-food",
    storage: createJSONStorage(() => AsyncStorage),
  }),
);
