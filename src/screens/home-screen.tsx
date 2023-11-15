import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Header } from "../components/header";

import { useJapaneseFoodStore } from "../store/store";
import { JapaneseFood } from "../types/general";

import { FoodListSearchBar } from "../components/food-list-search-bar";
import { COLORS, FONTSIZE } from "../theme/theme";
import { getFoodListByCategory } from "../utils/utils";
import { CategoryChooseList } from "./category-choose-list";

const getCategories = (japaneseFoodList: JapaneseFood[]) => {
  const categories = japaneseFoodList.map((food) => food.category);
  return ["All", ...new Set(categories)];
};

export function HomeScreen() {
  const { japaneseFoodList, japaneseAllergensList } = useJapaneseFoodStore(
    (state) => state,
  );

  const [categories, setCategories] = useState<string[]>(
    getCategories(japaneseFoodList),
  );
  const [searchText, setSearchText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedJapaneseFoodList, setSortedJapaneseFoodList] = useState<
    JapaneseFood[]
  >(getFoodListByCategory(japaneseFoodList, categoryIndex.category));

  const tabBarHeight = useBottomTabBarHeight();

  console.log("japaneseFoodList", sortedJapaneseFoodList.length);

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <Header title="enjoy your meal!" />
        <Text style={styles.screenTitle}>
          Explore your favorite {"\n"}japanese meal
        </Text>
        <FoodListSearchBar
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <CategoryChooseList
          categories={categories}
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          japaneseFoodList={japaneseFoodList}
          setSortedJapaneseFoodList={setSortedJapaneseFoodList}
        />
      </ScrollView>
      {/*  */}
      <FlatList
        data={sortedJapaneseFoodList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sortedFoodList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <TouchableOpacity></TouchableOpacity>}
      />
      {/*  */}
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
  screenTitle: {
    fontSize: FONTSIZE.size_24,
    fontFamily: "poppins-semibold",
    color: COLORS.primaryWhiteHex,
    paddingLeft: 30,
  },
  sortedFoodList: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
