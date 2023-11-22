import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { useJapaneseFoodStore } from "../../store/store";
import { FoodItemCard } from "../food-item-card";

export function JapaneseDrinkList() {
  const tabBarHeight = useBottomTabBarHeight();

  const { japaneseDrinkList } = useJapaneseFoodStore((state) => state);

  return (
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
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
