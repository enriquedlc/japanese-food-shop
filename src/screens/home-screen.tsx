import { Text, View } from "react-native";

import { useState } from "react";
import { useJapaneseFoodStore } from "../store/store";
import { JapaneseFood } from "../types/general";

const getCategories = (japaneseFoodList: JapaneseFood[]) => {
  const categories = japaneseFoodList.map((food) => food.category);
  return ["All", ...new Set(categories)];
};

const getFoodListByCategory = (
  japaneseFoodList: JapaneseFood[],
  category: string,
) => {
  if (category === "All") {
    return japaneseFoodList;
  }
  return japaneseFoodList.filter((food) => food.category === category);
};

export function HomeScreen() {
  const { japaneseFoodList, japaneseAllergensList } = useJapaneseFoodStore(
    (state) => state,
  );

  const [categories, setCategories] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedJapaneseFoodList, setSortedJapaneseFoodList] = useState<
    JapaneseFood[]
  >([]);

  console.log(japaneseFoodList);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
