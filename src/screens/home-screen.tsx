import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import {
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
        {/*  */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollViewStyle}
        >
          {categories.map((category, index) => (
            <View
              key={`${category}${index}`}
              style={styles.categoryScrollViewContainer}
            >
              <TouchableOpacity
                onPress={() => {
                  setCategoryIndex({ index, category });
                  setSortedJapaneseFoodList([
                    ...getFoodListByCategory(
                      japaneseFoodList,
                      categories[index],
                    ),
                  ]);
                }}
                style={styles.categoryScrollViewItem}
              >
                <Text
                  style={[
                    styles.categoryText,
                    categoryIndex.index === index
                      ? {
                          color: COLORS.primaryOrangeHex,
                        }
                      : {},
                  ]}
                >
                  {category}
                </Text>
                {categoryIndex.index === index ? (
                  <View style={styles.activeCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/*  */}
      </ScrollView>
      {/*  */}
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
  categoryScrollViewStyle: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryScrollViewContainer: {
    paddingHorizontal: 15,
  },
  activeCategory: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  categoryScrollViewItem: {
    alignItems: "center",
  },
  categoryText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: "poppins-semibold",
    color: COLORS.primaryLightGreyHex,
  },
});
