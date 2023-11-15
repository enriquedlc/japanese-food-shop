import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { JapaneseFood } from "../types/general";
import { getFoodListByCategory } from "../utils/utils";

import { COLORS, FONTSIZE } from "../theme/theme";

interface CategoryChooseListProps {
  categories: string[];
  categoryIndex: { index: number; category: string };
  setCategoryIndex: (index: { index: number; category: string }) => void;
  japaneseFoodList: JapaneseFood[];
  setSortedJapaneseFoodList: (japaneseFoodList: JapaneseFood[]) => void;
}

export function CategoryChooseList(props: CategoryChooseListProps) {
  const {
    categories,
    categoryIndex,
    setCategoryIndex,
    japaneseFoodList,
    setSortedJapaneseFoodList,
  } = props;

  return (
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
                ...getFoodListByCategory(japaneseFoodList, categories[index]),
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
  );
}

const styles = StyleSheet.create({
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
