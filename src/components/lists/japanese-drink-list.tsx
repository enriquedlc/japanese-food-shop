import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { useJapaneseFoodStore } from "../../store/store";
import { FoodItemCard } from "../food-item-card";

import { RootStackParamList } from "../../types/general";

export function JapaneseDrinkList() {
  const tabBarHeight = useBottomTabBarHeight();

  const { japaneseDrinkList } = useJapaneseFoodStore((state) => state);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        <TouchableOpacity onPress={() => navigation.navigate("detailsScreen")}>
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
