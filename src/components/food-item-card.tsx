import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
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
      <ImageBackground source={image} style={styles.cardImageBackground} />
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
  cardImageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 20,
    marginBottom: 10,
    overflow: "hidden",
  },
});
