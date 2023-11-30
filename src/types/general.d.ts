import { ImageProps } from "react-native";

export interface Price {
  size: string;
  price: string;
  currency: string;
}

type JapaneseServingTemperature = "Hot" | "Cold" | "Chilled";

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
  favourite: boolean;
  ratingCount: number;
  servingTemperature: JapaneseServingTemperature;
  servingTemperatureIcon: ImageProps["source"];
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
  favourite: boolean;
  ratingCount: number;
  category: string;
  servingTemperature: JapaneseServingTemperature;
  servingTemperatureIcon: ImageProps["source"];
}

type JapaneseMenu = JapaneseFood | JapaneseDrink;

interface DetailScreenParams {
  index: number;
  id: string;
  type: string;
}

type RootStackParamList = {
  tabNavigator: undefined;
  detailsScreen: DetailScreenParams;
  paymentScreen: undefined;
};
