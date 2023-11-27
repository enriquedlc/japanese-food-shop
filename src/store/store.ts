import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { JapaneseDrinks } from "../data/japanese-drinks-data";
import { JapaneseFoodData } from "../data/japanese-food-data";
import { JapaneseDrink, JapaneseFood } from "../types/general";

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
  addFavourite: (type: string, id: string) => void;
  removeFromFavourite: (type: string, id: string) => void;
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
      addFavourite: (type, id) => {
        set(
          produce((state) => {
            if (type === "food") {
              for (let i = 0; i < state.japaneseFoodList.length; i++) {
                if (state.japaneseFoodList[i].id === id) {
                  if (!state.japaneseFoodList[i].favourite) {
                    state.japaneseFoodList[i].favourite = true;
                    state.favouriteJapaneseFoodList.unshift(
                      state.japaneseFoodList[i],
                    );
                  }
                  break;
                }
              }
            } else if (type === "drink") {
              for (let i = 0; i < state.japaneseDrinkList.length; i++) {
                if (state.japaneseDrinkList[i].id === id) {
                  if (!state.japaneseDrinkList[i].favourite) {
                    state.japaneseDrinkList[i].favourite = true;
                    state.favouriteJapaneseFoodList.unshift(
                      state.japaneseDrinkList[i],
                    );
                  }
                  break;
                }
              }
            }
          }),
        );
      },
      removeFromFavourite: (type, id) => {
        set(
          produce((state) => {
            if (type === "food") {
              for (let i = 0; i < state.japaneseFoodList.length; i++) {
                if (state.japaneseFoodList[i].id === id) {
                  if (state.japaneseFoodList[i].favourite) {
                    state.japaneseFoodList[i].favourite = false;
                    const index = state.favouriteJapaneseFoodList.findIndex(
                      (item) => item.id === id,
                    );
                    state.favouriteJapaneseFoodList.splice(index, 1);
                  }
                  break;
                }
              }
            } else if (type === "drink") {
              for (let i = 0; i < state.japaneseDrinkList.length; i++) {
                if (state.japaneseDrinkList[i].id === id) {
                  if (state.japaneseDrinkList[i].favourite) {
                    state.japaneseDrinkList[i].favourite = false;
                    const index = state.favouriteJapaneseFoodList.findIndex(
                      (item) => item.id === id,
                    );
                    state.favouriteJapaneseFoodList.splice(index, 1);
                  }
                  break;
                }
              }
            }
          }),
        );
      },
    }),
    {
      name: "g",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
