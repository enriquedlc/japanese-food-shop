import { DRINKS } from "../../assets";
import { SERVING_TEMPERATURE } from "../../assets";
import { JapaneseDrink } from "../types/general";

const { BUBBLE_TEA, MATCHA, SAKE, UMESHU } = DRINKS;

export const JapaneseDrinks: JapaneseDrink[] = [
  {
    name: "Matcha Tea",
    averageRating: 4.5,
    id: "1",
    index: 0,
    specialIngredient: "Matcha powder",
    type: "drink",
    image: MATCHA,
    prices: [
      { size: "Small", price: "3.99", currency: "$" },
      { size: "Medium", price: "5.99", currency: "$" },
      { size: "Large", price: "7.99", currency: "$" },
    ],
    favourite: false,
    ratingCount: 235,
    category: "Tea",
    servingTemperature: "Chilled",
    servingTemperatureIcon: SERVING_TEMPERATURE.CHILLED,
  },
  {
    name: "Sake",
    averageRating: 4.2,
    id: "2",
    index: 1,
    specialIngredient: "Sakamai",
    type: "drink",
    image: SAKE,
    prices: [
      { size: "Bottle", price: "19.99", currency: "$" },
      { size: "Glass", price: "8.99", currency: "$" },
    ],
    favourite: false,
    ratingCount: 792,
    category: "Alcohol",
    servingTemperature: "Chilled",
    servingTemperatureIcon: SERVING_TEMPERATURE.CHILLED,
  },
  {
    name: "Umeshu",
    averageRating: 4.0,
    id: "3",
    index: 2,
    specialIngredient: "Ume plum",
    type: "drink",
    image: UMESHU,
    prices: [
      { size: "Bottle", price: "14.99", currency: "$" },
      { size: "Glass", price: "6.99", currency: "$" },
    ],
    favourite: false,
    ratingCount: 512,
    category: "Alcohol",
    servingTemperature: "Cold",
    servingTemperatureIcon: SERVING_TEMPERATURE.COLD,
  },
  {
    name: "Bubble Tea",
    averageRating: 4.0,
    id: "4",
    index: 3,
    specialIngredient: "Tapioca pearls",
    type: "drink",
    image: BUBBLE_TEA,
    prices: [
      { size: "Small", price: "4.99", currency: "$" },
      { size: "Medium", price: "6.99", currency: "$" },
      { size: "Large", price: "8.99", currency: "$" },
    ],
    favourite: false,
    ratingCount: 662,
    category: "Tea",
    servingTemperature: "Cold",
    servingTemperatureIcon: SERVING_TEMPERATURE.COLD,
  },
];
