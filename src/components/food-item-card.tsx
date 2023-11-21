import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  ImageProps,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

import { COLORS } from "../theme/theme";

const CARD_WIDTH = Dimensions.get("window").width * 0.3;

interface FoodItemCardProps {
  id: string;
  index: number;
  name: string;
  type: string;
  image: ImageProps["source"];
  specialIngredient: string;
  averageRating: number;
  price: string;
  onPress: () => void;
}

export function FoodItemCard(props: FoodItemCardProps) {
  const {
    name,
    averageRating,
    id,
    image,
    index,
    onPress,
    price,
    specialIngredient,
    type,
  } = props;

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearCardGradient}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <ImageBackground source={}/>
      <Text>{name}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearCardGradient: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
