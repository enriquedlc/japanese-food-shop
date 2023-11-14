import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Header } from "../components/header";

import { useJapaneseFoodStore } from "../store/store";

import { ICONS } from "../../assets";
import { Icon } from "../components/icon";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
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
        <Header title="enjoy your meal!" />
        <Text style={styles.screenTitle}>
          Explore your favorite {"\n"}japanese meal
        </Text>
        {/*  */}
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Icon
              options={{
                source: ICONS.SEARCH_ICON,
                tintColor:
                  searchText.length > 0
                    ? COLORS.primaryOrangeHex
                    : COLORS.primaryLightGreyHex,
                style: {
                  marginHorizontal: SPACING.space_20,
                  width: 24,
                  height: 24,
                },
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="find what you like..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInput}
          />
        </View>
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
  inputContainer: {
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: SPACING.space_20 * 3,
    width: "100%",
    fontFamily: "poppins-medium",
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
