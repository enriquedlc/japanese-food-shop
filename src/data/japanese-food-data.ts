import { FOOD } from "../../assets";
import { JapaneseFood } from "../types/general";

const { SUSHI_ROLL_COMBO, TERIYAKI_CHICKEN_BOWL, VEGETARIAN_RAMEN } = FOOD;

export const JapaneseFoodData: JapaneseFood[] = [
  {
    id: "J1",
    name: "Sushi Roll Combo",
    category: "Sushi",
    image: SUSHI_ROLL_COMBO,
    description:
      "Delight in a combination of fresh sushi rolls featuring a variety of seafood and vegetables. Served with soy sauce, pickled ginger, and wasabi.",
    ingredients: "Rice, Seaweed, Fresh Fish, Vegetables",
    specialIngredient: "Tuna",
    averageRating: 4.5,
    allergens: "Fish, Soy (soy sauce)",
    prices: [
      { size: "Regular", price: "12.99", currency: "$" },
      { size: "Deluxe", price: "18.99", currency: "$" },
    ],
    type: "food",
    index: 0,
    favourite: false,
    ratingCount: 937,
  },
  {
    id: "J2",
    name: "Teriyaki Chicken Bowl",
    category: "Rice Bowl",
    image: TERIYAKI_CHICKEN_BOWL,
    description:
      "Grilled chicken glazed with a savory teriyaki sauce, served over a bed of steamed rice and accompanied by stir-fried vegetables.",
    ingredients: "Chicken, Teriyaki Sauce, Rice, Vegetables",
    specialIngredient: "Teriyaki Glaze",
    averageRating: 4.2,
    allergens: "Soy (teriyaki sauce)",
    prices: [
      { size: "Regular", price: "10.99", currency: "$" },
      { size: "Large", price: "14.99", currency: "$" },
    ],
    type: "food",
    index: 1,
    favourite: false,
    ratingCount: 792,
  },
  {
    id: "J3",
    name: "Vegetarian Ramen",
    category: "Noodle Soup",
    image: VEGETARIAN_RAMEN,
    description:
      "A hearty bowl of ramen filled with flavorful broth, chewy noodles, and an assortment of fresh vegetables.",
    ingredients: "Ramen Noodles, Vegetarian Broth, Vegetables",
    specialIngredient: "Mushrooms",
    averageRating: 4.0,
    allergens: "Gluten (noodles)",
    prices: [
      { size: "Regular", price: "9.99", currency: "$" },
      { size: "Large", price: "13.99", currency: "$" },
    ],
    type: "food",
    index: 2,
    favourite: false,
    ratingCount: 512,
  },
];
