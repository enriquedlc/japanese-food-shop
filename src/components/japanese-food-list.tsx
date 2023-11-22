import { RefObject } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FoodItemCard } from "./food-item-card";

import { COLORS } from "../theme/theme";
import { JapaneseFood } from "../types/general";

interface JapaneseFoodListProps {
  sortedJapaneseFoodList: JapaneseFood[];
  japaneseFoodListRef: RefObject<FlatList>;
}

export function JapaneseFoodList(props: JapaneseFoodListProps) {
  const { sortedJapaneseFoodList, japaneseFoodListRef } = props;
  return (
    <FlatList
      ref={japaneseFoodListRef}
      ListEmptyComponent={
        <View style={styles.emptyListContainer}>
          <Text style={styles.noFoodFoundText}>No food found...</Text>
        </View>
      }
      data={sortedJapaneseFoodList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
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
            price={item.prices[0].price}
            specialIngredient={item.specialIngredient}
            type={item.type}
            key={`${item.name}${item.id}`}
          />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  noFoodFoundText: {
    fontSize: 16,
    fontFamily: "poppins-medium",
    color: COLORS.secondaryLightGreyHex,
    alignSelf: "center",
  },
  emptyListContainer: {
    width: Dimensions.get("window").width - 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
