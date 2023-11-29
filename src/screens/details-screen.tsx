import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";

import { useJapaneseFoodStore } from "../store/store";

import { StatusBar } from "react-native";
import { ImageBackgroundInfo } from "../components/image-background-info";
import { COLORS } from "../theme/theme";
import { RootStackParamList } from "../types/general";

export function DetailsScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "detailsScreen">>();
  const navigation = useNavigation();

  const item = useJapaneseFoodStore((state) =>
    route.params.type === "food"
      ? state.japaneseFoodList
      : state.japaneseDrinkList,
  )[route.params.index];

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <ImageBackgroundInfo
          backButtonEnabled={true}
          image={{ source: item.image }}
          type={item.type}
          id={item.id}
          favourite={item.favourite}
          name={item.name}
          specialIngredient={item.specialIngredient}
          ingredients={item.specialIngredient}
          averageRating={item.averageRating}
          ratingCount={item.ratingCount}
          toImplement="toImplement"
          goBack={goBack}
          backButtonComponent={<></>}
        />
      </ScrollView>
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
