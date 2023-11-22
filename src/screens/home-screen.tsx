import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useRef, useState } from "react";
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

import { FoodItemCard } from "../components/food-item-card";
import { FoodListSearchBar } from "../components/food-list-search-bar";
import { JapaneseFoodList } from "../components/japanese-food-list";
import { COLORS, FONTSIZE } from "../theme/theme";
import { getFoodListByCategory } from "../utils/utils";
import { CategoryChooseList } from "./category-choose-list";

const getCategories = (japaneseFoodList: JapaneseFood[]) => {
  const categories = japaneseFoodList.map((food) => food.category);
  return ["All", ...new Set(categories)];
};

export function HomeScreen() {
  const { japaneseFoodList, japaneseDrinkList } = useJapaneseFoodStore(
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

  const japaneseFoodListRef = useRef<FlatList>(null);
  const tabBarHeight = useBottomTabBarHeight();

  const searchFood = (text: string) => {
    if (text !== "")
      japaneseFoodListRef.current?.scrollToIndex({ index: 0, animated: true });
    setCategoryIndex({ index: 0, category: "All" });
    setSortedJapaneseFoodList([
      ...japaneseFoodList.filter((food) =>
        food.name.toLowerCase().includes(text.toLowerCase()),
      ),
    ]);
  };

  const clearSearch = () => {
    japaneseFoodListRef.current?.scrollToIndex({ index: 0, animated: true });
    setCategoryIndex({ index: 0, category: "All" });
    setSortedJapaneseFoodList(japaneseFoodList);
    setSearchText("");
  };

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
          searchFood={searchFood}
          clearSearch={clearSearch}
        />
        <CategoryChooseList
          listRef={japaneseFoodListRef}
          categories={categories}
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          japaneseFoodList={japaneseFoodList}
          setSortedJapaneseFoodList={setSortedJapaneseFoodList}
        />
        {/* japanese food list */}
        <JapaneseFoodList
          sortedJapaneseFoodList={sortedJapaneseFoodList}
          japaneseFoodListRef={japaneseFoodListRef}
        />
        {/* japanese drink list */}
        <Text style={styles.drinksTitle}>Drinks</Text>
        <FlatList
          data={japaneseDrinkList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.flatListContainer,
            { marginBottom: tabBarHeight },
          ]}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <FoodItemCard
                name={item.name}
                averageRating={item.averageRating}
                id={item.id}
                image={item.image}
                index={item.index}
                onPress={() => {}}
                price={item.price}
                specialIngredient={item.specialIngredient}
                type={item.type}
                key={`${item.name}${item.id}`}
              />
            </TouchableOpacity>
          )}
        />
        {/*  */}
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
  screenTitle: {
    fontSize: FONTSIZE.size_24,
    fontFamily: "poppins-semibold",
    color: COLORS.primaryWhiteHex,
    paddingLeft: 30,
  },
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  drinksTitle: {
    fontSize: 18,
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "poppins-medium",
    color: COLORS.secondaryLightGreyHex,
  },
});
