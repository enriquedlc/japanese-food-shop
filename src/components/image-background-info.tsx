import { ReactNode } from "react";
import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { GradientBgIcon } from "./gradient-bg-icon";

import { DRINKS, FOOD, ICONS } from "../../assets";
import { TAB_BAR_ICONS } from "../../assets/tab-bar";
import { useJapaneseFoodStore } from "../store/store";
import { COLORS } from "../theme/theme";
import { Icon } from "./icon";

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
  backButtonComponent: ReactNode;
  goBack: () => void;
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
    backButtonComponent,
    goBack,
  } = props;

  const { addFavourite, removeFromFavourite } = useJapaneseFoodStore(
    (state) => state,
  );

  const toggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? removeFromFavourite(type, id) : addFavourite(type, id);
  };

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
            <TouchableOpacity onPress={goBack}>
              <GradientBgIcon
                options={{
                  source: ICONS.GO_BACK,
                  tintColor: COLORS.primaryLightGreyHex,
                }}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => toggleFavourite(favourite, type, id)}
          >
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
        {/*  */}
        <View style={styles.imageInfoOuterContainer}>
          <View style={styles.imageInfoInnerContainer}>
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.itemTitleText}>{name}</Text>
                <Text style={styles.itemSubtitleText}>{specialIngredient}</Text>
              </View>
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.propertiesFirst}>
                  <Icon
                    options={{
                      source: type === "food" ? FOOD.FOOD_TOOLS : DRINKS.DRINK,
                      tintColor: COLORS.primaryOrangeHex,
                    }}
                  />
                  <Text style={styles.firstTextProperty}>{type}</Text>
                </View>
                <View style={styles.propertiesFirst}>
                  <Icon
                    options={{
                      source: ICONS.STARS_RATE,
                      tintColor: COLORS.primaryOrangeHex,
                    }}
                  />
                  <Text style={styles.firstTextProperty}>
                    {averageRating} ({ratingCount})
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/*  */}
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
  imageInfoOuterContainer: {
    paddingVertical: 24,
    paddingHorizontal: 30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    fontFamily: "poppins",
  },
  imageInfoInnerContainer: {
    justifyContent: "space-between",
    gap: 15,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPropertiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  itemTitleText: {
    fontFamily: "poppins-semibold",
    fontSize: 24,
    color: COLORS.primaryWhiteHex,
  },
  itemSubtitleText: {
    fontFamily: "poppins-medium",
    fontSize: 12,
    color: COLORS.primaryWhiteHex,
  },
  propertiesFirst: {
    height: 55,
    width: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
  },
  firstTextProperty: {
    fontFamily: "poppins-medium",
    fontSize: 10,
    color: COLORS.primaryWhiteHex,
  },
});
