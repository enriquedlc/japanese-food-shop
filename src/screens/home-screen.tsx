import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

import { useState } from "react";
import { Header } from "../components/header";
import { useJapaneseFoodStore } from "../store/store";
import { COLORS } from "../theme/theme";
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
  >(getFoodListByCategory(japaneseFoodList, categoryIndex.category));

  console.log(japaneseFoodList);

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <Header title="japanese food app" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
});
