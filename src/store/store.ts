import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { JapaneseAllergensData } from "../data/japanese-allergens-data";
import { JapaneseFoodData } from "../data/japanese-food-data";
import { JapaneseFood } from "../types/general";

interface State {
  cartPrice: number;
  japaneseFoodList: JapaneseFood[];
  japaneseAllergensList: typeof JapaneseAllergensData;
  favouriteJapaneseFoodList: JapaneseFood[];
  cartList: JapaneseFood[];
  orderHistoryList: JapaneseFood[];
}

export const useJapaneseFoodStore = create<State>()(
  persist(
    (set, get) => ({
      cartPrice: 0,
      japaneseFoodList: JapaneseFoodData,
      japaneseAllergensList: JapaneseAllergensData,
      favouriteJapaneseFoodList: [],
      cartList: [],
      orderHistoryList: [],
    }),
    {
      name: "japanese-food",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
