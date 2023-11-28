import { ReactNode } from "react";
import { ImageBackground, ImageProps, StyleSheet, View } from "react-native";

interface ImageBackgroundInfoProps {
  backButtonEnabled: boolean;
  image: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  specialIngredient: string;
  ingredients: string;
  averageRating: number;
  ratingCount: number;
  toImplement?: string;
  toggleFavourite: () => void;
  backButtonComponent: ReactNode;
}

export const ImageBackgroundInfo = (props: ImageBackgroundInfoProps) => {
  const {
    backButtonEnabled,
    image,
    type,
    id,
    favourite,
    name,
    specialIngredient,
    ingredients,
    averageRating,
    ratingCount,
    toImplement,
    toggleFavourite,
    backButtonComponent,
  } = props;

  return (
    <View>
      <ImageBackground
        source={image.source}
        style={styles.backgroundImageItem}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImageItem: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
});
