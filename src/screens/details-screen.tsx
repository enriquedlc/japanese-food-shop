import { RouteProp, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { useJapaneseFoodStore } from "../store/store";

import { RootStackParamList } from "../types/general";
import { COLORS } from "../theme/theme";
import { StatusBar } from "react-native";

export function DetailsScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "detailsScreen">>();
  const item = useJapaneseFoodStore((state) =>
    route.params.type === "food"
      ? state.japaneseFoodList
      : state.japaneseDrinkList,
  )[route.params.index];

  console.log(route.params);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      ></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
