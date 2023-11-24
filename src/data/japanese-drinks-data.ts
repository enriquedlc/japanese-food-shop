import { ImageProps } from "react-native";

import { DRINKS } from "../../assets";
import { Price } from "../types/general";

const { BUBBLE_TEA, MATCHA, SAKE, UMESHU } = DRINKS;

type DrinkType = "Tea" | "Alcohol" | "Soft drink";

export interface JapaneseDrink {
  name: string;
  averageRating: number;
  id: string;
  index: number;
  prices: Price[];
  specialIngredient: string;
  type: DrinkType;
  image: ImageProps["source"];
}

export const JapaneseDrinks: JapaneseDrink[] = [
  {
    name: "Matcha Tea",
    averageRating: 4.5,
    id: "1",
    index: 0,
    specialIngredient: "Matcha powder",
    type: "Tea",
    image: MATCHA,
    prices: [
      { size: "Small", price: "3.99", currency: "$" },
      { size: "Medium", price: "5.99", currency: "$" },
      { size: "Large", price: "7.99", currency: "$" },
    ],
  },
  {
    name: "Sake",
    averageRating: 4.2,
    id: "2",
    index: 1,
    specialIngredient: "Sakamai",
    type: "Alcohol",
    image: SAKE,
    prices: [
      { size: "Bottle", price: "19.99", currency: "$" },
      { size: "Glass", price: "8.99", currency: "$" },
    ],
  },
  {
    name: "Umeshu",
    averageRating: 4.0,
    id: "3",
    index: 2,
    specialIngredient: "Ume plum",
    type: "Alcohol",
    image: UMESHU,
    prices: [
      { size: "Bottle", price: "14.99", currency: "$" },
      { size: "Glass", price: "6.99", currency: "$" },
    ],
  },
  {
    name: "Bubble Tea",
    averageRating: 4.0,
    id: "4",
    index: 3,
    specialIngredient: "Tapioca pearls",
    type: "Soft drink",
    image: BUBBLE_TEA,
    prices: [
      { size: "Small", price: "4.99", currency: "$" },
      { size: "Medium", price: "6.99", currency: "$" },
      { size: "Large", price: "8.99", currency: "$" },
    ],
  },
];
