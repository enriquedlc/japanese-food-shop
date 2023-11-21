import { ImageProps } from "react-native";

import { DRINKS } from "../../assets";

const { BUBBLE_TEA, MATCHA, SAKE, UMESHU } = DRINKS;

type DrinkType = "Tea" | "Alcohol" | "Soft drink";

export interface JapaneseDrink {
  name: string;
  averageRating: number;
  id: string;
  index: number;
  price: string;
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
    price: "5.99",
    specialIngredient: "Matcha powder",
    type: "Tea",
    image: MATCHA,
  },
  {
    name: "Sake",
    averageRating: 4.2,
    id: "2",
    index: 1,
    price: "19.99",
    specialIngredient: "Sakamai",
    type: "Alcohol",
    image: SAKE,
  },
  {
    name: "Umeshu",
    averageRating: 4.0,
    id: "3",
    index: 2,
    price: "14.99",
    specialIngredient: "Ume plum",
    type: "Alcohol",
    image: UMESHU,
  },
  {
    name: "Bubble Tea",
    averageRating: 4.0,
    id: "4",
    index: 3,
    price: "6.99",
    specialIngredient: "Tapioca pearls",
    type: "Soft drink",
    image: BUBBLE_TEA,
  },
];
