export const JapaneseAllergensData = [
  {
    id: "J1",
    name: "Soy Sauce",
    description:
      "Soy sauce is a popular condiment in Japanese cuisine, made from fermented soybeans, wheat, salt, and water. It adds a rich and savory flavor to dishes like sushi, ramen, and stir-fries. However, it contains gluten, making it unsuitable for individuals with gluten allergies or celiac disease.",
    allergen_type: "Gluten",
    // imagelink_square: require("../assets/japanese_food_assets/soy_sauce/soy_sauce_square.png"),
    // imagelink_portrait: require("../assets/japanese_food_assets/soy_sauce/soy_sauce_portrait.png"),
    origin: "Japan",
    substitute: "Tamari (gluten-free soy sauce)",
    is_vegan: true,
    is_nut_free: true,
    is_dairy_free: true,
    is_egg_free: true,
    is_fish_free: true,
    prices: [
      { size: "250ml", price: "3.50", currency: "¥" },
      { size: "500ml", price: "6.50", currency: "¥" },
      { size: "1L", price: "11.00", currency: "¥" },
    ],
    average_rating: 4.5,
    ratings_count: "4,567",
    favourite: false,
    type: "Condiment",
    index: 1,
  },
  {
    id: "J2",
    name: "Wheat Noodles",
    description:
      "Wheat noodles, commonly used in dishes like ramen and udon, are made from wheat flour, water, and sometimes salt. They provide a chewy texture to noodle dishes. However, individuals with gluten allergies or celiac disease should avoid wheat noodles.",
    allergen_type: "Gluten",
    // imagelink_square: require("../assets/japanese_food_assets/wheat_noodles/wheat_noodles_square.png"),
    // imagelink_portrait: require("../assets/japanese_food_assets/wheat_noodles/wheat_noodles_portrait.png"),
    origin: "Japan",
    substitute: "Rice noodles or soba noodles (made from buckwheat)",
    is_vegan: true,
    is_nut_free: true,
    is_dairy_free: true,
    is_egg_free: true,
    is_fish_free: true,
    prices: [
      { size: "200g", price: "2.50", currency: "¥" },
      { size: "400g", price: "4.50", currency: "¥" },
      { size: "1kg", price: "9.00", currency: "¥" },
    ],
    average_rating: 4.2,
    ratings_count: "3,214",
    favourite: false,
    type: "Noodle",
    index: 2,
  },
  {
    id: "J3",
    name: "Fish Sauce",
    description:
      "Fish sauce is a common condiment in Japanese and Southeast Asian cuisines, made from fermented fish and salt. It adds a savory umami flavor to dishes. However, individuals with fish allergies should avoid it. It's crucial to check labels, as fish sauce is often an ingredient in various sauces and marinades.",
    allergen_type: "Fish",
    // imagelink_square: require("../assets/japanese_food_assets/fish_sauce/fish_sauce_square.png"),
    // imagelink_portrait: require("../assets/japanese_food_assets/fish_sauce/fish_sauce_portrait.png"),
    origin: "Various (Southeast Asia)",
    substitute: "Soy sauce or miso paste",
    is_vegan: false,
    is_nut_free: true,
    is_dairy_free: true,
    is_egg_free: true,
    is_fish_free: false,
    prices: [
      { size: "150ml", price: "4.00", currency: "¥" },
      { size: "300ml", price: "7.00", currency: "¥" },
      { size: "500ml", price: "10.50", currency: "¥" },
    ],
    average_rating: 4.6,
    ratings_count: "5,892",
    favourite: false,
    type: "Condiment",
    index: 3,
  },
  {
    id: "J4",
    name: "Sesame Seeds",
    description:
      "Sesame seeds are a common ingredient in Japanese cuisine, often used as a garnish or incorporated into dishes for their nutty flavor and crunchy texture. However, individuals with sesame seed allergies should be cautious. Sesame seeds can be found in various forms, including whole seeds, oil, and paste.",
    allergen_type: "Sesame Seeds",
    // imagelink_square: require("../assets/japanese_food_assets/sesame_seeds/sesame_seeds_square.png"),
    // imagelink_portrait: require("../assets/japanese_food_assets/sesame_seeds/sesame_seeds_portrait.png"),
    origin: "Japan",
    substitute: "Poppy seeds or sunflower seeds",
    is_vegan: true,
    is_nut_free: true,
    is_dairy_free: true,
    is_egg_free: true,
    is_fish_free: true,
    prices: [
      { size: "100g", price: "3.50", currency: "¥" },
      { size: "250g", price: "6.00", currency: "¥" },
      { size: "500g", price: "11.00", currency: "¥" },
    ],
    average_rating: 4.4,
    ratings_count: "4,731",
    favourite: false,
    type: "Seed",
    index: 4,
  },
];