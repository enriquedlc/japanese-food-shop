import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
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
  cartList: (JapaneseFood | JapaneseDrink)[];
  orderHistoryList: JapaneseFood[];
}

interface Actions {
  addToCart: (cartItem: JapaneseFood | JapaneseDrink) => void;
  calculateCartPrice: () => void;
}

export const useJapaneseFoodStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      cartPrice: 0,
      japaneseFoodList: JapaneseFoodData,
      japaneseDrinkList: JapaneseDrinks,
      favouriteJapaneseFoodList: [],
      cartList: [],
      orderHistoryList: [],
      addToCart: (cartItem) => {
        set(
          produce((state) => {
            const existingCartItemIndex = state.cartList.findIndex(
              (item) => item.id === cartItem.id,
            );

            if (existingCartItemIndex !== -1) {
              const existingCartItem = state.cartList[existingCartItemIndex];
              const sizeExists = existingCartItem.prices.some(
                (price) => price.size === cartItem.prices[0].size,
              );

              if (sizeExists) {
                const existingPriceIndex = existingCartItem.prices.findIndex(
                  (price) => price.size === cartItem.prices[0].size,
                );
                state.cartList[existingCartItemIndex].prices[existingPriceIndex]
                  .quantity++;
              } else {
                state.cartList[existingCartItemIndex].prices.push(
                  cartItem.prices[0],
                );
              }

              state.cartList[existingCartItemIndex].prices.sort((a, b) =>
                b.size.localeCompare(a.size),
              );
            } else {
              state.cartList.push(cartItem);
            }
          }),
        );
      },
      calculateCartPrice: () => {
        set(
          produce((state) => {
            let totalPrice = 0;
            for (const cartItem of state.cartList) {
              for (const price of cartItem.prices) {
                totalPrice += price.price * price.quantity;
              }
            }
            state.cartPrice = totalPrice;
          }),
        );
      },
    }),
    {
      name: "f",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
