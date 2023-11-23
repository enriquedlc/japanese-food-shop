import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { JapaneseDrink, JapaneseDrinks } from "../data/japanese-drinks-data";
import { JapaneseFoodData } from "../data/japanese-food-data";
import { JapaneseFood } from "../types/general";

interface State {
  cartPrice: number;
  japaneseFoodList: JapaneseFood[];
  japaneseDrinkList: JapaneseDrink[];
  favouriteJapaneseFoodList: JapaneseFood[];
  cartList: JapaneseFood[];
  orderHistoryList: JapaneseFood[];
}

export const useJapaneseFoodStore = create<State>()(
  persist(
    (set, get) => ({
      cartPrice: 0,
      japaneseFoodList: JapaneseFoodData,
      japaneseDrinkList: JapaneseDrinks,
      favouriteJapaneseFoodList: [],
      cartList: [],
      orderHistoryList: [],
    }),
    {
      name: "E",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
