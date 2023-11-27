import { ImageProps } from "react-native";

export interface Price {
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

interface JapaneseDrink {
  name: string;
  averageRating: number;
  id: string;
  index: number;
  prices: Price[];
  specialIngredient: string;
  type: string;
  image: ImageProps["source"];
}

type JapaneseMenu = JapaneseFood | JapaneseDrink;

type RootStackParamList = {
  tabNavigator: undefined;
  detailsScreen: undefined;
  paymentScreen: undefined;
};
