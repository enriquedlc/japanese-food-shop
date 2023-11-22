import { RefObject } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { FoodItemCard } from "../food-item-card";
import { EmptyList } from "./empty-list";

import { JapaneseFood } from "../../types/general";

interface JapaneseFoodListProps {
  sortedJapaneseFoodList: JapaneseFood[];
  japaneseFoodListRef: RefObject<FlatList>;
}

export function JapaneseFoodList(props: JapaneseFoodListProps) {
  const { sortedJapaneseFoodList, japaneseFoodListRef } = props;
  return (
    <FlatList
      ref={japaneseFoodListRef}
      ListEmptyComponent={<EmptyList text="No food found..." />}
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
});
