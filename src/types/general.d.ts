import { ImageProps } from "react-native";

interface Price {
  size: string;
  price: string;
  currency: string;
}

export interface JapaneseFood {
  id: string;
  name: string;
  category: string;
  image: ImageProps["source"];
  description: string;
  ingredients: string;
  allergens: string;
  prices: Price[];
  type: string;
  index: number;
  averageRating: number;
  specialIngredient: string;
}
