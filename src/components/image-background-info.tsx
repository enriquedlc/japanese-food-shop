import { ReactNode } from "react";
import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { GradientBgIcon } from "./gradient-bg-icon";

import { ICONS } from "../../assets";
import { TAB_BAR_ICONS } from "../../assets/tab-bar";
import { COLORS } from "../theme/theme";

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
      <ImageBackground source={image.source} style={styles.backgroundImageItem}>
        <View
          style={
            backButtonEnabled
              ? styles.imageHeaderContainerBackButtonEnabled
              : styles.imageHeaderContainerBackButtonDisabled
          }
        >
          {backButtonEnabled && (
            <TouchableOpacity>
              <GradientBgIcon
                options={{
                  source: ICONS.GO_BACK,
                  tintColor: COLORS.primaryLightGreyHex,
                }}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <GradientBgIcon
              options={{
                source: TAB_BAR_ICONS.HEART_FILLED,
                tintColor: favourite
                  ? COLORS.primaryRedHex
                  : COLORS.primaryGreyHex,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImageItem: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
  imageHeaderContainerBackButtonEnabled: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imageHeaderContainerBackButtonDisabled: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
