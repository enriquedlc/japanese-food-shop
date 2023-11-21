import { LinearGradient } from "expo-linear-gradient";
import { ImageProps, StyleSheet } from "react-native";

import { CardFeatures } from "./card-features";
import { FoodItemCardImage } from "./food-item-card-image";
import { Rating } from "./rating";

import { COLORS } from "../theme/theme";

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
      <FoodItemCardImage image={image}>
        <Rating averageRating={averageRating} />
      </FoodItemCardImage>
      <CardFeatures
        name={name}
        price={price}
        specialIngredient={specialIngredient}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearCardGradient: {
    borderRadius: 25,
    padding: 15,
  },
});
