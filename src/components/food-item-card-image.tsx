import { ReactNode } from "react";
import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
} from "react-native";

const CARD_WIDTH = Dimensions.get("window").width * 0.3;

interface FoodItemCardImageProps {
  image: ImageProps["source"];
  children: ReactNode;
}

export function FoodItemCardImage(props: FoodItemCardImageProps) {
  const { image, children } = props;
  return (
    <ImageBackground source={image} style={styles.cardImageBackground}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardImageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 20,
    marginBottom: 10,
    overflow: "hidden",
  },
});
